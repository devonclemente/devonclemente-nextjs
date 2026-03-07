"use client";

import { useState } from "react";
import { ArrowLeft, Bot, Users, TrendingUp, AlertTriangle, CheckCircle, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MiroAiProjectClient = () => {
  const [selectedProblem, setSelectedProblem] = useState<number | null>(null);

  const problems = [
    {
      title: "Inefficient Initial Contact and Queue Management",
      percentage: "22.4%",
      description: "Multiple complaints indicate excessive wait times and poor queue management.",
      details: "Step 1 (Customer Inquiry) - Various channels including phone. Customers experience extended wait times due to poor queue management systems."
    },
    {
      title: "Poor Assignment and Knowledge Management",
      percentage: "40.8%",
      description: "Tickets are being assigned to CSRs who lack proper expertise or access to necessary information.",
      details: "Step 3 (Review & Assignment) and Step 5 (Investigation & Resolution). Cases are routed to agents without appropriate skills or knowledge base access."
    },
    {
      title: "Inadequate Follow-through and Case Management",
      percentage: "36.7%",
      description: "Promises made during acknowledgment aren't being fulfilled, and cases are being mismanaged.",
      details: "Step 4 (Acknowledgment) through Step 7 (Resolution/Survey). Lack of systematic tracking leads to unfulfilled commitments."
    }
  ];

  const aiSolutions = [
    {
      title: "Intelligent Chatbots",
      icon: Bot,
      description: "Handle routine inquiries like password resets and account questions before human involvement",
      implementation: "Deploy at Step 1 (Customer Contact)",
      benefits: ["24/7 availability", "Instant responses", "Reduced human workload"]
    },
    {
      title: "Smart Routing System",
      icon: TrendingUp,
      description: "Automatically analyze inquiry content and assign tickets to best-matched CSR based on expertise",
      implementation: "Integrate at Step 3 (Assignment)",
      benefits: ["Optimal skill matching", "Balanced workload", "Faster resolution"]
    },
    {
      title: "Real-time Agent Assistance",
      icon: Users,
      description: "Provide suggested responses, relevant knowledge base articles, and complete customer history",
      implementation: "Support during Step 5 (Investigation)",
      benefits: ["Consistent responses", "Knowledge accessibility", "Reduced resolution time"]
    }
  ];

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
              AI Integration Project
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Customer
              <span className="block text-accent">Support Workflow</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Transforming Customer Service Through Intelligent Automation
            </p>
            <div className="text-lg text-white/80">
              Devon Clemente | AI Automation Specialist | Sprint 1 Project
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-gradient-card shadow-soft border-0">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Current Workflow</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    The following customer service workflow moves inquiries from initial customer contact through manual logging,
                    supervisor assignment, CSR acknowledgment/investigation/resolution (with escalation if needed), and finally
                    customer satisfaction surveys.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-soft border-0">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Project Goal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    The goal of this presentation is to identify current inefficiencies and incorporate AI-driven solutions
                    to reduce or completely solve said inefficiencies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Identified */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Key Problems Identified
              </h2>
              <p className="text-xl text-muted-foreground">
                Analysis of customer feedback reveals three critical inefficiency points
              </p>
            </div>

            <div className="grid gap-6">
              {problems.map((problem, index) => (
                <Card
                  key={index}
                  className="cursor-pointer transition-all duration-300 hover:shadow-medium border-l-4 border-l-destructive bg-destructive/5"
                  onClick={() => setSelectedProblem(selectedProblem === index ? null : index)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg text-foreground mb-2">
                          Problem {index + 1}: {problem.title}
                        </CardTitle>
                        <p className="text-muted-foreground">{problem.description}</p>
                      </div>
                      <Badge variant="destructive" className="ml-4 text-lg px-3 py-1">
                        {problem.percentage}
                      </Badge>
                    </div>
                  </CardHeader>
                  {selectedProblem === index && (
                    <CardContent className="pt-0">
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-l-primary">
                        <p className="text-sm text-muted-foreground">
                          <strong>Details:</strong> {problem.details}
                        </p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Proposed AI Integration
              </h2>
              <p className="text-xl text-muted-foreground">
                Strategic AI implementations to address workflow inefficiencies
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {aiSolutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <Card key={index} className="bg-gradient-card shadow-soft border-0 hover:shadow-medium transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl text-foreground">{solution.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm">{solution.description}</p>
                      <div className="bg-primary/5 rounded-lg p-3 border border-primary/10">
                        <p className="text-sm font-medium text-primary mb-2">Implementation</p>
                        <p className="text-xs text-muted-foreground">{solution.implementation}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground">Benefits:</p>
                        <ul className="space-y-1">
                          {solution.benefits.map((benefit, bIndex) => (
                            <li key={bIndex} className="flex items-center text-sm text-muted-foreground">
                              <CheckCircle className="w-3 h-3 text-primary mr-2 shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Expected Impact */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Expected Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Faster Response Times</h3>
                <p className="text-primary-foreground/90">
                  Immediate answers for simple questions and accurate first-time escalations to specialists
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Reduced Ticket Volume</h3>
                <p className="text-primary-foreground/90">
                  Drastic reduction in routine tickets, allowing agents to focus on complex problem-solving
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Improved Consistency</h3>
                <p className="text-primary-foreground/90">
                  Standardized responses and automatic promise tracking to prevent follow-up failures
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risks & Limitations */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Potential Risks &amp; Limitations
              </h2>
            </div>

            <div className="grid gap-6">
              <Card className="border-l-4 border-l-orange-500 bg-orange-50 dark:bg-orange-950/20">
                <CardHeader>
                  <div className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mr-3" />
                    <CardTitle className="text-lg">Customer Frustration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    AI systems may fail to understand complex requests or force customers through lengthy automated processes
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500 bg-orange-50 dark:bg-orange-950/20">
                <CardHeader>
                  <div className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mr-3" />
                    <CardTitle className="text-lg">Implementation Costs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Training time for staff to learn new systems while maintaining current service levels during transition
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500 bg-orange-50 dark:bg-orange-950/20">
                <CardHeader>
                  <div className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mr-3" />
                    <CardTitle className="text-lg">Technology Dependence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Over-dependence that could leave agents less capable when AI systems experience downtime
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Conclusion</h2>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              This analysis demonstrates how targeted AI integration can systematically address workflow inefficiencies
              identified through customer feedback data by implementing three strategic solutions - intelligent chatbots
              for routine inquiries, smart routing for optimal assignment, and real-time agent assistance for knowledge
              enhancement. These solutions directly address the root causes of customer complaints while maintaining
              existing workflow structure and enhancing human capabilities rather than replacing them.
            </p>
            <div className="flex justify-center">
              <Button asChild variant="secondary" size="lg">
                <a href="/ai-integration-proposal.pdf" download="ai-integration-proposal.pdf">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Download AI Integration Proposal
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MiroAiProjectClient;
