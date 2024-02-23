import type { Dispatch, SetStateAction } from "react";

export interface iAccountDetails {
  nickname: string;
  email: string;
  password: string;
}

export interface iAuthContext {
  accountDetails: iAccountDetails;
  setAccountDetails: Dispatch<SetStateAction<iAccountDetails>>;
}
