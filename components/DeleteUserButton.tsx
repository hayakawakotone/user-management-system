import React from "react";
import CustomButton from './parts/CustomButton'; //追記：カスタムボタンのインポート
import { softDeleteUser } from "../utils/api";

// インターフェイスの型定義：親コンポーネントから受け取るprops
interface DeleteUserButtonProps {
  userId: number; // 削除対象ユーザーID
  onDelete: (userId: number) => void; // 削除後に親へ通知する
}

// 削除ボタンの機能と表示を定義
const DeleteUserButton: React.FC<DeleteUserButtonProps> = ({ userId, onDelete }) => {
  const handleDelete = async () => {

    // 削除前に確認ダイアログを表示
    const confirmed = window.confirm("本当に削除しますか？");

    if (!confirmed) {
      // ユーザーがキャンセルしたら中断
      return;
    }

    try {
      await softDeleteUser(userId); // 論理削除
      onDelete(userId); // リスト再取得、最新に
    } catch (error) {
    
    }
  };
// クリック時に削除処理を実行するボタン
  return (
    //追記と差し替え　カスタムボタンに変更
    <CustomButton
      variantType="danger"     // 色をdangerに指定して赤色のボタンにする
      onClick={handleDelete}   // クリック時に削除処理を実行（前回からの引継ぎ）
    >
      削除                    
    </CustomButton>
  );
};

export default DeleteUserButton;
