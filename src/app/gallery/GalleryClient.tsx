"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, X, Info } from "lucide-react";
import SocialShareSidebar from "@/components/SocialShareSidebar";

const portraitComparisons = [
  {
    id: 1,
    aiImage: "/assets/devonclemente-professional-headshot-ai.png",
    sourceImage: "/assets/devonclemente-portrait-formal.jpeg",
    aiAlt: "Devon Clemente AI-Generated Professional Headshot",
    sourceAlt: "Devon Clemente Original Professional Photo",
    cardTitle: "Professional Headshot Enhancement with Nano Banana",
    modalTitle: "Nano Banana: Professional Corporate Headshot",
    aiGeneration: "Nano Banana",
    prompt: "Make a professional corporate headshot using the picture provided",
    aiObjectPosition: "center",
    sourceObjectPosition: "center 30%",
    description: "AI-enhanced professional headshot transforming casual photography into corporate-ready imagery with refined lighting, professional composition, and polished presentation suitable for executive profiles and business communications.",
    type: "Professional Corporate Portrait",
    useCases: [
      "LinkedIn profiles and professional networks",
      "Company websites and team pages",
      "Business cards and email signatures",
      "Professional directories and databases",
      "Conference speaker profiles",
      "Executive bios and press kits",
    ],
  },
  {
    id: 2,
    aiImage: "/assets/devonclemente-viking-portrait-ai.png",
    sourceImage: "/assets/devonclemente-portrait-casual.jpeg",
    aiAlt: "Devon Clemente AI-Generated Viking Portrait",
    sourceAlt: "Devon Clemente Original Casual Photo",
    cardTitle: "Viking Warrior Transformation with Bing Image Creator",
    modalTitle: "Bing Image Creator: Viking Warrior Portrait",
    aiGeneration: "Bing Image Generator",
    prompt: "Take this picture of me and turn it into a viking warrior. Use the same color scheme for the viking as my shirt.",
    aiObjectPosition: "center",
    sourceObjectPosition: "center",
    description: "Creative AI transformation demonstrating advanced image manipulation and artistic interpretation capabilities. This showcase illustrates how AI can reimagine professional portraits into thematic character designs while maintaining recognizable features and artistic coherence.",
    type: "Creative Character Portrait",
    useCases: [
      "Portfolio creativity showcase",
      "Social media content and engagement",
      "Artistic demonstrations and presentations",
      "Character design references",
      "Creative storytelling projects",
      "Marketing campaign concepts",
    ],
  },
  {
    id: 3,
    aiImage: "/assets/devonclemente-portrait-knight.png",
    sourceImage: "/assets/devonclemente-casual-selfie.jpeg",
    aiAlt: "Devon Clemente AI-Generated Knight Portrait",
    sourceAlt: "Devon Clemente Original Selfie Photo",
    cardTitle: "Medieval Knight Transformation with ChatGPT",
    modalTitle: "ChatGPT: Medieval Knight Portrait",
    aiGeneration: "ChatGPT",
    prompt: "Make this guy as a knight similar color pattern",
    aiObjectPosition: "center 10%",
    sourceObjectPosition: "center 20%",
    description: "AI-powered historical character transformation showcasing advanced style transfer and creative capabilities. This demonstrates the potential of AI image generation for creative projects, historical visualizations, and artistic interpretation of modern photography.",
    type: "Historical Fantasy Portrait",
    useCases: [
      "Portfolio creativity showcase",
      "Fantasy character references and concepts",
      "Social media engagement content",
      "Artistic demonstrations and workshops",
      "Creative storytelling and world-building",
      "Game design inspiration and mockups",
    ],
  },
];

const aiTechArt = [
  { id: 1, src: "/assets/devonclemente-ai-workspace.jpeg", alt: "Devon Clemente AI Automation Futuristic Workspace Visualization", title: "AI Workspace", prompt: "Futuristic AI-powered workspace with holographic displays and advanced technology", link: "/gallery/devon-clemente-ai-workspace" },
  { id: 2, src: "/assets/devonclemente-digital-transformation.jpeg", alt: "Devon Clemente Digital Transformation Concept Art", title: "Digital Transformation", prompt: "Digital transformation concept with data streams flowing from traditional to modern systems", link: "/gallery/devon-clemente-digital-transformation" },
  { id: 3, src: "/assets/devonclemente-neural-network.jpeg", alt: "Devon Clemente Artificial Intelligence Neural Network Art", title: "Neural Network", prompt: "Glowing neural network brain with interconnected nodes representing AI intelligence", link: "/gallery/devon-clemente-neural-network" },
  { id: 4, src: "/assets/devonclemente-gears-to-code.jpeg", alt: "Devon Clemente Process Automation Visualization", title: "Process Automation", prompt: "Mechanical gears transforming into flowing code, symbolizing automation evolution", link: "/gallery/devon-clemente-process-automation" },
  { id: 5, src: "/assets/devonclemente-data-analytics.jpeg", alt: "Devon Clemente Data Analytics Dashboard Visualization", title: "Data Analytics", prompt: "Modern data analytics dashboard with charts, graphs, and real-time insights", link: "/gallery/devon-clemente-data-analytics" },
  { id: 6, src: "/assets/devonclemente-ai-collaboration.jpeg", alt: "Devon Clemente Future of Work AI Collaboration Art", title: "Future of Work", prompt: "Future workplace collaboration with AI assistants and human workers in harmony", link: "/gallery/devon-clemente-future-work" },
];

export default function GalleryClient() {
  const [selectedComparison, setSelectedComparison] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SocialShareSidebar
        url="https://devonclemente.com/gallery"
        title="Personal photos vs AI recreations - can you tell the difference? See this revealing side-by-side analysis."
        description="Exploring the evolution of portrait creation technology through side-by-side AI and personal photo comparisons"
      />

      <Link href="/#featured-projects" className="fixed top-6 left-6 z-50">
        <Button variant="outline" size="sm" className="shadow-lg hover:shadow-xl transition-all duration-200 bg-background/80 backdrop-blur-sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Button>
      </Link>

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-hero-animated">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium bg-white/20 text-white border-white/30 pointer-events-none">
              Gallery
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ textShadow: "0 4px 8px rgba(0,0,0,0.3)" }}>
              Professional Gallery
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}>
              Professional Photography & Creative Showcase
            </p>
          </div>
        </div>
      </section>

      {/* Portrait Comparisons */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">Portrait Evolution</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Real & AI-Generated
                <span className="text-primary block">Portrait Images</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A sample of AI-generated interpretations showing the evolution of portrait creation and text-to-image technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portraitComparisons.map((comparison) => (
                <Card
                  key={comparison.id}
                  className="bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 border-0 overflow-hidden outline-primary cursor-pointer relative"
                  onClick={() => setSelectedComparison(comparison.id)}
                >
                  <div className="absolute top-1/2 right-4 -translate-y-1/2 z-20 pointer-events-none">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
                      <div className="relative bg-primary text-primary-foreground rounded-full p-2 shadow-lg">
                        <Info className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-3" style={{ backgroundColor: "rgba(0,0,0,0.75)" }}>
                    <h3 className="font-bold text-white text-lg leading-tight text-center" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
                      {comparison.cardTitle.split(" with ")[0]}
                      <span className="text-primary"> with {comparison.cardTitle.split(" with ")[1]}</span>
                    </h3>
                  </div>

                  <div className="aspect-[3/4] bg-muted overflow-hidden relative group">
                    <img src={comparison.aiImage} alt={comparison.aiAlt} className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-300" style={{ objectPosition: comparison.aiObjectPosition }} />
                    <div className="absolute top-2 right-2">
                      <Badge variant="default" className="bg-primary/90 text-primary-foreground text-xs">AI Generated</Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white px-6">
                        <p className="font-semibold text-lg mb-2">Click to see:</p>
                        <p className="text-sm">Prompt, Description & Use Cases</p>
                      </div>
                    </div>
                  </div>

                  <div className="aspect-[3/4] bg-muted overflow-hidden relative group">
                    <img src={comparison.sourceImage} alt={comparison.sourceAlt} className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-300" style={{ objectPosition: comparison.sourceObjectPosition }} />
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-secondary/90 text-secondary-foreground text-xs">Source Photo</Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white px-6">
                        <p className="font-semibold text-lg mb-2">Click to see:</p>
                        <p className="text-sm">Prompt, Description & Use Cases</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Details Modal */}
      {selectedComparison !== null && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4" onClick={() => setSelectedComparison(null)}>
          <div className="bg-background rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedComparison(null)} className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background p-2 rounded-full transition-colors">
              <X className="w-6 h-6" />
            </button>
            {portraitComparisons.filter((c) => c.id === selectedComparison).map((comparison) => (
              <div key={comparison.id} className="p-8">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    <span className="text-primary font-extrabold text-4xl md:text-5xl">{comparison.modalTitle.split(":")[0]}</span>
                    <span className="block mt-2">{comparison.modalTitle.split(":")[1]}</span>
                  </h2>
                </div>
                <div className="text-center mb-6">
                  <p className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm border border-primary/20">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    Click images to view full resolution
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full py-4 px-6 text-center" style={{ backgroundColor: "hsl(210,100%,50%)", boxShadow: "0 4px 12px rgba(59,130,246,0.4)" }}>
                      <span className="text-white font-extrabold text-xl md:text-2xl tracking-wide uppercase" style={{ textShadow: "0 3px 8px rgba(0,0,0,0.6)" }}>AI Generated</span>
                    </div>
                    <div className="aspect-[3/4] bg-muted overflow-hidden cursor-pointer border-4 border-blue-500/40 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300" onClick={(e) => { e.stopPropagation(); setLightboxImage({ src: comparison.aiImage, alt: comparison.aiAlt }); }}>
                      <img src={comparison.aiImage} alt={comparison.aiAlt} className="w-full h-full object-cover" style={{ objectPosition: comparison.aiObjectPosition }} />
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full py-4 px-6 text-center" style={{ backgroundColor: "hsl(220,10%,40%)", boxShadow: "0 4px 12px rgba(100,100,110,0.4)" }}>
                      <span className="text-white font-extrabold text-xl md:text-2xl tracking-wide uppercase" style={{ textShadow: "0 3px 8px rgba(0,0,0,0.6)" }}>Source Photo</span>
                    </div>
                    <div className="aspect-[3/4] bg-muted overflow-hidden cursor-pointer border-4 border-gray-500/40 hover:border-gray-400 hover:shadow-xl hover:shadow-gray-500/30 transition-all duration-300" onClick={(e) => { e.stopPropagation(); setLightboxImage({ src: comparison.sourceImage, alt: comparison.sourceAlt }); }}>
                      <img src={comparison.sourceImage} alt={comparison.sourceAlt} className="w-full h-full object-cover" style={{ objectPosition: comparison.sourceObjectPosition }} />
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20 mb-8 shadow-sm">
                  <h3 className="font-bold text-foreground text-lg mb-3 flex items-center gap-2"><span className="w-1 h-6 bg-primary rounded-full" />Generation Prompt</h3>
                  <p className="text-muted-foreground italic leading-relaxed text-lg pl-3 border-l-2 border-primary/30">"{comparison.prompt}"</p>
                </div>
                <div className="mb-8">
                  <h3 className="font-bold text-foreground text-lg mb-3 flex items-center gap-2"><span className="w-1 h-6 bg-primary rounded-full" />Description</h3>
                  <p className="text-muted-foreground leading-relaxed">{comparison.description}</p>
                </div>
                <div className="mb-8">
                  <h3 className="font-bold text-foreground text-lg mb-3 flex items-center gap-2"><span className="w-1 h-6 bg-primary rounded-full" />Type</h3>
                  <Badge variant="outline" className="text-base px-4 py-2 font-medium">{comparison.type}</Badge>
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-primary rounded-full" />Use Cases</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {comparison.useCases.map((useCase, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground leading-relaxed">
                        <span className="w-2 h-2 bg-primary/60 rounded-full mt-2 flex-shrink-0" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/95 z-[110] flex items-center justify-center p-4" onClick={() => setLightboxImage(null)}>
          <button onClick={() => setLightboxImage(null)} className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 p-2 rounded-full transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
          <img src={lightboxImage.src} alt={lightboxImage.alt} className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      {/* AI Tech Art Grid */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">Technology & Innovation Showcase</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Technology & Innovation
                <span className="text-primary block">Through AI Creativity</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Visualizing the future of automation, AI, and digital transformation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiTechArt.map((artwork) => (
                <Link href={artwork.link} key={artwork.id}>
                  <Card className="group bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 border-0 overflow-hidden outline-primary h-full cursor-pointer">
                    <div className="aspect-video bg-muted overflow-hidden">
                      <img src={artwork.src} alt={artwork.alt} className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-foreground mb-2">{artwork.title}</h3>
                      <p className="text-sm text-muted-foreground italic leading-relaxed">"{artwork.prompt}"</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Interested in AI Automation?</h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Explore my portfolio of real-world automation projects that deliver measurable results
            </p>
            <Button size="lg" className="shadow-glow" asChild>
              <Link href="/#featured-projects">View My Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
