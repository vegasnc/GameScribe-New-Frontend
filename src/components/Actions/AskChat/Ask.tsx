import { useState, useRef, useEffect } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { motion } from "framer-motion";
import { AskChatContext } from "./context";
import { History } from "./History";
import { Chat } from "./Chat";
import { AiStars } from "~/components/Icons";
import { Shortcut } from "~/components/Shortcuts/Shortcut";

export const Ask = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputIsFocused, setInputIsFocused] = useState<boolean>(false);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(false);
  const [activeId, setActiveId] = useState<string>("");
  const toggleFocus = () => {
    inputRef.current?.focus();
    setIsChatOpen(true);
  };

  useEffect(() => {
    const handleFocusChange = () => {
      setInputIsFocused(document.activeElement === inputRef.current);
    };

    document.addEventListener("focusin", handleFocusChange);
    document.addEventListener("focusout", handleFocusChange);

    return () => {
      document.removeEventListener("focusin", handleFocusChange);
      document.removeEventListener("focusout", handleFocusChange);
    };
  }, []);

  useHotkeys("meta+a", toggleFocus);
  useHotkeys("meta+enter", toggleFocus);

  const styles = inputIsFocused ? "text-theme" : "text-gray-light";

  return (
    <AskChatContext.Provider
      value={{
        activeId,
        isHistoryOpen,
        isChatOpen,
        setIsHistoryOpen,
        setIsChatOpen,
        setActiveId
      }}
    >
      <motion.div
        className={`fixed bottom-5 left-0 right-0 mx-auto flex h-auto w-max justify-between rounded-[24px] bg-bg backdrop-blur-[40px]`}
        style={{
          boxShadow: "0px 40px 200px 0px #80808060",
        }}
      >
        <History />
        <div className="flex w-[404px] flex-col items-center justify-between p-[24px]">
          <Chat />
          <div className={"flex w-full items-center justify-between"}>
            <div className="flex items-center">
              <div className={`${styles}`}>
                <AiStars />
              </div>
              <input
                ref={inputRef}
                className="border-none bg-transparent focus:border-transparent focus:ring-0"
                type="text"
                placeholder="Ask GameScribe..."
                onFocus={() => setIsChatOpen(true)}
              />
            </div>
            <Shortcut keys={["⌘A", "⌘⏎"]} />
          </div>
        </div>
      </motion.div>
    </AskChatContext.Provider>
  );
};
