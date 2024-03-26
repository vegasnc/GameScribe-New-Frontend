import { useChatState } from "~/store/chat.slice";
import { CHAT_OPTIONS } from "./constants";

const ChatMode = () => {
  return (
    <div className="flex w-full gap-5 flex-wrap">
      {CHAT_OPTIONS.map((option) => (
        <Option option={option} key={option.label} />
      ))}
    </div>
  );
};

export default ChatMode;

interface OptionProps {
  option: {
    label: string;
    icon: React.FC;
  }
}

const Option = ({ option }: OptionProps) => {
  const { chatMode, setChatMode } = useChatState();
  const isActive = chatMode === option.label;
  const baseStyle = "text-text-60";
  const activeStyle = "bg-theme-ex-light text-theme";
  const OptionIcon = option.icon;
  return <div className={`${isActive ? activeStyle : baseStyle} text-sm px-2 py-1 rounded cursor-pointer hover:bg-theme-ex-light flex items-center gap-2`} onClick={() => setChatMode(option.label)}>
    <div className={isActive ? "text-theme" : "text-text-60"}>
      <OptionIcon />
    </div>
    <p>{option.label}</p>
  </div>;
};
