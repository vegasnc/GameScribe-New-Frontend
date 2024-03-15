import { useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { Shortcut } from "~/components/Shortcuts/Shortcut";
import { AiStars } from "~/components/Icons";
import { useToggleFocus } from "./hooks/useToggleFocus";
import { useChatActions, useChatState } from "~/store/store";
import { Button } from "../Buttons/Button";
import { twJoin } from "tailwind-merge";

const Input = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [newMessage, setNewMessage] = useState<string>("");
  const { pushMessage } = useChatActions();
  const { isChatOpen, setIsChatOpen } = useChatState();

  const { isFocused } = useToggleFocus<HTMLTextAreaElement>({ ref: inputRef });

  const toggleFocus = () => {
    inputRef.current?.focus();
    setIsChatOpen(true);
  };

  useHotkeys("meta+a", toggleFocus);
  useHotkeys("meta+enter", toggleFocus);

  const styles = isFocused ? "text-theme" : "text-gray-light";

  const handleSendMessage = () => {
    if (!newMessage) return;
    pushMessage({
      content: newMessage,
      timestamp: new Date(Date.now()).getUTCHours(),
      role: "user",
      id: "1",
    });
  };

  return (
    <div className={"flex items-center w-full justify-between"}>
      <div className={twJoin("flex items-center w-full rounded-[8px]", isChatOpen ? "bg-gray-ex-light p-[10px]": "bg-transparent")}>
        <div className={`${styles}`}>
          <AiStars />
        </div>
        <textarea
          ref={inputRef}
          className="border-none bg-transparent focus:border-transparent focus:ring-0 w-full resize-none"
          placeholder="Ask GameScribe..."
          onFocus={toggleFocus}
          value={isChatOpen ? newMessage : ""}
          onChange={(e) => setNewMessage(e.currentTarget.value)}
          rows={1}
          tabIndex={0}
        />
        {isChatOpen ? (
          <Button styles={"w-max"} onClick={handleSendMessage}>Submit</Button>
        ) : (
          <Shortcut keys={["⌘A", "⌘⏎"]} />
        )}
      </div>

    </div>
  );
};

export default Input;
