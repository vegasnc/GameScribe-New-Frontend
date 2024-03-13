import { motion } from "framer-motion";
import { Container } from "~/components/Containers";
import type { iAction } from "~/types/action.types";
import { useChatActions } from "~/store/store";
import { randomUUID } from "crypto";
import { iMessage } from "~/types/chat.types";

interface ActionProps {
  action: iAction;
}

export const Action = ({ action }: ActionProps) => {
  const { setChat } = useChatActions();

  const handleClick = () => {
    // setChat to action.category
    const newMessage: iMessage = {
      id: randomUUID().toString(),
      role: "user",
      content: action.prompt,
      timestamp: new Date(Date.now()).getHours()
    }
    setChat({id: randomUUID().toString(), title: action.prompt, date: new Date(Date.now()).toTimeString(), messages: [newMessage]})
  }

  return (
    <Container key={action.title}>
      <motion.div
        className="bg-bg-light flex cursor-pointer items-center justify-center rounded-[6px] p-[12px] text-text-60 hover:text-text"
        whileHover={{ y: -10 }}
        transition={{ ease: "easeOut" }}
      >
        <div className="ease flex flex-col items-center justify-center gap-5 transition-[.2]">
          {action.icon}
          <p>{action.title}</p>
        </div>
      </motion.div>
    </Container>
  );
};
