"use client";
import { useHotkeys } from "react-hotkeys-hook";
import { Button } from "~/components/Buttons/Button";
import { Shortcut } from "~/components/Shortcuts/Shortcut";
import AbilityBar from "~/components/Stats/AbilityBar";
import { ABILITY_BAR_TEST } from "~/components/Stats/constants";

const TestPage = () => {
  const handleShortcut = () => {
    alert("shortcut!!");
  };

  useHotkeys("meta+a", handleShortcut);
  useHotkeys("meta+return", handleShortcut);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-20 bg-background-light">
      <h1 className="text-3xl font-bold">GameScribe</h1>
      <Button>Rag 123</Button>
      <Shortcut keys={["⌘A", "⌘↩"]} />
      <AbilityBar abilities={ABILITY_BAR_TEST} />
    </div>
  );
};

export default TestPage;
