import React from "react";
import { User } from "../types/User"; // ユーザー型の定義
import { Box, Typography, Paper } from "@mui/material"; // MUIのUIコンポーネント

// propsの型定義：このコンポーネントが受け取るデータ（1人分のユーザー情報）
interface UserDetailsProps {
  user: User;
}
//ユーザー詳細表示用のコンポーネント定義
// 子コンポーネント（UserDetails）でpropsを受け取る
const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    // Paper：デザインの指定
    <Paper elevation={3} sx={{ p: 3, maxWidth: 500, mx: "auto", mt: 4 }}>
      {/* タイトル見出し */}
      <Typography variant="h5" gutterBottom>
        ユーザー詳細情報
      </Typography>

      {/* 詳細情報の表示 子コンポーネント（UserDetails）がpropsを使って画面表示する　*/}
      <Box sx={{ mt: 2 }}>
        <Typography>
          <strong>ID:</strong> {user.id}
        </Typography>
        <Typography>
          <strong>名前:</strong> {user.name}
        </Typography>
        <Typography>
          <strong>メールアドレス:</strong> {user.email}
        </Typography>
        <Typography>
          <strong>役職:</strong> {user.role}
        </Typography>
      </Box>
    </Paper>
  );
};

// このコンポーネントを他ファイルから使えるようにエクスポート
export default UserDetails;
