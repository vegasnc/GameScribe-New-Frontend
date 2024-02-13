export interface iAbility {
  title: string;
  score: number | undefined;
  modifier: number | undefined;
}

export const ABILITY_BAR_DEFAULT: iAbility[] = [
  {
    title: "STR",
    score: 0,
    modifier: 0,
  },
  {
    title: "DEX",
    score: 0,
    modifier: 0,
  },
  {
    title: "CON",
    score: 0,
    modifier: 0,
  },
  {
    title: "INT",
    score: 0,
    modifier: 0,
  },
  {
    title: "WIS",
    score: 0,
    modifier: 0,
  },
  {
    title: "CHA",
    score: 0,
    modifier: 0,
  },
];

export const ABILITY_BAR_TEST: iAbility[] = [
  {
    title: "STR",
    score: 3,
    modifier: -4,
  },
  {
    title: "DEX",
    score: 12,
    modifier: 1,
  },
  {
    title: "CON",
    score: 10,
    modifier: 0,
  },
  {
    title: "INT",
    score: 1,
    modifier: -5,
  },
  {
    title: "WIS",
    score: 7,
    modifier: -2,
  },
  {
    title: "CHA",
    score: 1,
    modifier: -5,
  },
];

export const ABILITY_BAR_EMPTY: iAbility[] = [
  {
    title: "STR",
    score: undefined,
    modifier: undefined,
  },
  {
    title: "DEX",
    score: undefined,
    modifier: undefined,
  },
  {
    title: "CON",
    score: undefined,
    modifier: undefined,
  },
  {
    title: "INT",
    score: undefined,
    modifier: undefined,
  },
  {
    title: "WIS",
    score: undefined,
    modifier: undefined,
  },
  {
    title: "CHA",
    score: undefined,
    modifier: undefined,
  },
];
