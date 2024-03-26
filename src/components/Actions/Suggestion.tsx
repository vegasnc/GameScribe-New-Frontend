import { motion } from "framer-motion";
import { AiStars } from "../Icons";

interface SuggestionProps {
  children: React.ReactNode;
}

export const Suggestion = ({ children }: SuggestionProps) => {
  return (
    <motion.div
      className="border-1 group my-2 inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-[6px] border bg-bg p-[20px] text-[14px] hover:border-theme-light"
      whileHover={{
        y: -5,
      }}
    >
      <div className="h-max w-max group-hover:text-theme">
        <AiStars />
      </div>
      {children}
    </motion.div>
  );
};
