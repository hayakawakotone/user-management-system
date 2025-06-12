// components/DeleteUserButton.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import DeleteUserButton from "../components/DeleteUserButton";

const meta: Meta<typeof DeleteUserButton> = {
  title: "Components/DeleteUserButton", // Storybook上の表示パス
  component: DeleteUserButton,
};
export default meta;
type Story = StoryObj<typeof DeleteUserButton>;

export const Default: Story = {
  args: {
    userId: 1, // 例となるユーザーID
  },
};