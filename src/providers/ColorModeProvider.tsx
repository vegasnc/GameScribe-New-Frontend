"use client";
import { useEffect } from "react";
import { useDarkMode } from "~/hooks/useDarkMode";

interface ColorModeProviderProps {
  children: React.ReactNode;
}

export const ColorModeProvider = ({ children }: ColorModeProviderProps) => {
  const toggleMode = useDarkMode();
  // toggle the mode to local storage value when component mounts
  useEffect(() => {
    toggleMode();
  }, [toggleMode]);

  return children;
};
