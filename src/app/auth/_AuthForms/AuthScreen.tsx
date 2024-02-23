"use client";
import React, { useState } from "react";
import { WelcomeForm } from "./WelcomeForm";
import { AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { SignupForm } from "./SignupForm";
import { AnimateLeft } from "~/components/Forms/AnimateLeft";
import type { iAccountDetails } from "~/app/auth/types";
import { AuthContext, DEFAULT_ACCOUNT_DETAILS } from "~/app/auth/context";

type FormMap = Record<string, JSX.Element>;

export const AuthScreen = () => {
  const [accountDetails, setAccountDetails] = useState<iAccountDetails>(
    DEFAULT_ACCOUNT_DETAILS,
  );
  const searchParams = useSearchParams();
  const formId = searchParams.get("form");

  const formMap: FormMap = {
    default: <WelcomeForm />,
    signup: <SignupForm />,
  };

  return (
    <AuthContext.Provider value={{ accountDetails, setAccountDetails }}>
      <AnimatePresence mode="wait">
        <AnimateLeft key={formId}>
          {formId ? formMap[formId] : <WelcomeForm />}
        </AnimateLeft>
      </AnimatePresence>
    </AuthContext.Provider>
  );
};
