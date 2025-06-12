import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
// 表示対象のコンポーネントUserListをインポート（相対パスに注意）
import UserList from "./UserList";

// ユーザー型（User）を定義したファイルからインポート（propsの型指定に使う）
import { User } from "../types/User";

// Storybookに渡すメタ情報
const meta: Meta<typeof UserList> = {
  title: "Components/UserList",
  component: UserList,
};

// このファイルからエクスポート
export default meta;

// ストーリーの型定義
type Story = StoryObj<typeof UserList>;

// ユーザーリストを表示する（テスト用）
const dummyUsers: User[] = [
  {
      id: 1, name: "テスト１", email: "yamada@example.com", role: "test1",
      deleted: false
  },
  {
      id: 2, name: "テスト2", email: "sato@example.com", role: "test2",
      deleted: false
  },
];

// 「Default」という名前のストーリーを定義
export const Default: Story = {
  args: {
    users: dummyUsers, // propsとして渡す値
  },
};