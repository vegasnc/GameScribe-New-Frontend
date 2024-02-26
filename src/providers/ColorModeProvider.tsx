"use client";
import { useState, useEffect } from "react";
import { useDarkMode } from "~/hooks/useDarkMode";

interface ColorModeProviderProps {
  children: React.ReactNode;
}

export const ColorModeProvider = ({ children }: ColorModeProviderProps) => {
  const { colorMode } = useDarkMode();
  const [mounted, setMounted] = useState<boolean>(false);
  // toggle the mode to local storage value when component mounts
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return <div className="ease-in duration-300" data-theme={colorMode}>{children}</div>;
};
