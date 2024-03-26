import { DiceSVG } from "./DiceSVG";
import type { iAbility } from "./constants";

interface AbilityProps {
  ability: iAbility;
}

const Ability = ({ ability }: AbilityProps) => {
  const baseStyle =
    "group flex flex-col bg-gray-ex-light rounded w-[65px] h-[98px] p-[4px] justify-space-between items-center gap-[4px]";

  const isZero = (num: number) => (num > 0 ? "+" + num : num);
  const isNumber = (num: number | undefined) =>
    num !== undefined ? isZero(num) : "-";

  return (
    <div className={["storybook-ability", baseStyle].join(" ")}>
      <div className="font-stat text-[12px]">{ability.title}</div>
      <div className="flex w-full flex-row justify-center rounded-[4px] border border-[1px] border-dashed border-gray-ex-light text-[18px] group-hover:border-theme">
        {isNumber(ability.score)}
      </div>
      <div className="flex w-full cursor-pointer flex-row items-center justify-center gap-[4px] rounded-[4px] bg-gray-mid px-[6px] py-[4px] text-[14px] text-text hover:animate-stat-slide group-hover:bg-theme group-hover:text-text">
        <p className="ability-modifier translate-x-2 transition-transform group-hover:translate-x-0">
          {isNumber(ability.modifier)}
        </p>
        <DiceSVG className="translate-x-10 transform opacity-0 transition-opacity group-hover:translate-x-0 group-hover:opacity-100" />
      </div>
    </div>
  );
};

export default Ability;
