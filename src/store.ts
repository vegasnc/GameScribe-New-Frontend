import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type UserState = {
  nickname: string;
  email: string;
  token: string;
  password: string;
  icon: string;
};

type Action = {
  saveUser: (data: {
    nickname?: UserState["nickname"];
    email?: UserState["email"];
    password?: UserState["password"];
  }) => void;
  login: (data: {
    email: UserState["email"];
    password: UserState["password"];
  }) => void;
  logout: () => void;
};

// TODO: take away persist as DB will be persisting
export const useUserStore = create<UserState & Action>()(
  persist(
    (set) => ({
      nickname: "",
      email: "",
      token: "",
      password: "",
      icon: "",
      saveUser: ({ nickname, email, password }) =>
        set(() => ({
          nickname,
          email,
          password: password,
          token: "test.token123",
        })),
      login: ({ email, password }) =>
        set(() => ({
          nickname: "test",
          email: email,
          password: password,
          token: "test.token123",
        })),
      logout: () => set({ nickname: "", email: "", token: "" }),
    }),
    { name: "test-storage", storage: createJSONStorage(() => sessionStorage) },
  ),
);
