import { motion } from "framer-motion";
import { Container } from "~/components/Containers";
import { Title } from "./Title";
import type { iAction } from "./types";

interface ActionsProps {
  actions: iAction[];
}

export const Actions = ({ actions }: ActionsProps) => {
  return (
    <Container>
      <div className="flex flex-col gap-5">
        <Title>What would you like to create?</Title>
        <div className="grid w-full grid-cols-3 gap-5">
          {actions.map((action) => (
            <motion.div
              className="border-1 flex cursor-pointer items-center justify-center rounded-[6px] border bg-bg p-[12px] text-text-60 hover:text-text"
              key={action.title}
              whileHover={{ y: -10 }}
              transition={{ ease: "easeOut" }}
            >
              <div className="ease flex flex-col items-center justify-center gap-5 transition-[.2]">
                {action.icon}
                <p>{action.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};
