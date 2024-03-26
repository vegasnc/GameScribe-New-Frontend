import { createContext } from "react";
import type { iAccountDetails, iAuthContext } from "./types";

export const DEFAULT_ACCOUNT_DETAILS: iAccountDetails = {
  nickname: "",
  email: "",
  password: "",
};

export const AuthContext = createContext<iAuthContext | null>(null);
