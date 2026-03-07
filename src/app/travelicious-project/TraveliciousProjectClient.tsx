"use client";

import { useState } from "react";
import { ArrowLeft, MessageSquare, BarChart3, Users, Zap, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TraveliciousProjectClient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const workflowSteps = [
    {
      id: 1,
      title: "Customer Reviews",
      description: "Collection via multiple channels",
      icon: "📝",
      details: {
        input: "Customer reviews from Google, TripAdvisor, internal surveys",
        process: "Automated collection and categorization of feedback",
        output: "Structured review data with ratings and comments"
      }
    },
    {
      id: 2,
      title: "AI Analysis",
      description: "Sentiment & topic extraction",
      icon: "🤖",
      details: {
        input: "Raw customer feedback and review text",
        process: "NLP processing for sentiment analysis and topic categorization",
        output: "Sentiment scores, key themes, and priority rankings"
      }
    },
    {
      id: 3,
      title: "Issue Detection",
      description: "Priority & urgency assessment",
      icon: "🚨",
      details: {
        input: "Analyzed sentiment data and categorized feedback",
        process: "Pattern recognition to identify recurring issues and urgency levels",
        output: "Prioritized issue list with severity ratings"
      }
    },
    {
      id: 4,
      title: "Team Routing",
      description: "Automatic assignment to relevant teams",
      icon: "🎯",
      details: {
        input: "Categorized issues with priority levels",
        process: "Smart routing based on issue type, team expertise, and workload",
        output: "Assigned tasks with context and relevant information"
      }
    },
    {
      id: 5,
      title: "Response Generation",
      description: "Personalized responses & follow-up",
      icon: "✉️",
      details: {
        input: "Customer context and issue analysis",
        process: "AI-generated personalized responses with appropriate tone",
        output: "Draft responses ready for review and sending"
      }
    },
    {
      id: 6,
      title: "Analytics Dashboard",
      description: "Insights & trend tracking",
      icon: "📊",
      details: {
        input: "Processed feedback data and response metrics",
        process: "Aggregation and visualization of key metrics and trends",
        output: "Management dashboard with actionable insights"
      }
    }
  ];

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
    {
      title: "Response Time Improvement",
      metric: "75%",
      description: "Reduction in average response time to customer feedback"
    },
    {
      title: "Issue Resolution Rate",
      metric: "92%",
      description: "Successful resolution rate for automated issue routing"
    },
    {
      title: "Customer Satisfaction",
      metric: "4.8/5",
      description: "Average rating improvement after implementing automation"
    }
  ];

  const openModal = (stepId: number) => {
    setSelectedStep(stepId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStep(null);
  };

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

      {/* Workflow Steps */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Automated Workflow Process
              </h2>
              <p className="text-xl text-muted-foreground">
                Click on any step to see detailed information about inputs, processes, and outputs
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {workflowSteps.map((step, index) => (
                <Card
                  key={step.id}
                  className="cursor-pointer transition-all duration-300 hover:shadow-medium hover:-translate-y-1 bg-gradient-card border-2 hover:border-primary/50"
                  onClick={() => openModal(step.id)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{step.icon}</div>
                    <h3 className="font-semibold text-sm text-foreground mb-2">{step.title}</h3>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                    {index < workflowSteps.length - 1 && (
                      <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-primary text-2xl font-bold">
                        →
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Measurable Results
              </h2>
              <p className="text-xl text-muted-foreground">
                Quantifiable improvements achieved through automation
              </p>
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

      {/* Modal for Workflow Steps */}
      {isModalOpen && selectedStep !== null && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-background rounded-lg shadow-strong max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const step = workflowSteps.find(s => s.id === selectedStep);
              if (!step) return null;

              return (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
                    <div className="flex items-center">
                      <span className="text-3xl mr-4">{step.icon}</span>
                      <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                    </div>
                    <Button variant="ghost" size="sm" onClick={closeModal}>
                      ×
                    </Button>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                      <h4 className="font-semibold text-primary mb-2">Input</h4>
                      <p className="text-muted-foreground text-sm">{step.details.input}</p>
                    </div>

                    <div className="bg-accent/5 rounded-lg p-4 border border-accent/10">
                      <h4 className="font-semibold text-accent mb-2">Process</h4>
                      <p className="text-muted-foreground text-sm">{step.details.process}</p>
                    </div>

                    <div className="bg-green-500/5 rounded-lg p-4 border border-green-500/10">
                      <h4 className="font-semibold text-green-600 mb-2">Output</h4>
                      <p className="text-muted-foreground text-sm">{step.details.output}</p>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

export default TraveliciousProjectClient;
