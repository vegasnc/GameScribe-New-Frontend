import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { iChat, iMessage } from "~/types/chat.types";

export interface ChatState {
  chat: iChat;
  history: iChat[];
  chatState: {
    isLoading: boolean;
    isChatOpen: boolean;
    isHistoryOpen: boolean;
    activeId: string;
    chatMode: string;
    setIsLoading: (data: boolean) => void;
    setIsChatOpen: (data: boolean) => void;
    setIsHistoryOpen: (data: boolean) => void;
    setActiveId: (data: string) => void;
    setChatMode: (data: string) => void;
  };
  actions: {
    setChat: (data: iChat) => void;
    pushMessage: (message: iMessage) => void;
    clearChat: () => void;
  };
}

const initialChat: iChat = {
  id: "",
  title: "",
  date: "",
  messages: [],
}

export const useChatStore = create<ChatState>()(
  persist((set) => ({
  chat: initialChat,
  history: [],
  chatState: {
    isLoading: false,
    isChatOpen: false,
    isHistoryOpen: false,
    activeId: "",
    chatMode: "Monster",
    setIsLoading: (data: boolean) => set((state) => ({ ...state, chatState: { ...state.chatState, isLoading: data }})),
    setIsChatOpen: (data: boolean) =>
      set((state) => ({ ...state, chatState: { ...state.chatState, isChatOpen: data }})),
    setIsHistoryOpen: (data: boolean) =>
      set((state) => ({ ...state, chatState: { ...state.chatState, isHistoryOpen: data }})),
    setActiveId: (data: string) =>
      set((state) => ({ ...state, chatState: { ...state.chatState, activeId: data }})),
    setChatMode: (data: string) => set((state) => ({ ...state, chatState: { ...state.chatState, chatMode: data}}))
  },
  actions: {
    setChat: (data: iChat) => set((state) => { 
      const chatIndex = state.history.findIndex((chat) => chat.id === data.id);
      const updatedHistory = [...state.history];
      if (chatIndex !== -1) {
        updatedHistory.splice(chatIndex, 1, data);
      } else {
        updatedHistory.push(data);
      }
      return {
        ...state,
        chat: data,
        history: updatedHistory,
      }
    }),
    pushMessage: (msg: iMessage) => set((state) => {
      const updatedHistory = state.history.map(item => {
        if (item.id === state.chat.id) {
          return { ...item, messages: [...item.messages, msg]}
        }
        return item;
      });
      return { ...state, chat: { ...state.chat, messages: [...state.chat.messages, msg]}, history: updatedHistory}
    }),
    clearChat: () => set((state) => ({ ...state, chat: initialChat, chatState: {...state.chatState, activeId: "" } })),
  }
}), { name: "chat", storage: createJSONStorage(() => sessionStorage), partialize: (state) => ({ history: state.history})}));

export const useChat = () => useChatStore((state) => state.chat);
export const useHistory = () => useChatStore((state) => state.history);
export const useChatMessages = () => useChatStore((state) => state.chat.messages);
export const useChatState = () => useChatStore((state) => state.chatState);
export const useChatActions = () => useChatStore((state) => state.actions);
