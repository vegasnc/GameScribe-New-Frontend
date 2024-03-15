import { motion } from "framer-motion";
import { Container } from "~/components/Containers";
import type { iAction } from "~/types/action.types";
import { useChatActions, useChatState } from "~/store/store";
import { randomUUID } from "crypto";
import type { iGenerateMessage, iGeneratedResult, iMessage } from "~/types/chat.types";
import { useMutation } from "@tanstack/react-query";
import { generateMonster } from "~/api/generate/generate.api";
import toast from "react-hot-toast";

interface ActionProps {
  action: iAction;
}

export const Action = ({ action }: ActionProps) => {
  const { setChat, pushMessage } = useChatActions();
  const { setIsChatOpen } = useChatState();

  const mutation = useMutation({
    mutationFn: async (data: iGenerateMessage) => {
      return await generateMonster([data])
    },
    onSuccess: (data: iGeneratedResult) => {
      const res = data.monster_content;
      toast.success("Success!");
      const newMsg: iMessage = {
        id: String(randomUUID),
        content: res,
        timestamp: Date.now(),
        role: "assistant"
      }
      console.log(data);
      pushMessage(newMsg);
    },
    onError: () => {
      toast.error("Error creating monster");
    }
  })

  const handleClick = () => {
    setIsChatOpen(true);
    // setChat to action.category
    const newMessage: iMessage = {
      id: String(randomUUID),
      role: "user",
      content: action.prompt,
      timestamp: new Date(Date.now()).getHours()
    }

    setChat({id: String(randomUUID), title: action.prompt, date: new Date(Date.now()).toTimeString(), messages: [newMessage]})
    mutation.mutate({role: newMessage.role, content: newMessage.content});
    // handle mutation
  }

  return (
    <Container key={action.title}>
      <motion.div
        className="bg-bg-light flex cursor-pointer items-center justify-center rounded-[6px] p-[12px] text-text-60 hover:text-text"
        whileHover={{ y: -10 }}
        transition={{ ease: "easeOut" }}
        onClick={handleClick}
      >
        <div className="ease flex flex-col items-center justify-center gap-5 transition-[.2]">
          {action.icon}
          <p>{action.title}</p>
        </div>
      </motion.div>
    </Container>
  );
};
