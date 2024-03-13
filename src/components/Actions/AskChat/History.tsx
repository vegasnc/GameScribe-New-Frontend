import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { iAskChatContext } from "./types";
import { AskChatContext } from "./context";
import { ChevronRight } from "~/components/Icons";
import type { iChat } from "~/types/chat.types";
import { useChatActions } from "~/store/store";
import { TEST_HISTORY } from "./constants";

const WIDTH = 300;
const HEIGHT = "w-[580px]";

const WIDTH_DURATION = 0.4;
const OPAC_DURATION = 0.25;
const OPAC_DELAY = 0.15;

const list = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const History = () => {
  //eslint-disable-next-line
  const { isHistoryOpen, setIsHistoryOpen } = useContext(
    AskChatContext,
  )! as iAskChatContext;
  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {isHistoryOpen && (
          <motion.div
            className={`${HEIGHT} rounded-l-[12px] bg-gray-ex-light p-[24px]`}
            initial={{ width: 0, opacity: 0, padding: 0 }}
            animate={{
              width: `${WIDTH}px`,
              opacity: 1,
              padding: "24px",
              transition: {
                width: { duration: WIDTH_DURATION },
                opacity: { duration: OPAC_DURATION, delay: OPAC_DELAY },
              },
            }}
            exit={{
              width: 0,
              opacity: 0,
              padding: 0,
              transition: {
                width: {
                  duration: WIDTH_DURATION,
                },
                opacity: {
                  duration: OPAC_DURATION,
                },
              },
            }}
          >
            <div
              className="flex w-max cursor-pointer items-center gap-1 rounded-[4px] bg-theme-ex-light px-[4px] py-[2px] text-theme"
              onClick={() => setIsHistoryOpen(false)}
            >
              <h1>history</h1>
              <div className="flex h-[15px] w-[15px] cursor-pointer items-center">
                <ChevronRight />
              </div>
            </div>
            <motion.div
              className="flex flex-col gap-[4px]"
              transition={{ staggerChildren: 0.5 }}
            >
              {TEST_HISTORY.map((hist) => (
                <Tab item={hist} key={hist.id} />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

interface TabProps {
  item: iChat 
}

export const Tab = ({ item }: TabProps) => {
  // eslint-disable-next-line 
  const { activeId, setActiveId } = useContext(AskChatContext) as iAskChatContext;
  const { setChat } = useChatActions();
  const baseStyles = "flex flex-col gap-1 text-text-60 rounded-[8px] rounded-[8px] py-[8px] px-[10px] hover:text-text cursor-pointer"
  const styles = {
    active: "border border-1 border-theme-mid bg-theme-ex-light text-theme hover:text-theme",
  }
  
  const handleClick = () => {
    setActiveId(item.id);
    setChat(item)
  }

  return (
    <motion.div
      key={item.id}
    >
      <p className="text-[12px] px-[10px]">{item.date}</p>
      <div className={`${baseStyles} ${activeId === item.id && styles.active}`}>
        <a onClick={handleClick}>{item.title}</a>
      </div>
    </motion.div>
  )
}

