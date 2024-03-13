import { useContext, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AskChatContext } from "./context";
import type { iAskChatContext } from "./types";
import { AiStars, ChevronLeft, IconX } from "~/components/Icons";
import { useChatActions, useChatLoading, useChatMessages } from "~/store/store";
import { CHAT_LOADERS, DEFAULT_CHAT } from "./constants";
import type { iMessage, Role } from "~/types/chat.types";
import { Avatar } from "~/components/Avatar";
import GSAvatar from "~/components/Avatar/Avatar";

// vars for controlling duration of animation
const HEIGHT = 508;
const HEIGHT_DUR = 0.4;
const OPAC_DUR = 0.25;
const OPAC_DELAY = 0.15;

export const Chat = () => {
  const messages = useChatMessages();
  const { setChat } = useChatActions();

  const {
    isChatOpen,
    isHistoryOpen,
    setIsHistoryOpen,
    setIsChatOpen,
    setActiveId,
  } = useContext(AskChatContext)! as iAskChatContext; // eslint-disable-line

  // async wrapper for controlling which view closes first
  const asyncClose = async (cb: Dispatch<SetStateAction<boolean>>) => {
    cb(false);
    await new Promise((resolve) => setTimeout(resolve, 300));
  };

  // handles closing chat or chat and history
  const handleHideChat = async () => {
    if (isHistoryOpen) await asyncClose(setIsHistoryOpen);
    await asyncClose(setIsChatOpen);
    setChat(DEFAULT_CHAT);
    setActiveId("");
  };

  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {isChatOpen && (
          <motion.div
            className="relative w-full"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: `${HEIGHT}px`,
              opacity: 1,
              transition: {
                height: { duration: HEIGHT_DUR },
                opacity: { duration: OPAC_DUR, delay: OPAC_DELAY },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: HEIGHT_DUR,
                },
                opacity: {
                  duration: OPAC_DUR,
                },
              },
            }}
          >
            <div className="mb-3 flex w-full items-center justify-between text-theme">
              <div
                className="flex cursor-pointer items-center gap-1 rounded-[4px] bg-theme-ex-light px-[4px] py-[2px]"
                onClick={() => setIsHistoryOpen(true)}
              >
                {!isHistoryOpen && (
                  <>
                    <div className="flex h-[15px] w-[15px] cursor-pointer items-center">
                      <ChevronLeft />
                    </div>
                    <h1>history</h1>
                  </>
                )}
              </div>
              <div
                className="h-max w-max cursor-pointer"
                onClick={() => handleHideChat()}
              >
                <IconX />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              {messages.map((msg) => (
                <Message key={msg.id} msg={msg} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

interface MessageProps {
  msg: iMessage;
}

type RoleMap = Record<Role, { avatar: React.ReactNode; name: string }>;

export const Message = ({ msg }: MessageProps) => {
  // TEMP LOADING VAR 
  const [loading, setLoading] = useState(true);
  const role: RoleMap = {
    user: {
      avatar: <Avatar size="xs" />,
      name: "You",
    },
    assistant: {
      avatar: <GSAvatar src={AiStars} size="xs" />,
      name: "GameScribe AI",
    },
  };
  return (
    <div className="align-start flex gap-2">
      <div className="text-theme">{role[msg.role].avatar}</div>
      <div className="flex flex-col gap-[4px]">
        <p className="font-bold">{role[msg.role].name}</p>
        {loading ? <p className="text-text-40">{CHAT_LOADERS[0]}</p>: <p className="">{msg.content}</p> }
      </div>
    </div>
  );
};
