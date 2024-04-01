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
import { type Metadata } from "next";

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

export const metadata: Metadata = {
  title: {
    template: "%s | GameScribe",
    default: "GameScribe",
    absolute: "GameScribe",
  },
  description: "API Test Interface for GameScribe Play-Test Prototype",
  generator: "Next.js",
  applicationName: "GameScribe",
  referrer: "strict-origin-when-cross-origin",
  keywords: ["GameScribe", "", ""], // TODO: Add more keywords from Tristan
  authors: [
    { name: "Eric" },
    { name: "Michael", url: "https://gamescribe.dev" },
  ],
  creator: "Eric",
  publisher: "GameScribe LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gamescribe.dev"), // Should fill in for absolute URLs
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    }, // TODO: @domjf45 if we're declaring language here in metadata do we need to declare it in the html tag below?
  },
  openGraph: {
    title: "GameScribe",
    description: "API Test Interface for GameScribe Play-Test Prototype",
    url: "https://gamescribe.dev",
    siteName: "GameScribe",
    images: [
      {
        url: "/meta_image_placeholder.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "/meta_image_placeholder.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "GameScribe typeface logo with background showing examples of AI generated TTRPG content and images.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png" },
      new URL("/icon.png", "https://example.com"),
      { url: "/icon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: ["/shortcut-icon.png"],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-x3.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  }, // TODO: @domjf45 we need to get the actual icons from Jackson
  manifest: "",
  twitter: {
    card: "summary_large_image",
    title: "GameScribe",
    description: "Unleash your story with GameScribe",
    siteId: "",
    creator: "",
    creatorId: "",
    images: ["/meta_image_placeholder.png"], // Must be an absolute URL
  },
};

//title: {
//  default: 'GameScribe',
// },
//description: "GameScribe API Test Interface",
//icons: [{ rel: "icon", url: "/favicon.ico" }], //TODO @DomJF45 likely we'll want to change this when Jackson gets us a more official one and in more sizes, but this should work for now
//openGraph: {
// images: [{ url: "/meta_image_placeholder.png" }],
// url: "https://gamescribe.dev",
//}, //TODO @DomJF45 we will replace the images with Jackson's official ones when we get them
// robots: "noindex, follow", // set to keep us out of search engines until we're ready

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
