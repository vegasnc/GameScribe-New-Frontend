import { ChatBox } from "~/components/Chat";
import { Creations } from "./Creations";
import { Suggestions } from "./Suggestions";
import { Actions } from "./Actions";
import { SkullVector } from "~/components/Background/FloatingImage";
import type { iAction } from "~/types/action.types";

const Dashboard = () => {
  return (
    <div className="mb-20 flex h-full flex-col gap-5">
      {/* Render Creations */}
      <Creations creations={[]} />
      {/* Render Suggestions */}
      <Suggestions suggestions={TEST_SUGGESTIONS} />
      {/* Render Actions */}
      <Actions actions={TEST_ACTIONS} />
      {/* Render the Ask GameScribe Component */}
      <ChatBox />
    </div>
  );
};

export default Dashboard;

const TEST_SUGGESTIONS = [
  "loot from a goblin",
  "a Bards song celebrating a recent victory",
  "an Orc merchant",
  "a level 3 half-elf fighter",
  "a rusty sword made of a strange metal",
];

/* const TEST_CREATIONS = [
  {
    id: 1,
    title: "Lyra Lightbringer",
    race: "Human",
    author: "Sir B.",
    dateCreated: "Jan 2024",
    img: "/TESTPICS/PIC1.png",
  },
  {
    id: 2,
    title: "Lyra Lightbringer",
    race: "Human",
    author: "Sir B.",
    dateCreated: "Jan 2024",
    img: "/TESTPICS/PIC2.png",
  },
  {
    id: 3,
    title: "Lyra Lightbringer",
    race: "Human",
    author: "Sir B.",
    dateCreated: "Jan 2024",
    img: "/TESTPICS/PIC3.png",
  },
  {
    id: 4,
    title: "Lyra Lightbringer",
    race: "Human",
    author: "Sir B.",
    dateCreated: "Jan 2024",
    img: "/TESTPICS/PIC4.png",
  },
  {
    id: 5,
    title: "Lyra Lightbringer",
    race: "Human",
    author: "Sir B.",
    dateCreated: "Jan 2024",
    img: "/TESTPICS/PIC3.png",
  },
  {
    id: 6,
    title: "Lyra Lightbringer",
    race: "Human",
    author: "Sir B.",
    dateCreated: "Jan 2024",
    img: "/TESTPICS/PIC4.png",
  },
];
*/

export const TEST_ACTIONS: iAction[] = [
  {
    title: "Character",
    category: "Character",
    icon: <SkullVector />,
    prompt: "Generate a Character",
  },
  {
    title: "Monster",
    category: "Monster",
    icon: <SkullVector />,
    prompt: "Generate a Monster",
  },
  {
    title: "Encounters",
    category: "Encounters",
    icon: <SkullVector />,
    prompt: "Generate an Encounter",
  },
  {
    title: "Quest",
    category: "Quest",
    icon: <SkullVector />,
    prompt: "Generate a Quest",
  },
  {
    title: "Surprise Me",
    category: "Surprise",
    icon: <SkullVector />,
    prompt: "Generate a Surprise",
  },
  {
    title: "Adventure",
    category: "Adventure",
    icon: <SkullVector />,
    prompt: "Generate an Adventure",
  },
];
