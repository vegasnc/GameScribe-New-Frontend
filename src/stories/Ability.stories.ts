import type { Meta, StoryObj } from "@storybook/react";
import Ability from "~/components/Stats/Ability";

const meta = {
  title: "Example/Ability",
  component: Ability,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  }
} satisfies Meta<typeof Ability>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    ability: {
      title: "STR",
      score: 3,
      modifier: 4,
    }
  }
}

export const DefaultAbility: Story = {
  args: {
    ability: {
      title: "STR",
      score: 0,
      modifier: 0,
    }
  }
}

export const EmptyAbility: Story = {
  args: {
    ability: {
      title: "STR",
      score: undefined,
      modifier: undefined
    }
  }
}
