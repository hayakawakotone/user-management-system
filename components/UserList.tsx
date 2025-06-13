"use client";
import React, { useEffect, useState } from "react";
import CustomCard from "./parts/CustomCard"; //UserCardのインポートを削除
import CustomButton from "./parts/CustomButton"; //CustomCard と CustomButton を インポート
import { User } from "../types/User";
import { fetchUsers } from "@/utils/api";
import Grid from '@mui/material/GridLegacy';
import { Button, Link } from "@mui/material";

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

  function handleDetail(id: number) {
    throw new Error("Function not implemented.");
  }

  function handleEdit(id: number) {
    throw new Error("Function not implemented.");
  }

  // 表示部分
 return (
    <Grid container direction="column" spacing={2}>
      {users.map(user => (
        <Grid item key={user.id} xs={12}>
          {/* UserCardではなくCustomCardに置き換え */}
          <CustomCard
            // title にユーザー名をセット
            title={user.name}
            // description にメールアドレスと役職をまとめてセット
            description={`Email: ${user.email}\nRole: ${user.role}`}
            // 2.c actions に削除ボタンを渡す
           actions={
  <>
    {/* 削除ボタン */}
    <CustomButton
      variantType="danger"
      onClick={() => {
        if (window.confirm("本当に削除しますか？")) {
          handleDelete(user.id);
        }
      }}
    >
      削除
    </CustomButton>

    {/* 編集ボタン */}
    <Button size="small" component={Link} href={`/users/${user.id}/edit`}>
          編集
        </Button>
        
        <Button variant="contained" color="primary" component={Link} href={`/users/${user.id}/details`}>
          詳細
        </Button>
  </>
}
          />
        </Grid>
      ))}
    </Grid>
  );
};
export default UserList;
