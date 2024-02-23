"use client";

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
const setThemeToDocument = (theme: mode): void => {
  withClient(() =>
    document.documentElement.setAttribute("data-theme", theme as string),
  )();
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
export const useDarkMode = (): (() => void) => {
  // get theme
  const theme = getThemeFromStorage();
  // set theme if present
  if (theme !== null) {
    setThemeToDocument(theme as mode);
  }

  // return toggle function
  return toggleTheme;
};
