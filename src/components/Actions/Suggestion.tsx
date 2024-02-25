import { AiStars } from "../Icons";

interface SuggestionProps {
  children: React.ReactNode;
}

export const Suggestion = ({ children }: SuggestionProps) => {
  return (
    <div className="border-1 inline-flex items-center gap-2 rounded-[6px] border bg-bg p-[20px] text-[14px] whitespace-nowrap">
      <AiStars />
      {children}
    </div>
  );
};
