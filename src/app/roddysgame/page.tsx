import type { Metadata } from "next";
import RoddysGameClient from "./RoddysGameClient";

export const metadata: Metadata = {
  title: "Roddy's Star - Space Game | Devon Clemente",
  description: "Play Roddy's Star, a space-themed game.",
  openGraph: {
    title: "Roddy's Star - Space Game | Devon Clemente",
    description: "Play Roddy's Star, a space-themed game.",
    url: "https://devonclemente.com/roddysgame",
    type: "website",
    images: [{ url: "/gallery-preview.jpg" }],
  },
  alternates: { canonical: "https://devonclemente.com/roddysgame" },
};

export default function RoddysGamePage() {
  return <RoddysGameClient />;
}
