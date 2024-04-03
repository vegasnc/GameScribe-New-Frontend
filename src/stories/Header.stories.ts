import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Example/Header',
  component: Header,
  tags: ['autodocs'], // Ensure this matches the expected structure in your Storybook configuration
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

// Ensure Story is correctly typed with the component props if required
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

// Explicitly define `args` even if it's an empty object to satisfy TypeScript's expectations
export const LoggedOut: Story = {
  args: {}, // If your component or Storybook setup requires certain args, they should be provided here, even if only as defaults.
};
