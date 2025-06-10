// components/RegisterForm.tsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";
import { useRouter } from "next/navigation";
import { createUser } from "../utils/api";

export interface RegisterFormProps {
  onSuccess?: () => void;
}

// 必要に応じて利用する
interface RegisterFormInputs {
  name: string;
  email: string;
  role: string;
}


// TODO: 新規登録フォームコンポーネントを実装する
  // 必要に応じて利用する
 const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

    const router = useRouter();
   const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    try {
      await createUser(data);
      if (onSuccess) {
        onSuccess();
      } 
    } catch (error) {
          }
  };
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        新規登録
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
          label="ロール"
          {...register("role", { required: "ロールは必須です" })}
          error={!!errors.role}
          helperText={errors.role?.message}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          登録
        </Button>
      </form>
    </Box>
  );
};

export default RegisterForm;
