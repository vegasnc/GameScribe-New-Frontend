import { useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { AiStars } from "../Icons";
import { Shortcut } from "../Shortcuts/Shortcut";

export const Ask = () => {
  const handleHotKey = () => {
    inputRef.current?.focus();
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useHotkeys("meta+a", handleHotKey);
  useHotkeys("meta+enter", handleHotKey);

  return (
    <div
      className="absolute bottom-5 left-0 right-0 mx-auto flex w-[383px] items-center justify-between rounded-[12px] bg-bg p-[24px] backdrop-blur-[40px]"
      style={{
        boxShadow: "0px 40px 200px 0px rgba(128, 128, 128, 0.60)",
      }}
    >
      <div className="flex items-center">
        <div>
          <AiStars />
        </div>
        <input
          ref={inputRef}
          className="border-none bg-transparent focus:border-transparent focus:ring-0"
          type="text"
          placeholder="Ask GameScribe..."
        />
      </div>
      <Shortcut keys={["⌘A", "⌘⏎"]} />
    </div>
  );
};
