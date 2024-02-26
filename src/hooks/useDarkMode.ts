"use client";

import { useState } from "react";

// types of theme modes: dark or light
type mode = "light" | "dark";

// decorate local storage for next server
const withClient = <T>(cb: () => T): (() => T | null) => {
  if (typeof window !== "undefined") {
    return cb;
  } else {
    return () => null;
  }
};

// get theme from local storage
const getThemeFromStorage = (): string | null => {
  return withClient(() => localStorage.getItem("theme"))();
};

// set theme to local storage
const setThemeToStorage = (theme: mode): void => {
  withClient(() => localStorage.setItem("theme", theme))();
};

// set theme to document root[data-theme]
const setThemeToDocument = (theme: mode): string => {
  withClient(() =>
    document.documentElement.setAttribute("data-theme", theme as string),
  )();
  return theme;
};

// toggle theme between light and dark
const toggleTheme = () => {
  const theme: string | null = getThemeFromStorage();
  if (theme !== null && theme === "dark") {
    setThemeToStorage("light");
    setThemeToDocument("light");
  } else {
    setThemeToStorage("dark");
    setThemeToDocument("dark");
  }
};

// hook for using dark mode

type useDarkModeReturn = {
  colorMode: string | null;
  toggleColorMode: () => void;
};

export const useDarkMode = (): useDarkModeReturn => {
  let theme = getThemeFromStorage();
  // get theme
  // set theme if present
  if (theme !== null) {
    theme = setThemeToDocument(theme as mode);
  }

  const [colorMode, setColorMode] = useState<string | null>(theme);

  const toggleColorMode = () => {
    toggleTheme();
    setColorMode(getThemeFromStorage());
  }

  // return toggle function
  return {
    colorMode,
    toggleColorMode,
  };
};
