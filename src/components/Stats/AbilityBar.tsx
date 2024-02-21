import { useState } from "react";
import type { iAbility } from "./constants";
import Ability from "./Ability";

interface AbilityBarProps {
  abilities: iAbility[];
}

const AbilityBar = ({ abilities }: AbilityBarProps) => {
  const [ablts, setAblts] = useState<iAbility[]>(abilities);
  const baseStyle = "flex flex-row gap-[20px]";
  return (
    <div className={["storybook-abilitybar", baseStyle].join(" ")}>
      {ablts.map((ab, index) => (
        <Ability key={index} ability={ab} />
      ))}
    </div>
  );
};

export default AbilityBar;
