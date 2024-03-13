import { Title } from "./Title";
import type { iAction } from "~/types/action.types";
import { Action } from "./Action";

interface ActionsProps {
  actions: iAction[];
}

export const Actions = ({ actions }: ActionsProps) => {
  return (
    <div className="flex flex-col gap-5">
      <Title>What would you like to create?</Title>
      <div className="grid w-full grid-cols-3 gap-5">
        {actions.map((action) => (
          <Action key={action.title} action={action} />
        ))}
      </div>
    </div>
  );
};
