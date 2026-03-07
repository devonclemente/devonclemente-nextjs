import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Integration Proposal | Devon Clemente",
  description: "AI integration proposal: customer support workflow automation case study. By Devon Clemente, AI Process Automation Specialist.",
  openGraph: {
    title: "AI Integration Proposal | Devon Clemente",
    description: "AI integration proposal: customer support workflow automation case study.",
    url: "https://devonclemente.com/ai-integration-proposal",
    type: "website",
    images: [{ url: "/gallery-preview.jpg" }],
  },
  alternates: { canonical: "https://devonclemente.com/ai-integration-proposal" },
};

const PDF_PATH = "/ai-powered-customer-support-workflow.pdf";

export default function AiIntegrationProposalPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Floating Back Button */}
      <Link href="/#featured-projects" className="fixed top-6 left-6 z-50">
        <Button variant="outline" size="sm" className="shadow-lg hover:shadow-xl transition-all duration-200 bg-background/80 backdrop-blur-sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Button>
      </Link>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Integration
              <span className="block text-accent">Proposal (PDF)</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              View or download the proposal detailing the AI-powered customer support workflow
            </p>
          </div>
        </div>
      </section>

      <main>
        <section className="py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-3 mb-6">
                <Button asChild>
                  <a href={PDF_PATH} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open in new tab
                  </a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href={PDF_PATH} download>
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </a>
                </Button>
              </div>

              <article className="bg-card border border-border rounded-lg overflow-hidden">
                <iframe
                  src={`${PDF_PATH}#view=FitH`}
                  title="AI Integration Proposal PDF"
                  className="w-full h-[75vh]"
                  loading="lazy"
                />
              </article>

              <p className="text-xs text-muted-foreground mt-3">
                If the PDF doesn&apos;t load in your browser, use &quot;Open in new tab&quot; or &quot;Download PDF&quot;.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
