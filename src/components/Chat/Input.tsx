import { useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { Shortcut } from "~/components/Shortcuts/Shortcut";
import { AiStars } from "~/components/Icons";
import { useToggleFocus } from "./hooks/useToggleFocus";
import { useChatActions, useChatState } from "~/store/store";
import { Button } from "../Buttons/Button";

const Input = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [newMessage, setNewMessage] = useState<string>("");
  const { pushMessage } = useChatActions();
  const { isChatOpen, setIsChatOpen } = useChatState();

  const { isFocused } = useToggleFocus<HTMLInputElement>({ ref: inputRef });

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
          onFocus={toggleFocus}
          value={newMessage}
          onChange={(e) => setNewMessage(e.currentTarget.value)}
        />
      </div>
      {isChatOpen ? (
        <Button onClick={handleSendMessage}>Submit</Button>
      ) : (
        <Shortcut keys={["⌘A", "⌘⏎"]} />
      )}
    </div>
  );
};

export default Input;
