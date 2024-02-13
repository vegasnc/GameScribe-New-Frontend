import type { Meta, StoryObj } from "@storybook/react";
import { Shortcut } from "~/components/Shortcuts/Shortcut";

const meta = {
  title: "Example/Shortcut",
  component: Shortcut,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Shortcut>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CmdA: Story = {
  args: {
    keys: ["⌘A"],
  },
};

export const CtrA: Story = {
  args: {
    keys: ["CtrlA"],
  },
};

export const CmdACmdB: Story = {
  args: {
    keys: ["⌘A", "⌘↩"],
  },
};

export const CmdACmdBCmdC: Story = {
  args: {
    keys: ["⌘A", "⌘B", "⌘C"],
  },
};
