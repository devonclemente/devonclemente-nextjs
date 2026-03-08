import type { Metadata } from "next";
import { ArrowLeft, Calendar, CheckCircle2, Cloud, Cpu, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import WeatherWorkflowToggle from "./WeatherWorkflowToggle";

export const metadata: Metadata = {
  title: "Weather API Automation Project | Devon Clemente",
  description: "Automated weather-based email notifications using Zapier, OpenWeatherMap API, and Gmail. Built by Devon Clemente, AI Process Automation Specialist.",
  openGraph: {
    title: "Weather API Automation Project | Devon Clemente",
    description: "Automated weather-based email notifications using Zapier, OpenWeatherMap API, and Gmail.",
    url: "https://devonclemente.com/weather-api-project",
    type: "website",
    images: [{ url: "/gallery-preview.jpg" }],
  },
  alternates: { canonical: "https://devonclemente.com/weather-api-project" },
};

const techStack = [
  "Zapier",
  "Weather API",
  "Google AI Studio (Gemini)",
  "Gmail Integration",
  "Webhooks",
  "API Integration",
  "Postman"
];

const solutions = [
  "Fetches the daily forecast for Miami, FL at 7:00 AM automatically",
  "Uses AI to interpret the forecast and generate intelligent recommendations",
  "Provides product mix recommendations (hot drinks, cold drinks, gelato, pastries)",
  "Suggests staffing adjustments based on weather conditions",
  "Creates two short customer promo messages tailored to the weather",
  "Emails the manager with a comprehensive summary every morning"
];

const workflowSteps = [
  { icon: Calendar, title: "Schedule Trigger", description: "Every day at 7:00 AM\nZapier automation starts" },
  { icon: Cloud, title: "Weather API Call", description: "GET request via Webhooks\nFetch Miami weather data" },
  { icon: Cpu, title: "AI Analysis", description: "Google AI Studio (Gemini)\nProcess weather into business insights" },
  { icon: Mail, title: "Email Delivery", description: "Gmail sends formatted report\nProduct, staffing, & promo recommendations" }
];

const benefits = [
  {
    title: "Eliminates Daily Manual Tasks",
    description: "Automates the time-consuming process of checking weather forecasts, analyzing conditions, and creating daily operational plans - saving managers 30+ minutes each morning."
  },
  {
    title: "Transforms Weather Checking into Strategic Planning",
    description: "Upgrades the manager's existing morning weather routine by automatically converting raw weather data into actionable business recommendations for inventory, staffing, and promotions."
  },
  {
    title: "Consistent Operations Excellence",
    description: "Ensures daily business adjustments are made systematically and delivered reliably at 7 AM, preventing missed opportunities due to weather changes or human oversight."
  }
];

const improvements = [
  {
    title: "Enhanced AI Prompt Engineering",
    description: "Refine the prompt to include seasonal Miami tourism patterns and local event data for even more targeted business recommendations tailored to high-traffic periods."
  },
  {
    title: "Multi-Location Scalability",
    description: "Expand the system to manage multiple kiosk locations simultaneously, with location-specific weather data and customized product portfolios for different demographic areas."
  },
  {
    title: "Real-Time Sales Integration",
    description: "Connect the system to point-of-sale data to automatically adjust recommendations based on actual product performance, creating a feedback loop that continuously improves AI accuracy over time."
  }
];

export default function WeatherApiProjectPage() {
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
      <section className="relative py-24 bg-gradient-hero text-white overflow-hidden mb-12">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Automation of Weather-Based Sales and Staffing Decisions
            </h1>
            <p className="text-xl mb-4 opacity-90">
              AI-Powered Business Operations for Miami Beach Coffee &amp; Ice Cream Kiosk
            </p>
            <p className="opacity-80">
              Devon Clemente | AI Automation | Sprint 5 - Final Project
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12 max-w-6xl">

        {/* Problem Section */}
        <Card className="mb-12 shadow-medium">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-foreground border-b-2 border-primary pb-4">
              Problem
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The demo company operates a coffee and ice cream kiosk right by the beach in Miami, Florida.
              Weather in coastal cities changes quickly and directly impacts business operations.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-destructive bg-destructive/5">
                <CardHeader>
                  <CardTitle className="text-lg">Weather Impact on Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Hot and humid mornings bring surges in iced coffee and gelato sales, while windy days
                    mean fewer beachgoers and more locals grabbing comfort food.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-destructive bg-destructive/5">
                <CardHeader>
                  <CardTitle className="text-lg">Manual Process Inefficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The kiosk manager currently checks forecasts manually, then decides product and staffing plans.
                    This manual checking wastes time and delays preparation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Solution Section */}
        <Card className="mb-12 shadow-medium">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-foreground border-b-2 border-primary pb-4">
              Solution
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              An automated workflow that transforms weather data into actionable business recommendations:
            </p>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-accent/10 rounded-lg border-l-4 border-l-accent">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{solution}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <Badge key={index} className="bg-primary text-primary-foreground">{tech}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Workflow Process */}
        <Card className="mb-12 shadow-medium">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-foreground border-b-2 border-primary pb-4">
              Workflow Process
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflowSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="border-2 border-primary/20 text-center h-full">
                    <CardHeader className="pb-4">
                      <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">{step.description}</p>
                    </CardContent>
                  </Card>
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary text-2xl font-bold">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Benefits */}
        <Card className="mb-12 shadow-medium">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-foreground border-b-2 border-primary pb-4">
              Key Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 border-accent/20 bg-accent/5 text-center">
                  <CardHeader>
                    <CardTitle className="text-lg text-accent">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Future Improvements */}
        <Card className="mb-12 shadow-medium">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-foreground border-b-2 border-primary pb-4">
              Future Improvements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {improvements.map((improvement, index) => (
                <Card key={index} className="border-2 border-orange-300 bg-orange-50 dark:bg-orange-950/20 dark:border-orange-600">
                  <CardHeader>
                    <CardTitle className="text-lg text-orange-600 dark:text-orange-400">{improvement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{improvement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Interactive Demo — client component */}
        <WeatherWorkflowToggle />
      </div>
    </div>
  );
}
