import type { Dispatch, SetStateAction } from "react";

export type Role = "user" | "assistant";

export interface iMessage {
  id: string;
  content: string;
  timestamp: number;
  role: Role;
}

export interface iChat {
  messages: iMessage[];
  id: string;
  date: string;
  title: string;
}

export interface iChatContext {
  activeId?: string;
  isHistoryOpen: boolean;
  isChatOpen: boolean;
  setIsHistoryOpen: Dispatch<SetStateAction<boolean>>;
  setIsChatOpen: Dispatch<SetStateAction<boolean>>;
  setActiveId: Dispatch<SetStateAction<string>>;
}
