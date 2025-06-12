// components/UserDetails.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import UserDetails from "../components/UserDetails";

const meta: Meta<typeof UserDetails> = {
  title: "Components/UserDetails", 
  component: UserDetails,
};
export default meta;
// ストーリーの定義
type Story = StoryObj<typeof UserDetails>;

export const Default: Story = {
  args: {
    // 仮データ
    user:{
        id:1,
        name:'テスト',
        email:'test',
        role:'aaa',
        deleted:false,
    }
  },
};
