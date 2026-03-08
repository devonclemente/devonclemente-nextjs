"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

export default function MiroProblemCards() {
  const [selectedProblem, setSelectedProblem] = useState<number | null>(null);

  return (
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
  );
}
