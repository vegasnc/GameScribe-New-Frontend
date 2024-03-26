import { useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Shortcut } from "~/components/Shortcuts/Shortcut";
import { AiStars } from "~/components/Icons";
import { useToggleFocus } from "./hooks/useToggleFocus";
import { useChat, useChatActions, useChatState } from "~/store/chat.slice";
import { Button } from "../Buttons/Button";
import { twJoin } from "tailwind-merge";
import type { iMessage, iGenerateMessage, iGeneratedResult, ChatOption, iGeneratedResultSimple, Role } from "~/types/chat.types";
import { generateContent } from "~/api/generate/generate.api";
import { nanoid } from 'nanoid';

const Input = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [newMessage, setNewMessage] = useState<string>("");
  const { setChat, pushMessage } = useChatActions();
  const chat = useChat();
  const { setIsLoading, isChatOpen, setIsChatOpen, setActiveId, chatMode, isLoading } = useChatState();

  const { isFocused } = useToggleFocus<HTMLTextAreaElement>({ ref: inputRef });

  const toggleFocus = () => {
    inputRef.current?.focus();
    setIsChatOpen(true);
  };

  useHotkeys("meta+a", toggleFocus);
  useHotkeys("meta+enter", toggleFocus);

  const styles = isFocused ? "text-theme" : "text-gray-light";

  const mutation = useMutation({
    mutationFn: async (data: iGenerateMessage) => {
      setIsLoading(true);
      return await generateContent(chatMode as ChatOption, [data]);
    },
    onSuccess: (data: iGeneratedResult | iGeneratedResultSimple) => {
      let res;
      if ("result" in data) {
        res = data.result;
      } else if ("monster_content" in data) {
        res = data.monster_content;
      }
      if (res) {
        toast.success("Success!");
        setIsLoading(false);
        const newMsg: iMessage = {
          id: nanoid(),
          content: res,
          timestamp: Date.now(),
          role: "assistant",
        }
        pushMessage(newMsg);
      }
    },
    onError: () => {
      setIsLoading(false);
      toast.error("Error, please try again");
    },
  })

  const handleSendMessage = () => {
    if (!newMessage) return;
    const newMsg: iMessage = {
      content: newMessage,
      timestamp: Date.now(),
      role: "user",
      id: nanoid(),
    }
    setNewMessage("");
    pushMessage(newMsg);
    if (!chat.id) {
      setChat({
        messages: [...chat.messages, newMsg],
        id: nanoid(),
        title: newMsg.content,
        date: new Date().toLocaleTimeString(),
      })
      setActiveId(chat.id);
    }
    
    mutation.mutate({role: "user", content: newMsg.content});
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
          <Button styles={"w-max"} onClick={handleSendMessage} loading={isLoading}>Submit</Button>
        ) : (
          <Shortcut keys={["⌘A", "⌘⏎"]} />
        )}
      </div>

    </div>
  );
};

export default Input;
