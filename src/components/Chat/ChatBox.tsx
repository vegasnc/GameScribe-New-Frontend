import { AnimatePresence, motion } from "framer-motion";
import type {
  ChatBoxComponent,
  ChatBoxInnerComponent,
  ChatBoxContainerComponent,
} from "./types";
import { Chat, History, Input, ChatBar } from ".";
import { useChatState } from "~/store/store";

const ChatBox: ChatBoxComponent = () => {
  return (
    <ChatBox.Container>
      <History />
      <ChatBox.Inner>
        <ChatBar />
        <Chat />
        <Input />
      </ChatBox.Inner>
    </ChatBox.Container>
  );
};

const Container: ChatBoxContainerComponent = ({ children }) => {
  const { isChatOpen, isHistoryOpen } = useChatState();
  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        className="fixed bottom-5 left-0 right-0 mx-auto flex h-auto justify-between rounded-[24px] bg-bg backdrop-blur-[40px]"
        initial={{
          width: "404px",
        }}
        animate={isChatOpen ? { width: isHistoryOpen ? "800px" : "600px" } : { width: "404px" }}
        exit={{ width: "404px" }}
        style={{
          boxShadow: "0px 40px 200px 0px #80808060",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const Inner: ChatBoxInnerComponent = ({ children }) => {
  return (
    <div className="relative flex w-full flex-col items-center justify-between p-[24px] ">
      {children}
    </div>
  );
};

ChatBox.Container = Container;
ChatBox.Inner = Inner;

export default ChatBox;
