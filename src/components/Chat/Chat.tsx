import remarkGfm from "remark-gfm";
import { AnimatePresence, motion } from "framer-motion";
import Markdown from "react-markdown";
import { AiStars, GSIcon } from "~/components/Icons";
import { useChatMessages, useChatState } from "~/store/chat.slice";
import { CHAT_LOADERS } from "./constants";
import type { iMessage, Role } from "~/types/chat.types";
import GSAvatar from "~/components/Avatar/Avatar";

// vars for controlling duration of animation
const HEIGHT = 508;
const HEIGHT_DUR = 0.4;
const OPAC_DUR = 0.25;
const OPAC_DELAY = 0.15;

const Chat = () => {
  const messages = useChatMessages();
  const {
    isLoading,
    isChatOpen,
  } = useChatState();

  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {isChatOpen && (
          <motion.div
            className="container relative w-full overflow-y-auto bg-gray-ex-light rounded-[12px]"
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
            <div className={`flex flex-col gap-5 px-3 ${messages.length < 1 ? "h-full" : ""}`}>
              {messages.length < 1 && <div className="flex flex-col gap-3 text-text-60 h-full w-full items-center justify-center"><GSIcon height="100" width="100"/>Start Adventuring</div>}
              {messages.map((msg) => (
                <Message key={msg.id} msg={msg} />
              ))}
              {isLoading && <p>{CHAT_LOADERS[~~(Math.random() * CHAT_LOADERS.length - 1)]}</p>} 
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
  const role: RoleMap = {
    user: {
      avatar: <GSAvatar src={GSIcon} size="xs" />,
      name: "You",
      format: msg.content,
    },
    assistant: {
      avatar: <GSAvatar src={AiStars} size="xs" />,
      name: "GameScribe AI",
      format: <Markdown className={"markdown w-full"} remarkPlugins={[remarkGfm]}>{msg.content}</Markdown>
    },
  };
  return (
    <div className="flex h-full gap-5">
      <div className="align-start flex gap-2">
        <div className="text-theme">{role[msg.role].avatar}</div>
      </div>
      <div className="flex flex-col gap-[4px] w-full">
        <p className="text-theme font-bold">{role[msg.role].name}</p>
        <div className="prose text-text">
          {role[msg.role].format}
        </div>
      </div>
    </div>
  );
};

export default Chat;
