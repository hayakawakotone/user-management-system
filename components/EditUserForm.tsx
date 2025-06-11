// components/EditUserForm.tsx

"use client"; // クライアントコンポーネントとしてマーク
// 初期import
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Typography } from "@mui/material";
import { fetchUserById, updateUser } from "../utils/api";
import { User } from "@/types/User";

// 2-a：Propsのインターフェース定義
interface EditUserFormProps {
  userId: number;
  onSuccess?: () => void;
}

// 必要に応じて利用する　2-bでそのまま使用
interface EditUserFormInputs {
  name: string;
  email: string;
  role: string;
}

// TODO: ユーザー編集フォームコンポーネントを実装する
const EditUserForm: React.FC<EditUserFormProps> = ({ userId ,onSuccess}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<EditUserFormInputs>();


  // userId（対象ユーザー）が変わったときや、reset関数が変わったときに中の処理が実行
  useEffect(() => {
    const getUser = async () => {
      try {
        const user: User | null = await fetchUserById(userId);
        if (user) {
          setValue("name", user.name);
          setValue("email", user.email);
          setValue("role", user.role);
        } else {
        }
      } catch (err) {
      } 
    };
    getUser();
  }, [userId, setValue]);

  const onSubmit: SubmitHandler<EditUserFormInputs> = async (data) => {
    try {
      await updateUser(userId, data);
        if (onSuccess) {
        onSuccess();
      }  // APIに更新依頼
      alert("更新しました！");
    } catch (error) {
      console.error("更新エラー:", error);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        ユーザー情報編集
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="名前"
          {...register("name", { required: "名前は必須です" })}
          error={!!errors.name}
          helperText={errors.name?.message}
          fullWidth
          margin="normal"
        />
        <TextField
          label="メール"
          type="email"
          {...register("email", {
            required: "メールは必須です",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "メールの形式が正しくありません",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
          fullWidth
          margin="normal"
        />
        <TextField
          label="役職"
          {...register("role", { required: "ロールは必須です" })}
          error={!!errors.role}
          helperText={errors.role?.message}
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          更新
        </Button>
      </form>
    </Box>
  );
};

export default EditUserForm;
