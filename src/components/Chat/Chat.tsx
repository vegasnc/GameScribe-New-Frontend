import { useState } from "react";
import remarkGfm from "remark-gfm";
import { AnimatePresence, motion } from "framer-motion";
import Markdown from "react-markdown";
import { AiStars } from "~/components/Icons";
import { useChatMessages, useChatState } from "~/store/store";
import { CHAT_LOADERS } from "./constants";
import type { iMessage, Role } from "~/types/chat.types";
import { Avatar } from "~/components/Avatar";
import GSAvatar from "~/components/Avatar/Avatar";

// vars for controlling duration of animation
const HEIGHT = 508;
const HEIGHT_DUR = 0.4;
const OPAC_DUR = 0.25;
const OPAC_DELAY = 0.15;

const Chat = () => {
  const messages = useChatMessages();

  const {
    isChatOpen,
  } = useChatState();

  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {isChatOpen && (
          <motion.div
            className="container relative w-full overflow-y-auto"
            initial={{ height: 0, opacity: 0, paddingBlock: 0 }}
            animate={{
              height: `${HEIGHT}px`,
              opacity: 1,
              paddingBlock: "16px",
              transition: {
                height: { duration: HEIGHT_DUR },
                opacity: { duration: OPAC_DUR, delay: OPAC_DELAY },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              padding: 0,
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

type RoleMap = Record<Role, { avatar: React.ReactNode; name: string, format: React.ReactNode }>;

export const Message = ({ msg }: MessageProps) => {
  // TEMP LOADING VAR
  const [loading, setLoading] = useState(false);
  const role: RoleMap = {
    user: {
      avatar: <Avatar size="xs" />,
      name: "You",
      format: msg.content,
    },
    assistant: {
      avatar: <GSAvatar src={AiStars} size="xs" />,
      name: "GameScribe AI",
      format: <Markdown remarkPlugins={[remarkGfm]}>{msg.content}</Markdown>
    },
  };
  return (
    <div>
      <div className="align-start flex gap-2">
        <div className="text-theme">{role[msg.role].avatar}</div>
        <p className="font-bold">{role[msg.role].name}</p>
      </div>
      <div className="flex flex-col gap-[4px]">
        {loading ? (
          <p className="text-text-40">{CHAT_LOADERS[0]}</p>
        ) : (
          <div className="prose">
            {role[msg.role].format}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
