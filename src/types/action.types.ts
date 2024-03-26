export type ActionCategory =
  | "Character"
  | "Encounters"
  | "Monster"
  | "Quest"
  | "Surprise"
  | "Adventure";

export interface iAction {
  title: string;
  category: ActionCategory;
  icon: JSX.Element;
  prompt: string;
}
