"use client";
import { motion } from "framer-motion";

interface AnimateLeftProps {
  children: React.ReactNode;
}

export const AnimateLeft: React.FunctionComponent<AnimateLeftProps> = ({
  children,
}) => {
  return (
    <motion.div
      initial={{ x: 150, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -150, opacity: 0 }}
      transition={{ ease: "linear" }}
    >
      {children}
    </motion.div>
  );
};
