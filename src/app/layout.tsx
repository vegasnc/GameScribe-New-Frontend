import "~/styles/globals.css";
import { Inter, Lato, Barlow_Condensed, Lora } from "next/font/google";
import { ColorModeProvider } from "~/providers/ColorModeProvider";
import { PHProvider } from "~/providers/PostHogProvider";
import PostHogPageView from "./PostHogPageView";
import PostHogPageLeave from "./PostHogPageLeave";
import SessionProvider from "~/providers/SessionProvider";
import {} from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ReactQueryProvider } from "~/providers/ReactQueryProvider";
import { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// display: swap allows font to default to inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const goudy = Lora({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-fancy",
  display: "swap",
});

const lato = Lato({
  weight: ["400", "700"],
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

export const metadata = {
  title: "GameScribe API Test Interface",
  description: "GameScribe API Test Interface",
  icons: [{ rel: "icon", url: "/favicon.ico" }], //TODO @DomJF45 likely we'll want to change this when Jackson gets us a more official one and in more sizes, but this should work for now
  openGraph: {
    images: [{ url: "https://gamescribe.dev/og-image.png" }],
    url: "https://gamescribe.dev",
  }, //TODO @DomJF45 we may want to host this somewhere instead and will probably replace it, but I put this as a stand-in for now
  robots: "noindex, follow", // set to keep us out of search engines until we're ready
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${lato.variable} ${barlow_condensed.variable} ${goudy.variable}`}
    >
      <PHProvider>
        <body>
          <PostHogPageView />
          <PostHogPageLeave />
          <Toaster />
          <SessionProvider>
            <ReactQueryProvider>
              <ColorModeProvider>
                <Suspense>
                  {children}
                  <SpeedInsights />
                </Suspense>
              </ColorModeProvider>
            </ReactQueryProvider>
          </SessionProvider>
        </body>
      </PHProvider>
    </html>
  );
}
