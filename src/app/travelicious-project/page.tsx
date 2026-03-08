import type { Metadata } from "next";
import { ArrowLeft, MessageSquare, BarChart3, Users, Zap, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TraveliciousWorkflowModal from "./TraveliciousWorkflowModal";

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

const technologies = [
  "Make (formerly Integromat)",
  "OpenAI GPT-4",
  "Google Reviews API",
  "TripAdvisor API",
  "Sentiment Analysis",
  "Natural Language Processing",
  "Webhook Integrations",
  "Data Visualization"
];

const results = [
  { title: "Response Time Improvement", metric: "75%", description: "Reduction in average response time to customer feedback" },
  { title: "Issue Resolution Rate", metric: "92%", description: "Successful resolution rate for automated issue routing" },
  { title: "Customer Satisfaction", metric: "4.8/5", description: "Average rating improvement after implementing automation" }
];

export default function TraveliciousProjectPage() {
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
              Automation Project
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Travelicious Feedback
              <span className="block text-accent">Automation System</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Automated Customer Feedback Processing and Response Workflow
            </p>
            <div className="text-lg text-white/80">
              Devon Clemente | Business Process Automation | Travel Industry
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card shadow-soft border-0 border-l-4 border-l-primary">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  This project demonstrates an advanced automated feedback analysis workflow designed for Travelicious,
                  a travel and hospitality company. The system processes customer reviews from multiple platforms,
                  performs AI-powered sentiment analysis, and automatically generates appropriate responses while
                  routing issues to relevant teams.
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="bg-primary/5 text-primary border-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workflow Steps — client component (clickable cards + modal) */}
      <TraveliciousWorkflowModal />

      {/* Results */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Measurable Results</h2>
              <p className="text-xl text-muted-foreground">Quantifiable improvements achieved through automation</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {results.map((result, index) => (
                <Card key={index} className="bg-gradient-card shadow-soft border-0 text-center">
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">{result.metric}</div>
                    <CardTitle className="text-xl text-foreground">{result.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{result.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Key Features &amp; Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 rounded-lg p-6">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-3">Multi-Platform Integration</h3>
                <p className="text-primary-foreground/90">
                  Automatically collects and processes feedback from Google Reviews, TripAdvisor,
                  and internal customer surveys in real-time.
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <BarChart3 className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
                <p className="text-primary-foreground/90">
                  Provides comprehensive analytics dashboard with sentiment trends,
                  issue categorization, and performance metrics.
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <Users className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-3">Smart Team Routing</h3>
                <p className="text-primary-foreground/90">
                  Intelligently routes issues to appropriate teams based on content analysis,
                  expertise matching, and current workload distribution.
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <Zap className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-3">Automated Responses</h3>
                <p className="text-primary-foreground/90">
                  Generates personalized, contextually appropriate responses using AI,
                  maintaining brand voice and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Implementation &amp; Future Enhancements
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-gradient-card shadow-soft border-0">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary mb-2">1</div>
                  <CardTitle className="text-lg">System Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Seamless integration with existing CRM and customer service platforms
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card shadow-soft border-0">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary mb-2">2</div>
                  <CardTitle className="text-lg">Staff Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive training program for team members on new automated processes
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card shadow-soft border-0">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <CardTitle className="text-lg">Continuous Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Ongoing refinement based on performance metrics and user feedback
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button asChild size="lg">
                <a href="/customer-feedback-automation.pdf" download="customer-feedback-automation.pdf">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Download Process Documentation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
