import React from "react";
import UserCard from "./UserCard"; //ユーザー情報を表示するインポート
import { User } from "../types/User";

// props 型定義
// 親コンポーネントから渡される users 配列を受け取る
interface UserListProps {
  users: User[];
}

//ユーザー一覧表示用の関数コンポーネント

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {/* users 配列の中身を1つずつ処理、それを UserCard に渡す表示 */}
      {users.map((user) => (
        // UserCard を  keyでユーザー1人分として表示
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
// このコンポーネントを外部で使えるようにエクスポート
export default UserList;

