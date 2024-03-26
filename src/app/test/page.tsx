"use client";
import { useEffect, Suspense } from "react";
import { Chat, ChatMode, History, Input } from "~/components/Chat";
import { GSLogo } from "~/components/Icons";
import { ToggleMode } from "~/components/Navbar/Nav";
import { useChatState } from "~/store/chat.slice";

const TestPage = () => {
  const { setIsChatOpen, setIsHistoryOpen } = useChatState();
  useEffect(() => {
    setIsChatOpen(true);
    setIsHistoryOpen(true);
  }, []) //eslint-disable-line
  return (
    <Suspense>
      <div className="flex h-screen w-full flex-col relative">
        <div className="h-[70px] w-full border-b-2 border-slate-300">
          <div className="h-full flex justify-between items-center px-3 sm:px-20">
            <div className="text-text">
              <GSLogo />
            </div>
            <ToggleMode />
          </div>
        </div>
        <div className="flex h-full flex-col items-center bg-bg px-3 py-5">
          <div className="flex h-full w-full justify-between gap-3">
            <div className="hidden sm:flex h-full overflow-y-auto">
              <History />
            </div>
            <div className="flex flex-col w-full justify-between">
              <ChatMode />
              <Chat />
              <Input />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default TestPage;
