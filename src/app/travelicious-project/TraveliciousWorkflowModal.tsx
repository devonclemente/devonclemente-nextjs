"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

export default function TraveliciousWorkflowModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const openModal = (stepId: number) => {
    setSelectedStep(stepId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStep(null);
  };

  return (
    <>
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

      {/* Step Detail Modal */}
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
                    <Button variant="ghost" size="sm" onClick={closeModal}>×</Button>
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
    </>
  );
}
