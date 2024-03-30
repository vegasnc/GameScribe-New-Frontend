"use client";

import { motion } from "framer-motion";
import { useDarkMode } from "~/hooks/useDarkMode";
import { Avatar } from "../Avatar";
import { MoonIcon } from "../Icons";
import { ChevronDown } from "../Icons";
import { SunIcon } from "../Icons";
import { AnimatePresence } from "framer-motion";
import { usePostHog } from 'posthog-js/react'

export const Nav = () => {
  return (
    <>
      <div className=" mb-5 flex w-full justify-between">
        <h1 className="font-stat text-[32px] font-bold leading-[110%] text-text ">
          GAMESCRIBE
        </h1>
        <div className="flex items-center gap-3 rounded-full bg-gray-ex-light px-2 py-1">
          <Avatar size="xs" />
          <ToggleMode />
          <ChevronDown />
        </div>
      </div>
    </>
  );
};

export const ToggleMode = () => {
  const { colorMode, toggleColorMode } = useDarkMode();

  // TODO: check my work on this and update to differentiate between toggledark and togglelight separately @DomJF45
  const posthog = usePostHog()
  
  function toggletheme() {
    posthog.capture(
      'theme_toggled',
      {colorMode: colorMode})
  }

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={colorMode}
        className="border-1 flex h-[25px] w-[25px] cursor-pointer items-center p-1 text-theme"
        onClick={() => { toggleColorMode(); toggletheme(); }}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
      >
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </motion.div>
    </AnimatePresence>
  );
};
