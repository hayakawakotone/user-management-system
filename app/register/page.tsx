// app/register/page.tsx

"use client"; // クライアントコンポーネントとしてマーク
// このファイルはクライアントコンポーネントであることを明示
// Next.jsのApp Routerではデフォルトはサーバーコンポーネントなので、
// フォームやイベントなどを使うときは 'use client' が必要

import React from "react";
import RegisterForm from "../../components/RegisterForm";
import { Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation";

// 新規ユーザー登録ページのコンポーネント
// TODO: 新規登録ページを実装し、RegisterFormコンポーネントを使用する
const RegisterPage: React.FC = () => {
  // レイアウト用。maxWidth=600で横幅制限、mx="auto"で中央寄せ、mt=4で上余白
  const router = useRouter();
  const handleSuccess = () => {
    router.push("/users");
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        新規登録
      </Typography>
      <RegisterForm onSuccess={handleSuccess} />
    </Box>
  );
};

export default RegisterPage;
