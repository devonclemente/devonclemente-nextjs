import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Triple Peaks Hotel Chatbot | Devon Clemente",
  description: "AI-powered hotel assistant chatbot for Triple Peaks. Handles guest inquiries, bookings, and recommendations. Built by Devon Clemente.",
  openGraph: {
    title: "Triple Peaks Hotel Chatbot | Devon Clemente",
    description: "AI-powered hotel assistant chatbot for Triple Peaks. Handles guest inquiries, bookings, and recommendations.",
    url: "https://devonclemente.com/triple-peaks-project",
    type: "website",
    images: [{ url: "/gallery-preview.jpg" }],
  },
  alternates: { canonical: "https://devonclemente.com/triple-peaks-project" },
};

export default function TriplePeaksProjectPage() {
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
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              Hospitality
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Triple Peaks Hotel
              <span className="block text-accent">Assistant Chatbot</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              AI-Powered Customer Service Automation for Hospitality Industry
            </p>
            <div className="text-lg text-white/80">
              Devon Clemente | AI Automation &amp; Customer Service
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Challenge */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Challenge</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Hotel front desk staff spend countless hours answering repetitive questions about check-in times, amenities, services, and policies. This manual approach leads to inconsistent responses, delayed service, and increased operational costs, especially during peak hours when guest inquiries surge.</p>
          </CardContent>
        </Card>

        {/* Solution */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Solution</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">An intelligent AI chatbot powered by OpenAI GPT models that provides instant, accurate responses to guest inquiries using a comprehensive knowledge base of hotel information.</p>

            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-card p-6 rounded-lg border border-primary/10 text-center">
                <div className="text-3xl mb-3">🤖</div>
                <h4 className="font-semibold mb-2">AI-Powered Responses</h4>
                <p className="text-sm text-muted-foreground">Advanced language model understands context and provides natural, helpful responses</p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-primary/10 text-center">
                <div className="text-3xl mb-3">📚</div>
                <h4 className="font-semibold mb-2">Knowledge Base</h4>
                <p className="text-sm text-muted-foreground">Comprehensive FAQ database ensures accurate and up-to-date information</p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-primary/10 text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="font-semibold mb-2">Instant Availability</h4>
                <p className="text-sm text-muted-foreground">24/7 service with immediate responses to guest inquiries</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              <Badge className="bg-primary text-primary-foreground">OpenAI GPT-4o Mini</Badge>
              <Badge className="bg-primary text-primary-foreground">Zapier</Badge>
              <Badge className="bg-primary text-primary-foreground">Custom Knowledge Base</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Implementation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Implementation Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Technical Configuration</h4>
                <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-2">
                  <li><strong>AI Model:</strong> OpenAI GPT-4o Mini</li>
                  <li><strong>Platform:</strong> Zapier Chatbot Builder</li>
                  <li><strong>Knowledge Base:</strong> Triple Peaks Hotel FAQ PDF</li>
                  <li><strong>Avatar:</strong> Professional hotel manager (Veronica)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Key Features</h4>
                <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-2">
                  <li>Natural language understanding</li>
                  <li>Context-aware responses</li>
                  <li>Seamless agent handoff</li>
                  <li>Mobile-responsive interface</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Demo CTA */}
        <section className="mb-12">
          <div className="demo-section p-6 text-center rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Experience the Chatbot</h3>
            <p className="text-muted-foreground mb-4">Test the AI assistant and explore the implementation details</p>
            <div className="flex justify-center">
              <Button asChild>
                <a href="/triple-peaks-hotel-chatbot-demo.html" target="_blank" rel="noreferrer" className="btn btn-secondary">
                  📋 Project Demo
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
