import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Devon Clemente - AI Process Automation Specialist",
  description:
    "Portfolio of Devon Clemente, AI Process Automation Specialist. 9+ years transforming operations through intelligent automation with Make.com, UiPath, and AI.",
  metadataBase: new URL("https://devonclemente.com"),
  openGraph: {
    title: "Devon Clemente - AI Process Automation Specialist",
    description:
      "Portfolio of Devon Clemente, AI Process Automation Specialist. 9+ years transforming operations through intelligent automation.",
    url: "https://devonclemente.com/",
    type: "website",
    images: [{ url: "/gallery-preview.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@devonclemente",
  },
  alternates: {
    canonical: "https://devonclemente.com/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Righteous&family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Devon Clemente",
              jobTitle: "AI Process Automation Specialist",
              url: "https://devonclemente.com",
              image: "https://devonclemente.com/gallery-preview.jpg",
              sameAs: [
                "https://linkedin.com/in/devonjclemente",
                "https://x.com/devonclemente",
                "https://github.com/devonclemente",
                "https://medium.com/@devonclemente",
                "https://youtube.com/@devonclemente",
              ],
              address: {
                "@type": "PostalAddress",
                addressRegion: "NJ",
                addressCountry: "US",
              },
              knowsAbout: [
                "AI Process Automation",
                "RPA",
                "Make.com",
                "UiPath",
                "Zapier",
                "n8n",
                "Workflow Optimization",
              ],
            }),
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
