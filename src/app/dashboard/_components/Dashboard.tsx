import { useState } from "react";
import { motion } from "framer-motion";
import { Ask } from "~/components/Actions/Ask";
import { Suggestion } from "~/components/Actions/Suggestion";
import { SkullVector } from "~/components/Background/FloatingImage";
import { Container } from "~/components/Containers/Container";
import { ChevronDown } from "~/components/Icons";

const TEST_SUGGESTIONS = [
  "loot from a goblin",
  "a Bards song celebrating a recent victory",
  "an Orc merchant",
  "a level 3 half-elf fighter",
  "a rusty sword made of a strange metal",
];

const TEST_CREATIONS = [
  {
    id: 1,
    title: "Lyra Lightbringer",
    race: "Human",
    auther: "Sir B.",
    dateCreated: "Jan 2024",
  },
  {
    id: 2,
    title: "Lyra Lightbringer",
    race: "Human",
    auther: "Sir B.",
    dateCreated: "Jan 2024",
  },
  {
    id: 3,
    title: "Lyra Lightbringer",
    race: "Human",
    auther: "Sir B.",
    dateCreated: "Jan 2024",
  },
  {
    id: 4,
    title: "Lyra Lightbringer",
    race: "Human",
    auther: "Sir B.",
    dateCreated: "Jan 2024",
  },
];

const EMPTY_TEST_CREATIONS = [];

export const ACTIONS = [
  {
    title: "Character",
    icon: <SkullVector />,
  },
  {
    title: "Monster",
    icon: <SkullVector />,
  },
  {
    title: "Encounters",
    icon: <SkullVector />,
  },
  {
    title: "Quest",
    icon: <SkullVector />,
  },
  {
    title: "Rule",
    icon: <SkullVector />,
  },
  {
    title: "Item",
    icon: <SkullVector />,
  },
];

const Dashboard = () => {
  return (
    <div className="flex h-full flex-col gap-5">
      <Container>
        <Inner>
          <Title>My Creations:</Title>
          <Content>
            {TEST_CREATIONS.length > 0 ? (
              TEST_CREATIONS.map((creation) => (
                <p key={creation.id}>{creation.title}</p>
              ))
            ) : (
              <p>{"You don't have any creations yet..."}</p>
            )}
          </Content>
        </Inner>
      </Container>
      <Container>
        <Inner>
          <Title>Create:</Title>
          <Content>
            {TEST_SUGGESTIONS.map((sugg) => (
              <Suggestion key={sugg}>{sugg}</Suggestion>
            ))}
          </Content>
        </Inner>
      </Container>
      <Container>
        <div className="flex flex-col gap-5">
          <Title>What would you like to create?</Title>
          <div className="grid w-full grid-cols-3 gap-5">
            {ACTIONS.map((action) => (
              <motion.div
                className="border-1 flex cursor-pointer items-center justify-center rounded-[6px] border bg-bg p-[12px] text-text-60 hover:text-text"
                key={action.title}
                whileHover={{ y: -10 }}
                transition={{ ease: "easeOut" }}
              >
                <div className="ease flex flex-col items-center justify-center gap-5 transition-[.2]">
                  {action.icon}
                  <p>{action.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
      <Ask />
    </div>
  );
};

interface InnerProps {
  children: React.ReactNode;
}

const Inner = ({ children }: InnerProps) => {
  return (
    <div className="flex w-full flex-col gap-5 overflow-x-auto text-[14px]">
      {children}
    </div>
  );
};

const Title = ({ children }: InnerProps) => {
  return <h1 className="font-bold">{children}</h1>;
};

const Content = ({ children }: InnerProps) => {
  return (
    <div className="scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent flex items-center gap-3 overflow-hidden hover:overflow-x-scroll">
      {children}
    </div>
  );
};

export default Dashboard;
