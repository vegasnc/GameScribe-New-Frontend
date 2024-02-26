import { useContext } from "react";
import type { Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AskChatContext } from "./context";
import type { iAskChatContext } from "./types";
import { ChevronLeft, IconX } from "~/components/Icons";

// vars for controlling duration of animation
const HEIGHT = 508;
const HEIGHT_DUR = 0.4;
const OPAC_DUR = 0.25;
const OPAC_DELAY = 0.15;

export const Chat = () => {
  const { isChatOpen, isHistoryOpen, setIsHistoryOpen, setIsChatOpen } =
    useContext(AskChatContext)! as iAskChatContext; // eslint-disable-line

  // async wrapper for controlling which view closes first
  const asyncClose = async (cb: Dispatch<SetStateAction<boolean>>) => {
    cb(false);
    await new Promise((resolve) => setTimeout(resolve, 300));
  };

  // handles closing chat or chat and history
  const handleHideChat = async () => {
    if (isHistoryOpen) await asyncClose(setIsHistoryOpen);
    await asyncClose(setIsChatOpen);
  };

  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {isChatOpen && (
          <motion.div
            className="relative w-full"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: `${HEIGHT}px`,
              opacity: 1,
              transition: {
                height: { duration: HEIGHT_DUR },
                opacity: { duration: OPAC_DUR, delay: OPAC_DELAY },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: HEIGHT_DUR,
                },
                opacity: {
                  duration: OPAC_DUR,
                },
              },
            }}
          >
            <div className="mb-3 flex w-full items-center justify-between text-theme">
              <div
                className="flex cursor-pointer items-center gap-1 rounded-[4px] bg-theme-ex-light px-[4px] py-[2px]"
                onClick={() => setIsHistoryOpen(true)}
              >
                {!isHistoryOpen && (
                  <>
                    <div className="flex h-[15px] w-[15px] cursor-pointer items-center">
                      <ChevronLeft />
                    </div>
                    <h1>history</h1>
                  </>
                )}
              </div>
              <div
                className="h-max w-max cursor-pointer"
                onClick={() => handleHideChat()}
              >
                <IconX />
              </div>
            </div>
            <div className="chathistory">
              <p>TODO: chat here...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
