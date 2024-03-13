import { createContext } from "react";
import type { iChatContext } from "~/types/chat.types";

export const ChatContext = createContext<iChatContext | null>(null);
