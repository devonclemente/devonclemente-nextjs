import type { Metadata } from "next";
import MiroAiProjectClient from "./MiroAiProjectClient";

export const metadata: Metadata = {
  title: "Miro AI Customer Service Analysis | Devon Clemente",
  description: "AI-powered customer service workflow analysis using Miro. Identified inefficiencies and designed automated solutions. By Devon Clemente.",
  openGraph: {
    title: "Miro AI Customer Service Analysis | Devon Clemente",
    description: "AI-powered customer service workflow analysis using Miro. Identified inefficiencies and designed automated solutions.",
    url: "https://devonclemente.com/miro-ai-project",
    type: "website",
    images: [{ url: "/gallery-preview.jpg" }],
  },
  alternates: { canonical: "https://devonclemente.com/miro-ai-project" },
};

export default function MiroAiProjectPage() {
  return <MiroAiProjectClient />;
}
