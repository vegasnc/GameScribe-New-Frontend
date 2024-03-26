import type { Dispatch, SetStateAction } from "react";

export type Role = "user" | "assistant";
export type ChatOption = "Monster" | "Spell" | "Background" | "Magic Item" | "NPC";

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

export type iGenerateMessage = Pick<iMessage, "role" | "content">

export interface iGeneratedResult {
  dalle_prompt: string;
  monster_content: string;
}

export interface iGeneratedResultSimple {
  result: string;
}
