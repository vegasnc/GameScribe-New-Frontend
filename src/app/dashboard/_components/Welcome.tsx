"use client";

import { useRouter } from "next/navigation";
import Avatar from "~/components/Avatar/Avatar";
import { Button } from "~/components/Buttons/Button";
import { ChevronRight } from "~/components/Icons";
import { useUserStore } from "~/store";

export const Welcome = () => {
  const { nickname } = useUserStore((state) => state);
  const router = useRouter();
  return (
    <div className="flex h-full w-[329px] flex-col items-center justify-center gap-[20px]">
      <Avatar />
      <h1 className="text-[28px]">Welcome, {nickname}!</h1>
      <p className="text-center">
        Now you have set up your account, let’s see what GameScribe can do for
        you.
      </p>
      <Button onClick={() => router.replace("/dashboard")}>
        {"Let's dig in"}
        <ChevronRight />
      </Button>
    </div>
  );
};
