import type { StateCreator } from "zustand";
import type { iChat, iMessage } from "~/types/chat.types";

export interface ChatSlice {
  chat: iChat;
  history: iChat[];
  chatState: {
    isChatOpen: boolean;
    isHistoryOpen: boolean;
    activeId: string;
    setIsChatOpen: (data: boolean) => void;
    setIsHistoryOpen: (data: boolean) => void;
    setActiveId: (data: string) => void;
  };
  actions: {
    setChat: (data: iChat) => void;
    pushMessage: (message: iMessage) => void;
  };
}

export const createChatSlice: StateCreator<ChatSlice, [], [], ChatSlice> = (
  set,
) => ({
  chat: {
    messages: [],
    id: "",
    date: "",
    title: "",
  },
  history: [],
  chatState: {
    isChatOpen: false,
    isHistoryOpen: false,
    activeId: "",
    setIsChatOpen: (data: boolean) =>
      set((state) => ({ chatState: { ...state.chatState, isChatOpen: data } })),
    setIsHistoryOpen: (data: boolean) =>
      set((state) => ({
        chatState: { ...state.chatState, isHistoryOpen: data },
      })),
    setActiveId: (data: string) =>
      set((state) => ({ chatState: { ...state.chatState, activeId: data } })),
  },
  actions: {
    setChat: (data: iChat) => set(() => ({ chat: data })),
    pushMessage: (msg: iMessage) => set((state) => ({
      chat: {
        ...state.chat,
        messages: [...state.chat.messages, msg]
      }
    }))
  },
});
