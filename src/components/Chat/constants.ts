import type { ChatOption, iChat } from "~/types/chat.types";
import { BackgroundIcon, MagicItemIcon, MonsterIcon, NPCIcon, SpellIcon } from "../Icons";

export const CHAT_LOADERS: string[] = [
  "Rolling dice...",
  "Crafting worlds...",
  "Summoning stories...",
  "Drawing maps...",
  "Weaving magic...",
  "Building quests...",
];

export const CHAT_OPTIONS: {label: ChatOption, icon: React.FC}[] = [
  {
    label: "Monster",
    icon: MonsterIcon,
  },
  {
    label: "Spell",
    icon: SpellIcon,
  },
  {
    label: "Background",
    icon: BackgroundIcon,
  },
  {
    label: "Magic Item",
    icon: MagicItemIcon,
  },
  {
    label: "NPC",
    icon: NPCIcon,
  }
]

export const TEST_HISTORY: iChat[] = [
  {
    id: "1",
    date: "Now",
    title: "Random Character",
    messages: [
      {
        id: "abc123",
        content: "Give me a random character",
        timestamp: 1644739800000, // 2024-02-12 15:30:00
        role: "user",
      },
      {
        id: "abc124",
        content: CHAT_LOADERS[0]!,
        timestamp: 1644739800000,
        role: "assistant",
      },
    ],
  },
  {
    id: "2",
    date: "2m ago",
    title: "Random Character",
    messages: [],
  },
  {
    id: "3",
    date: "7d ago",
    title: "Random Character",
    messages: [],
  },
];

export const DEFAULT_CHAT: iChat = {
  id: "",
  date: "",
  title: "",
  messages: [],
}
