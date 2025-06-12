import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
// 作成済のUserListコンポーネントをインポート（表示に使うやつ）
import UserList from "../../components/UserList";

   // fetchUsers()でAPIからユーザーデータを取得して、usersという変数に入れる
  const UserListPage = async () => {
 
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        ユーザー一覧
      </Typography>
      <UserList  />
    </Container>
  );

};

export default UserListPage;
