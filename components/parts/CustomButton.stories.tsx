// components/parts/CustomButton.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import CustomButton from "./CustomButton";

const meta: Meta<typeof CustomButton> = {
  title: "Components/Parts/CustomButton",
  component: CustomButton,
  tags: ["autodocs"],
};

// メタデータのエクスポート
export default meta;
// ストーリーの定義
type Story = StoryObj<typeof CustomButton>;

export const Primary: Story = {
  args: {
    variantType: "primary",
    children: "Primary Button",
  },
};

// Secondary ボタンストーリー
export const Secondary: Story = {
  args: {
    variantType: "secondary", // variantType:secondaryを指定
    children: "Secondary Button", // ボタンテキスト
  },
};

// Danger ボタンストーリー
export const Danger: Story = {
  args: {
    variantType: "danger", // variantType:dangerを指定
    children: "Danger Button", // ボタンテキスト
  },
};
