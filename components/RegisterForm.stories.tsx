// components/RegisterForm.stories.tsx
// Reactをimport、storybookをimport、egisterFormをimport、
import type { Meta, StoryObj } from "@storybook/react";
import RegisterForm from "./RegisterForm";

// TODO: メタデータ
const meta: Meta<typeof RegisterForm>={
title:"components/RegisterForm",
component:RegisterForm,
};
export default meta;
// TODO: ストーリーの定義
// typeof RegisterForm は
//  RegisterForm コンポーネント自体の型
type Story =StoryObj<typeof RegisterForm>
// TODO: デフォルトストーリーの設定
export const Default: Story = {
    // args 
    // コンポーネントに渡すprops」をまとめて指定す

};
