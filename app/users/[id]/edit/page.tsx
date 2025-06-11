// app/users/[id]/edit/page.tsx

"use client"; // クライアントコンポーネントとしてマーク

import React from "react";
import EditUserForm from "../../../../components/EditUserForm";
import { useParams, useRouter } from "next/navigation";
import { Typography, Box } from "@mui/material";

const EditUserPage: React.FC = () => {
  // URLパラメータからユーザーIDを取得,文字型
  const params = useParams();
  const userId = params.id as string;

  // ユーザー編集後に戻すルーター、importにuseRouterを追加
  const router = useRouter();

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        ユーザー編集
      </Typography>
      {/* ユーザー編集フォームを表示
          - userId: どのユーザーを編集するか指定
          - onSuccess: 更新成功時に /users にリダイレクトするように */}
      <EditUserForm
        userId={userId}
        onSuccess={() => {
          router.push("/users"); // ユーザー一覧ページへ遷移
        }}
      />
    </Box>
  );
};

export default EditUserPage;
