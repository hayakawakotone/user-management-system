// components/EditUserForm.stories.tsx

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import EditUserForm from "../components/EditUserForm";

// TODO: メタデータ
const meta: Meta<typeof EditUserForm> = {
  title: "Components/EditUserForm", // Storybook上の表示パス
  component: EditUserForm,
};
export default meta;
// TODO: ストーリーの定義
type Story = StoryObj<typeof EditUserForm>;

export const Default: Story = {
  args: {
    userId: 1, // 例となるユーザーID
  },
};
