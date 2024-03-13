import type { StateCreator } from "zustand";

export type UserState = {
  nickname: string;
  email: string;
  token: string;
  password: string;
  icon: string;
};

export interface UserSlice {
  user: UserState;
  saveUser: (data: {
    nickname: UserState["nickname"];
    email: UserState["email"];
    password: UserState["password"];
  }) => void;
  login: (data: {
    email: UserState["email"];
    password: UserState["password"];
  }) => void;
  logout: () => void;
}

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (
  set,
) => ({
  user: {
    nickname: "",
    email: "",
    token: "",
    password: "",
    icon: "",
  },
  saveUser: ({ nickname, email, password }) =>
    set({
      user: {
        nickname: nickname,
        email,
        password,
        token: "test.token",
        icon: "",
      },
    }),
  login: ({ email, password }) =>
    set({
      user: {
        email,
        password,
        nickname: "Big Cheese",
        icon: "",
        token: "test.token",
      },
    }),
  logout: () =>
    set({
      user: { nickname: "", email: "", password: "", token: "", icon: "" },
    }),
});
