import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "~/components/Icons";
import type { iChat } from "~/types/chat.types";
import { useChatActions, useChatState, useHistory } from "~/store/chat.slice";

const WIDTH = 400;
const HEIGHT = "w-[580px]";

const WIDTH_DURATION = 0.4;
const OPAC_DURATION = 0.25;
const OPAC_DELAY = 0.15;

const History = () => {
  const history = useHistory();
  //eslint-disable-next-line
  const { isHistoryOpen, setIsHistoryOpen } = useChatState();
  const { clearChat } = useChatActions();

  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {isHistoryOpen && (
          <motion.div
            className={`${HEIGHT} container rounded-[12px] bg-gray-ex-light p-[24px] overflow-y-auto`}
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
            {/*
            <div
              className="flex w-max cursor-pointer items-center gap-1 rounded-[4px] bg-theme-ex-light px-[4px] py-[2px] text-theme"
              onClick={() => setIsHistoryOpen(false)}
            >
              <h1>history</h1>
              <div className="flex h-[15px] w-[15px] cursor-pointer items-center">
                <ChevronRight />
              </div>
            </div>
            */}
            <motion.div
              className="flex flex-col gap-[4px]"
              transition={{ staggerChildren: 0.5 }}
            >
              <div className="flex flex-col gap-1 text-text-60 rounded-[8px] rounded-[8px] py-[8px] px-[10px] hover:text-text cursor-pointer" onClick={clearChat}>
                New Chat
              </div>
              {history.length > 0 ? (
                history.map((chat) => <Tab item={chat} key={chat.id} />)
              ) : (
                <p>No History Yet</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

interface TabProps {
  item: iChat;
}

export const Tab = ({ item }: TabProps) => {
  // eslint-disable-next-line
  const { activeId, setActiveId } = useChatState();
  const { setChat } = useChatActions();
  const baseStyles =
    "flex flex-col gap-1 text-text-60 rounded-[8px] rounded-[8px] py-[8px] px-[10px] hover:text-text cursor-pointer";
  const styles = {
    active:
      "border border-1 border-theme-mid bg-theme-ex-light text-theme hover:text-theme",
  };

  const handleClick = () => {
    setActiveId(item.id);
    setChat(item);
  };

  return (
    <motion.div key={item.id}>
      <p className="px-[10px] text-[12px]">{item.date}</p>
      <div className={`${baseStyles} ${activeId === item.id && styles.active}`}>
        <a onClick={handleClick}>{item.title}</a>
      </div>
    </motion.div>
  );
};

export default History;
