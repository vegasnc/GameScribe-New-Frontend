export type ActionCategory =
  | "Character"
  | "Encounters"
  | "Monster"
  | "Quest"
  | "Rule"
  | "Item";

export interface iAction {
  title: string;
  category: ActionCategory;
  icon: JSX.Element;
  prompt: string;
}
