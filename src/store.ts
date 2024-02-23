import { create } from "zustand";

type UserState = {
  nickname: string;
  email: string;
  token: string;
  password: string;
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

export const useUserStore = create<UserState & Action>((set) => ({
  nickname: "",
  email: "",
  token: "",
  password: "",
  saveUser: ({ nickname, email, password }) =>
    set(() => ({
      nickname,
      email,
      password: password,
      token: "test.token123",
    })),
  login: ({ email, password }) =>
    set(() => ({ nickname: "test", email: email, password: password, token: "test.token123" })),
  logout: () => set({ nickname: "", email: "", token: "" }),
}));
