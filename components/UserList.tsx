"use client";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard"; //ユーザー情報を表示するインポート
import { User } from "../types/User";
import { fetchUsers } from "@/utils/api";
import Grid from '@mui/material/GridLegacy';

/// ユーザー一覧表示コンポーネント
const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  // コンポーネントが最初に表示されたときに実行される処理
  useEffect(() => {
    const fetchData = async () => {
      const allUsers = await fetchUsers(); // ユーザー一覧をAPIから取得
      setUsers(allUsers);
    };

    fetchData(); 
  }, []); 

  // 指定されたIDのユーザーを一覧から除く
  const handleDelete = (userId: number) => {
    setUsers(prev => prev.filter(user => user.id !== userId)); 
  };

  // 表示部分
  return (
    <Grid container direction="column" spacing={2}>
      {users.map(user => (
        <Grid item key={user.id} xs={12}>
          {/* 削除ボタンのonDeleteにhandleDeleteを渡す */}
          <UserCard user={user} onDelete={handleDelete} />
        </Grid>
      ))}
    </Grid>
  );
};
export default UserList;
