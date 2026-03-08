"use client";

import { useState, useRef, useEffect } from "react";
import { Zap, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ZapierWorkflow from "@/components/ZapierWorkflow";

const technicalDocs = [
  {
    title: "Schedule Trigger",
    description: "Zapier's built-in scheduler service that fires at predetermined times. Uses cron-like scheduling to trigger the workflow every day at 7:00 AM EST, ensuring consistent daily operations."
  },
  {
    title: "Webhooks Module",
    description: "Makes HTTP GET requests to external APIs. Configured to call OpenWeatherMap API with Miami coordinates (25.7617,-80.1918) and API key authentication to fetch current weather data."
  },
  {
    title: "AI Processing Engine",
    description: "Google AI Studio (Gemini) processes raw weather JSON data through custom prompts. Analyzes temperature, humidity, wind, and precipitation to generate business recommendations for inventory and staffing."
  },
  {
    title: "Email Delivery System",
    description: "Gmail integration formats AI-generated recommendations into professional email templates. Sends comprehensive daily reports with product mix suggestions, staffing advice, and customer promotions."
  }
];

export default function WeatherWorkflowToggle() {
  const [showWorkflow, setShowWorkflow] = useState(false);
  const [showTechDocs, setShowTechDocs] = useState(false);
  const workflowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showWorkflow && workflowRef.current) {
      workflowRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showWorkflow]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowTechDocs(false);
    };
    if (showTechDocs) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [showTechDocs]);

  return (
    <>
      {/* Demo Section */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-foreground border-b-2 border-primary pb-4">
            Project Demonstration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg text-muted-foreground text-center mb-6">
            Explore the technical implementation and see the automation in action
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={() => setShowWorkflow(!showWorkflow)}>
              <Zap className="w-4 h-4 mr-2" />
              {showWorkflow ? "Hide" : "View"} Workflow
            </Button>
            <Button onClick={() => setShowTechDocs(!showTechDocs)}>
              <Zap className="w-4 h-4 mr-2" />
              {showTechDocs ? "Hide" : "View"} Documentation
            </Button>
            <Button asChild>
              <a href="/weather-api-technical-explanation.pdf" download="weather-api-technical-explanation.pdf">
                <Zap className="w-4 h-4 mr-2" />
                Download Technical Explanation
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Zapier Workflow */}
      {showWorkflow && (
        <div ref={workflowRef} className="mt-8 animate-fade-in relative">
          <ZapierWorkflow />
        </div>
      )}

      {/* Technical Documentation Modal */}
      {showTechDocs && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 flex items-center justify-center p-4"
          onClick={() => setShowTechDocs(false)}
        >
          <div className="absolute top-4 right-4 z-10">
            <Button
              variant="destructive"
              size="sm"
              onClick={() => setShowTechDocs(false)}
              className="rounded-full w-10 h-10 p-0 shadow-lg hover:scale-105 transition-all duration-200"
              title="Close Documentation (ESC)"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {technicalDocs.map((doc, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-6 transform transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{doc.title}</h3>
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-300 text-sm font-medium">{index + 1}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{doc.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
