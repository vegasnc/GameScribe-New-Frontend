import type { Dispatch, SetStateAction } from "react";

export interface iAskChatContext {
  activeId?: string;
  isHistoryOpen: boolean;
  isChatOpen: boolean;
  setIsHistoryOpen: Dispatch<SetStateAction<boolean>>;
  setIsChatOpen: Dispatch<SetStateAction<boolean>>;
  setActiveId: Dispatch<SetStateAction<string>>;
}
