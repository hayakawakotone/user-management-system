// app/users/[id]/details/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Next.js 13 App Router の params取得用
import UserDetails from "../../../../components/UserDetails";
import { User } from "../../../../types/User";
import { fetchUserById } from "@/utils/api";

const UserDetailsPage =  () => {
  // 2.a URLパラメータからuserIdを取得
  const params = useParams();
  const userId = params?.id;
  const [user, setUser] = useState<User|null>(null);

  // 2.b fetchUserById() でユーザー情報を取得
  // awaitなので async 
    useEffect(() => {
      const fetchData = async () => {
        const data: User | null = await fetchUserById(Number(userId));
        if(data){
          setUser(data);
        }
      };
  
      fetchData(); 
    }, []); 
  

  if (!user) {
    return <div>ユーザーが見つかりません。</div>;
  }

  // 3.UserDetailsにuserを渡して画面に表示
  return <UserDetails user={user} />;
};

export default UserDetailsPage;
