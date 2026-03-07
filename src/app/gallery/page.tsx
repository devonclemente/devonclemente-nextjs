import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "AI vs Personal Photo Transformations by Devon Clemente",
  description: "Personal photos vs AI recreations - can you tell the difference? See this revealing side-by-side analysis.",
  openGraph: {
    title: "AI vs Personal Photo Transformations by Devon Clemente",
    description: "Personal photos vs AI recreations - can you tell the difference? See this revealing side-by-side analysis.",
    url: "https://devonclemente.com/gallery",
    images: [{ url: "/gallery-preview.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI vs Personal Photo Transformations by Devon Clemente",
    description: "Personal photos vs AI recreations - can you tell the difference? See this revealing side-by-side analysis.",
    images: ["/gallery-preview.jpg"],
  },
  alternates: {
    canonical: "https://devonclemente.com/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
