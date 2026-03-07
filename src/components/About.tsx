import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Zap, Clock } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: CheckCircle,
      label: "98% On-Time Delivery",
      description: "First-responder supply chain at Air Brake & Equipment"
    },
    {
      icon: Users,
      label: "25% Business Growth",
      description: "Client acquisition and operational scaling at Maverick"
    },
    {
      icon: Zap,
      label: "50+ Crews Managed",
      description: "Multi-state installation teams across the tri-state area"
    },
    {
      icon: Clock,
      label: "7+ Automation Projects",
      description: "End-to-end workflows built with Make, UiPath, and AI"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
              About Devon
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Transforming Operations Through
              <span className="text-primary block">AI Automation</span>
            </h2>
          </div>

          {/* Narrative Block */}
          <div className="mb-16 space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">My Story</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nine years in operations taught me one thing: most business problems are process problems.
              I've managed $20M+ in inventory, run crews across four states, and cut delivery failures
              by 75% — all by finding where the system breaks and fixing it.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Now I do the same thing with AI. After earning my AI Automation certification, I build
              automated workflows that eliminate the manual bottlenecks I used to fight every day.
              Make.com, UiPath, API integrations — these are just better tools for the same job
              I've always done: making operations actually work.
            </p>
          </div>

          {/* Achievement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 border-0 group outline-primary"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {achievement.label}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-muted/50 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-3">Core Competencies</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Process Automation",
                  "AI Implementation",
                  "Operations Management",
                  "Workflow Optimization",
                  "Business Intelligence",
                  "Performance Analytics"
                ].map((skill) => (
                  <Badge key={skill} variant="outline" className="bg-background/80">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-3">Automation & AI Skills</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Make",
                  "Zapier",
                  "N8N",
                  "Miro",
                  "Nebius Studio",
                  "LLMs",
                  "API Integration",
                  "RPA Development",
                  "UiPath",
                  "GitHub",
                  "VS Code"
                ].map((skill) => (
                  <Badge key={skill} variant="outline" className="bg-background/80">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
