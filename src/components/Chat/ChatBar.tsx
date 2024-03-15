import { useChatActions, useChatState } from "~/store/store";
import { ChevronLeft, IconX } from "../Icons";
import { DEFAULT_CHAT } from "./constants";

const ChatBar = () => {
  const { setChat } = useChatActions();
  const { setIsHistoryOpen, setIsChatOpen, isHistoryOpen, isChatOpen, setActiveId } = useChatState();

  // async wrapper for controlling which view closes first
  const asyncClose = async (cb: (data: boolean) => void) => {
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

  return isChatOpen && 
    <div className="flex justify-between w-full text-theme items-center">
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
}

export default ChatBar;
