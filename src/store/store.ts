import { create } from "zustand";
import { createChatSlice } from "./chat.slice";
import { createUserSlice } from "./user.slice";
import type { ChatSlice } from "./chat.slice";
import type { UserSlice } from "./user.slice";

const useBoundStore = create<ChatSlice & UserSlice>()((...a) => ({
  ...createChatSlice(...a),
  ...createUserSlice(...a),
}));

export const useChat = () => useBoundStore((state) => state.chat);
export const useHistory = () => useBoundStore((state) => state.history);
export const useUser = () => useBoundStore((state) => state.user);
export const useChatMessages = () =>
  useBoundStore((state) => state.chat.messages);
export const useChatState = () => useBoundStore((state) => state.chatState);
export const useChatActions = () => useBoundStore((state) => state.actions);
