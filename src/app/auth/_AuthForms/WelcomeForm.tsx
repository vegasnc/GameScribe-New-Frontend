"use client"
import { useRouter } from "next/navigation";
import { SkullVector } from "~/components/Background/FloatingImage";
import {
  InformationIcon,
  ShieldIcon,
  CollectionsIcon,
  ChevronRight,
  GoogleIcon,
  AppleIcon,
  DiscordIcon,
} from "~/components/Icons";
import { Options } from "~/components/Forms/Options";

export const WelcomeForm = () => {
  const router = useRouter();

  const handleGoToSignUp = () => {
    router.push("?form=signup");
  }

  return (
    <div className="flex h-[650px] 2xl:h-[700px] w-[380px] flex-col justify-between ">
      <div className="flex w-full flex-col items-center">
        <SkullVector />
        <h1 className="w-[234px] text-center font-stat text-[32px] font-bold leading-[110%]">
          WELCOME TO GAMESCRIBE
        </h1>
      </div>
      <div className="jusfify-center flex w-[380px] flex-col items-center gap-3 p-[28px]">
        <p className="font-bold text-theme">Sign up to</p>
        <div className="grid grid-cols-6 gap-2">
          <div className="flex items-center">
            <InformationIcon />
          </div>
          <p className="col-span-5">
            Keep track of your browsing history, favorites
          </p>
          <div className="flex items-center">
            <ShieldIcon />
          </div>
          <p className="col-span-5">Connect with friends on GameScribe</p>
          <div className="flex items-center">
            <CollectionsIcon />
          </div>
          <p className="col-span-5">
            Access to your personal collections and achievements
          </p>
        </div>
      </div>
      <div className="flex w-[380px] flex-col gap-1">
        <button className="tranisition-ease flex h-[42px] w-full items-center justify-center gap-[4px] rounded-[8px] bg-theme font-bold text-bg duration-[.2s] hover:bg-[#5438c780]" onClick={handleGoToSignUp}>
          Sign up <ChevronRight />{" "}
        </button>
        <button className="flex h-[42px] w-full items-center justify-center gap-[10px] rounded-[8px] bg-[#fff] font-bold text-text">
          <div className="flex w-full items-center justify-center gap-[10px]">
            <GoogleIcon />
            Continue with Google
          </div>
        </button>
        <button className="flex h-[42px] w-full items-center justify-center gap-[10px] rounded-[8px] bg-[#070C15] font-bold text-bg">
          <div className="flex w-full items-center justify-center gap-[10px]">
            <AppleIcon />
            Continue with Apple
          </div>
        </button>
        <button className="flex h-[42px] w-full items-center justify-center gap-[10px] rounded-[8px] bg-[#5865F2] font-bold text-bg">
          <div className="flex w-full items-center justify-center gap-[10px]">
            <DiscordIcon />
            Continue with Discord
          </div>
        </button>
      </div>
      <Options />
    </div>
  );
};
