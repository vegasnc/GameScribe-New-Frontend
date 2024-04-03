import React from "react";
import type { Preview } from "@storybook/react";
import "src/styles/globals.css"; // replace with the name of your tailwind css file
import { Inter, Lato, Barlow_Condensed } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const lato = Lato({
  weight: "700",
  subsets: ["latin"],
  variable: "--button-font",
  display: "swap",
});

const barlow_condensed = Barlow_Condensed({
  weight: "400",
  subsets: ["latin"],
  variable: "--stat-font",
  display: "swap",
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <main
        className={`${inter.className} ${lato.variable} ${barlow_condensed.variable}`}
      >
        <Story />
      </main>
    ),
  ],
};

export default preview;
