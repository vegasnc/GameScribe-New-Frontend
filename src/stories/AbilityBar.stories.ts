import type { Meta, StoryObj } from "@storybook/react";
import AbilityBar from "~/components/Stats/AbilityBar";
import {
  ABILITY_BAR_DEFAULT,
  ABILITY_BAR_EMPTY,
  ABILITY_BAR_TEST,
} from "~/components/Stats/constants";

const meta = {
  title: "Example/AbilityBar",
  component: AbilityBar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AbilityBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultBar: Story = {
  args: {
    abilities: ABILITY_BAR_DEFAULT,
  },
};

export const FilledBar: Story = {
  args: {
    abilities: ABILITY_BAR_TEST,
  },
};

export const EmptyBar: Story = {
  args: {
    abilities: ABILITY_BAR_EMPTY,
  },
};
