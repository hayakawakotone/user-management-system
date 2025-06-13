// components/parts/CustomButton.tsx

import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  variantType?: 'primary' | 'secondary' | 'danger';
}

const CustomButton: React.FC<CustomButtonProps> = ({ variantType = 'primary', ...props }) => {
  let color: ButtonProps['color'] = 'primary';
// 追記部分
// 初期値はprimary、variantTypeがもしsecondaryだったら、と続く
if (variantType === 'secondary') {
    color = 'secondary'; //サブカラー紫
  } else if (variantType === 'danger') {
    color = 'error'; //エラーカラー赤
  } else {
    color = 'primary'; //メインカラー青
  }
  return (
    // variantで"contained"ボタンの見た目を統一
    // {...props}でonClickやchildrenを渡す
    <Button
      color={color}
      variant="contained"
      {...props} // ボタンに必要なすべての属性を渡すため
    >
      {props.children} {/*中身の変えられる汎用コンポーネント */}
    </Button>
  );
}

export default CustomButton;