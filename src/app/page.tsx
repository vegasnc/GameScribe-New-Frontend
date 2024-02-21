import { unstable_noStore as noStore } from "next/cache";
import { motion } from "framer-motion";
import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import {
  FloatingImage,
  SkullVector,
} from "~/components/Background/FloatingImage";
import {
  AppleIcon,
  ChevronRight,
  CollectionsIcon,
  DiscordIcon,
  GoogleIcon,
  InformationIcon,
  ShieldIcon,
} from "~/components/Icons";
import { Button } from "~/components/Buttons/Button";

export default async function Home() {
  noStore();
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden bg-[#070C15]">
      <div className="jusfify-center relative flex w-full flex-row">
        <FloatingImage />
        <div className="z-30 flex w-full flex-row justify-center">
          <div className="w-max">
            <h1 className="absolute left-[74px] font-stat text-[32px] font-bold leading-[110%] text-bg-80 sm:top-[48px] 2xl:top-[58px]">
              GAMESCRIBE
            </h1>
          </div>
          <div className="flex w-full flex-row justify-center sm:py-[48px] 2xl:px-[74px] 2xl:py-[58px]">
            <div className="z-30 flex w-[500px] shrink-0 flex-col items-center justify-between rounded-[52px] bg-bg-80 p-[52px] shadow-lg">
              <div className="flex w-full flex-col items-center">
                <SkullVector />
                <h1 className="w-[234px] text-center font-stat text-[32px] font-bold leading-[110%]">
                  WELCOME TO GAMESCRIBE
                </h1>
              </div>
              <div className="jusfify-center flex w-[380px] flex-col items-center gap-[20px] p-[36px]">
                <p className="font-bold text-theme">Sign up to</p>
                <div className="grid grid-cols-6 gap-4">
                  <div className="flex items-center">
                    <InformationIcon />
                  </div>
                  <p className="col-span-5">
                    Keep track of your browsing history, favorites
                  </p>
                  <div className="flex items-center">
                    <ShieldIcon />
                  </div>
                  <p className="col-span-5">
                    Connect with friends on GameScribe
                  </p>
                  <div className="flex items-center">
                    <CollectionsIcon />
                  </div>
                  <p className="col-span-5">
                    Access to your personal collections and achievements
                  </p>
                </div>
              </div>
              <div className="flex w-[380px] flex-col gap-[10px]">
                <button className="hover:bg-[#5438c780] flex h-[42px] w-full items-center justify-center gap-[4px] rounded-[8px] bg-theme font-bold text-bg duration-[.2s] tranisition-ease">
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
              <div className="mt-[20px] flex flex-col items-center gap-[10px]">
                <a className="cursor-pointer font-bold text-theme hover:underline">
                  Sign in
                </a>
                <p className="text-gray font-bold">or</p>
                <a className="cursor-pointer font-bold text-theme hover:underline">
                  Continue without an account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
