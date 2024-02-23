"use client";
import React, { useState } from "react";
import { WelcomeForm } from "./WelcomeForm";
import { AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { SignupForm } from "./SignupForm";
import { AnimateLeft } from "~/components/Forms/AnimateLeft";
import type { iAccountDetails } from "~/app/auth/types";
import { AuthContext, DEFAULT_ACCOUNT_DETAILS } from "~/app/auth/context";
import { SigninForm } from "./SigninForm";
import { useUserStore } from "~/store";

// record for the form map
type FormMap = Record<string, JSX.Element>;

export const AuthScreen = () => {
  const router = useRouter();
  const { nickname, email, password, login, saveUser } = useUserStore(
    (state) => state,
  );

  // state for account details -> nickname, email, password
  const [accountDetails, setAccountDetails] = useState<iAccountDetails>(
    DEFAULT_ACCOUNT_DETAILS,
  );

  // URL state for current form
  const searchParams = useSearchParams();

  // gets formId from URL
  const formId = searchParams.get("form");

  // map for rendering form component
  const formMap: FormMap = {
    default: <WelcomeForm />,
    signup: <SignupForm />,
    signin: <SigninForm />,
  };

  const handleLogin = (account: Omit<iAccountDetails, "nickname">): void => {
    login({
      email: account.email,
      password: account.password,
    });
    router.push("/dashboard");
  };

  const handleRegister = (account: iAccountDetails) => {
    saveUser(account);
    router.push("/dashboard");
  };

  return (
    <AuthContext.Provider
      value={{ accountDetails, handleLogin, handleRegister, setAccountDetails }}
    >
      <AnimatePresence mode="wait">
        <AnimateLeft key={formId}>
          {formId ? formMap[formId] : <WelcomeForm />}
        </AnimateLeft>
      </AnimatePresence>
    </AuthContext.Provider>
  );
};
