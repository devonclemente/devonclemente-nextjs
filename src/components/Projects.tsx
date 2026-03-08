import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, Star, Mail } from "lucide-react";

const Projects = () => {

  const projects = [
    {
      title: "Inventory Reconciliation Automation with AI",
      description: "Capstone Project: Real-time AI-powered inventory tracking system that processes pick tickets and packing slips, updates inventory instantly, and triggers low stock alerts",
      tech: ["Make.com", "AI/OCR", "Google Sheets", "Gmail API"],
      results: "Eliminated 2-3 month processing delays, reduced warehouse search time by 1 hour per search, improved customer satisfaction",
      badge: "Real-Time Tracking",
      isCapstone: true,
      buttons: [
        { label: "View Details", icon: ExternalLink, link: "/inventory-reconciliation-project" }
      ]
    },
    {
      title: "UiPath Invoice RPA",
      description: "UiPath RPA solution for automated invoice processing and data entry",
      tech: ["UiPath", "RPA", "Document Processing"],
      results: "90% reduction in manual processing time, 99.9% accuracy",
      badge: "90% Time Saved",
      buttons: [
        { label: "View Details", icon: ExternalLink, link: "/triple-peaks-invoice-project" }
      ]
    },
    {
      title: "Weather API Business Integration",
      description: "Ice cream/coffee business automation using real-time weather data",
      tech: ["Zapier", "Weather API", "Business Logic Automation"],
      results: "80% improved decision-making through dynamic weather-based operations",
      badge: "80% Efficiency Gain",
      buttons: [
        { label: "View Details", icon: ExternalLink, link: "/weather-api-project" }
      ]
    },
    {
      title: "Lovable Landing Pages",
      description: "Dynamic landing page creation and optimization platform",
      tech: ["Lovable Platform", "Web Development", "UI/UX Design"],
      results: "70% faster deployment of professional landing pages",
      badge: "70% Faster",
      buttons: [
        { label: "Demo 1", icon: Eye, link: "https://paws-at-home-groom.lovable.app" },
        { label: "Demo 2", icon: Eye, link: "https://reliable-sparkle-page.lovable.app" }
      ]
    },
    {
      title: "Travelicious Customer Feedback Automation",
      description: "Automated customer feedback processing and response system",
      tech: ["Make (formerly Integromat)", "Customer Service Automation"],
      results: "Streamlined feedback collection and response workflows",
      badge: null,
      buttons: [
        { label: "View Details", icon: ExternalLink, link: "/travelicious-project" }
      ]
    },
    {
      title: "Triple Peaks Hotel Assistant Chatbot",
      description: "AI-powered customer service automation for hospitality industry",
      tech: ["OpenAI GPT-4o Mini", "Zapier", "Custom Knowledge Base"],
      results: "95% success rate, reduced staff workload",
      badge: "95% Success Rate",
      buttons: [
        { label: "View Project Details", icon: ExternalLink, link: "/triple-peaks-project" }
      ]
    },
    {
      title: "Miro AI Integration Workflow",
      description: "AI-powered workflow optimization and process mapping integration",
      tech: ["Miro", "AI Integration", "Process Analysis"],
      results: "Streamlined workflow design and analysis processes",
      badge: null,
      buttons: [
        { label: "View Details", icon: ExternalLink, link: "/miro-ai-project" }
      ]
    }
  ];

  return (
    <section id="featured-projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">Featured Projects</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              AI Automation<span className="text-primary block">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore a collection of innovative AI automation projects that have transformed
              business operations, improved efficiency, and delivered measurable results across
              various industries.
            </p>
          </div>

          {/* Featured Capstone */}
          <div className="flex justify-center mb-12">
            <Card className="group bg-gradient-card shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)] hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.25)] transition-all duration-300 border-2 border-primary/30 overflow-hidden max-w-md w-full flex flex-col scale-105">
              <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-2 px-4 flex items-center justify-center gap-2">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-bold tracking-wide">CAPSTONE PROJECT</span>
                <Star className="w-4 h-4 fill-current" />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <CardTitle className="text-lg font-semibold text-foreground leading-tight">{projects[0].title}</CardTitle>
                  {projects[0].badge && <Badge variant="default" className="ml-2 shrink-0">{projects[0].badge}</Badge>}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{projects[0].description}</p>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <div className="space-y-6 flex-grow">
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[0].tech.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs bg-muted/50">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                    <h4 className="text-sm font-medium text-primary mb-1">Results</h4>
                    <p className="text-sm text-muted-foreground">{projects[0].results}</p>
                  </div>
                </div>
                <div className="flex gap-3 pt-2 mt-auto">
                  {projects[0].buttons.map((button, i) => {
                    const Icon = button.icon;
                    return (
                      <Button key={i} variant="default" size="sm" className="flex-1" asChild>
                        <a href={button.link}><Icon className="w-4 h-4 mr-2" />{button.label}</a>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Capstone Highlights */}
          <div className="mb-16 bg-gradient-to-br from-primary/5 via-background to-primary/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">Capstone Project Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-gradient-card rounded-xl p-6 border border-primary/10 text-center">
                <div className="text-4xl font-bold text-primary mb-2">2-3 Months</div>
                <div className="text-sm text-muted-foreground">Processing Delay Eliminated</div>
              </div>
              <div className="bg-gradient-card rounded-xl p-6 border border-primary/10 text-center">
                <div className="text-4xl font-bold text-primary mb-2">1 Hour</div>
                <div className="text-sm text-muted-foreground">Reduced Search Time per Item</div>
              </div>
              <div className="bg-gradient-card rounded-xl p-6 border border-primary/10 text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%+</div>
                <div className="text-sm text-muted-foreground">AI Accuracy Threshold</div>
              </div>
            </div>
            <div className="mb-10">
              <h4 className="text-xl font-semibold text-foreground mb-6 text-center">Automated Workflow</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { step: "1. Document Capture", desc: "AI-powered OCR processes pick tickets & packing slips" },
                  { step: "2. Quality Control", desc: "Confidence scoring routes high/low accuracy items" },
                  { step: "3. Real-Time Updates", desc: "Instant inventory adjustments via API integration" },
                  { step: "4. Smart Alerts", desc: "Automated notifications for low stock levels" },
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="bg-gradient-card rounded-lg p-4 border border-primary/20 hover:border-primary/40 transition-all duration-300 h-full">
                      <div className="text-primary font-bold mb-2">{item.step}</div>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    {i < 3 && <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-4 bg-primary rounded-full transform -translate-y-1/2"></div>}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-6 text-center">Technologies Mastered</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {["Make.com Automation", "Gemini 2.0 Flash AI", "OCR & Computer Vision", "Google Sheets API", "Gmail API Integration", "Quality Control Systems", "Real-Time Data Processing"].map((t) => (
                  <Badge key={t} variant="default" className="px-4 py-2 text-sm">{t}</Badge>
                ))}
              </div>
            </div>
            <div className="mt-10 bg-primary/10 rounded-xl p-6 border border-primary/20">
              <h4 className="text-lg font-semibold text-primary mb-3 text-center">Business Impact</h4>
              <p className="text-muted-foreground text-center leading-relaxed">
                Transformed inventory management from a manual, time-intensive process into a fully automated,
                real-time system that eliminated months of processing delays, dramatically reduced warehouse search time,
                and significantly improved customer satisfaction through accurate, instant inventory tracking.
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(1).map((project, index) => (
              <Card key={index} className="group bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 border-0 overflow-hidden outline-primary flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="text-lg font-semibold text-foreground leading-tight">{project.title}</CardTitle>
                    {project.badge && <Badge variant="default" className="ml-2 shrink-0">{project.badge}</Badge>}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <div className="space-y-6 flex-grow">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs bg-muted/50">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                      <h4 className="text-sm font-medium text-primary mb-1">Results</h4>
                      <p className="text-sm text-muted-foreground">{project.results}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 pt-2 mt-auto">
                    {project.buttons.map((button, i) => {
                      const Icon = button.icon;
                      const isExternal = button.link.startsWith('http');
                      return (
                        <Button key={i} variant={i === 0 ? "default" : "outline"} size="sm" className="flex-1" asChild>
                          <a href={button.link} {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                            <Icon className="w-4 h-4 mr-2" />{button.label}
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">Ready to transform your business operations with AI automation?</p>
            <Button size="lg" className="shadow-glow" asChild>
              <a href="mailto:devonclemente@gmail.com?subject=AI%20Automation%20Project%20Inquiry">
                <Mail className="w-5 h-5 mr-2" />
                Let's Discuss Your Project
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
