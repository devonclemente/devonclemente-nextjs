import type { Metadata } from "next";
import TraveliciousProjectClient from "./TraveliciousProjectClient";

export const metadata: Metadata = {
  title: "Travelicious AI Feedback Automation | Devon Clemente",
  description: "AI-powered customer feedback analysis and routing system for Travelicious. Automated sentiment analysis and team assignment. By Devon Clemente.",
  openGraph: {
    title: "Travelicious AI Feedback Automation | Devon Clemente",
    description: "AI-powered customer feedback analysis and routing system. Automated sentiment analysis and team assignment.",
    url: "https://devonclemente.com/travelicious-project",
    type: "website",
    images: [{ url: "/gallery-preview.jpg" }],
  },
  alternates: { canonical: "https://devonclemente.com/travelicious-project" },
};

export default function TraveliciousProjectPage() {
  return <TraveliciousProjectClient />;
}
