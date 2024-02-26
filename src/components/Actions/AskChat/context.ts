import { createContext } from "react";
import type { iAskChatContext } from "./types";

export const AskChatContext = createContext<iAskChatContext | null>(null);
