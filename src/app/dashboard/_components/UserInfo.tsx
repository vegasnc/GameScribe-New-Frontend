"use client";

import { useUserStore } from "~/store";

export const UserInfo = () => {
  const { nickname } = useUserStore((state) => state);

  return (
    <div className="items center flex h-screen w-screen flex-col justify-center">
      <div>Welcome, {nickname}!</div>
    </div>
  );
};
