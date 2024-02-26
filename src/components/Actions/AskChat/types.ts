import type { Dispatch, SetStateAction } from "react";

export interface iAskChatContext {
  isHistoryOpen: boolean;
  isChatOpen: boolean;
  setIsHistoryOpen: Dispatch<SetStateAction<boolean>>;
  setIsChatOpen: Dispatch<SetStateAction<boolean>>;
}
