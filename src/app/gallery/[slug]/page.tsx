import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import GalleryShareButtons from "@/components/GalleryShareButtons";

interface GalleryItem {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageMaxClass: string;
  heading: string;
  subheading: string;
  imageDescription: string;
  badgeLabel: string;
  badgeClass: string;
  prompt?: string;
  listLabel: string;
  listItems: string[];
  metaTitle: string;
  metaAlt: string;
  metaKeywords: string;
  metaFormat: string;
  prevHref: string;
  prevLabel: string;
  nextHref: string;
  nextLabel: string;
  headerTitle: string;
}

const galleryData: Record<string, GalleryItem> = {
  "devon-clemente-professional-formal": {
    title: "Devon Clemente - Professional Formal Portrait | Gallery",
    description: "Professional formal portrait of Devon Clemente, AI Process Automation Specialist.",
    imageSrc: "/assets/devonclemente-portrait-formal.jpeg",
    imageAlt: "Devon Clemente - Professional Headshot",
    imageMaxClass: "max-w-lg",
    heading: "Devon Clemente",
    subheading: "Professional Headshot",
    imageDescription: "A polished professional headshot featuring Devon Clemente in a business-formal setting. Ideal for LinkedIn profiles, corporate websites, and professional materials. Neutral background ensures focus on professional presence and approachability.",
    badgeLabel: "Professional photography, unmodified",
    badgeClass: "bg-blue-100 text-blue-900 border-blue-200",
    listLabel: "Use Cases",
    listItems: ["✓ LinkedIn profile", "✓ Corporate website", "✓ Professional email signature", "✓ Business cards", "✓ Speaking engagements"],
    metaTitle: "Devon Clemente - Professional Headshot",
    metaAlt: "Devon Clemente - Professional Headshot with neutral background",
    metaKeywords: "Devon Clemente, professional headshot, AI automation specialist, business portrait",
    metaFormat: "JPEG, High Resolution",
    prevHref: "/gallery",
    prevLabel: "← Back to Gallery",
    nextHref: "/gallery/devon-clemente-professional-casual",
    nextLabel: "Next Image →",
    headerTitle: "Professional Gallery",
  },
  "devon-clemente-professional-casual": {
    title: "Devon Clemente - Professional Casual Portrait | Gallery",
    description: "Professional casual portrait of Devon Clemente, AI Process Automation Specialist.",
    imageSrc: "/assets/devonclemente-portrait-casual.jpeg",
    imageAlt: "Devon Clemente - Professional Casual Portrait",
    imageMaxClass: "max-w-lg",
    heading: "Devon Clemente",
    subheading: "Professional Casual Portrait",
    imageDescription: "A relaxed yet professional portrait of Devon Clemente in a casual business setting. Perfect for personal branding, social media profiles, and networking platforms where approachability and authenticity matter.",
    badgeLabel: "Professional photography, unmodified",
    badgeClass: "bg-blue-100 text-blue-900 border-blue-200",
    listLabel: "Use Cases",
    listItems: ["✓ Personal branding", "✓ Social media profiles", "✓ Networking events", "✓ Blog author photo", "✓ About page"],
    metaTitle: "Devon Clemente - Professional Casual Portrait",
    metaAlt: "Devon Clemente - Professional Casual Portrait in relaxed setting",
    metaKeywords: "Devon Clemente, professional casual portrait, AI automation specialist, personal branding",
    metaFormat: "JPEG, High Resolution",
    prevHref: "/gallery/devon-clemente-professional-formal",
    prevLabel: "← Previous Image",
    nextHref: "/gallery/devon-clemente-knight-portrait",
    nextLabel: "Next Image →",
    headerTitle: "Professional Gallery",
  },
  "devon-clemente-knight-portrait": {
    title: "Devon Clemente - Knight Portrait | Gallery",
    description: "AI-generated knight portrait of Devon Clemente, AI Process Automation Specialist.",
    imageSrc: "/assets/devonclemente-portrait-knight.png",
    imageAlt: "Devon Clemente - AI-Generated Medieval Knight Portrait",
    imageMaxClass: "max-w-lg",
    heading: "Devon Clemente",
    subheading: "Knight Portrait",
    imageDescription: "A creative AI-generated interpretation transforming a professional portrait into a heroic medieval knight. This artistic visualization represents strength, leadership, and the modern warrior of technology and automation.",
    badgeLabel: "AI-generated art",
    badgeClass: "border-cyan-300 text-cyan-700",
    prompt: "AI-generated: Professional transformed into heroic medieval knight in shining armor",
    listLabel: "Symbolism",
    listItems: ["⚔ Modern warrior in tech & AI", "🛡 Strength and protection", "👑 Leadership and vision", "✨ Innovation and mastery"],
    metaTitle: "Devon Clemente - AI-Generated Knight Portrait",
    metaAlt: "Devon Clemente transformed into heroic medieval knight, AI-generated creative portrait",
    metaKeywords: "Devon Clemente, AI art, knight portrait, creative visualization",
    metaFormat: "PNG, AI-Generated",
    prevHref: "/gallery/devon-clemente-professional-casual",
    prevLabel: "← Previous Image",
    nextHref: "/gallery/devon-clemente-ai-workspace",
    nextLabel: "View Technology Showcase →",
    headerTitle: "Professional Gallery",
  },
  "devon-clemente-ai-workspace": {
    title: "Devon Clemente - AI Workspace | Gallery",
    description: "AI-generated futuristic workspace visualization by Devon Clemente, AI Process Automation Specialist.",
    imageSrc: "/assets/devonclemente-ai-workspace.jpeg",
    imageAlt: "Devon Clemente AI Automation Futuristic Workspace Visualization",
    imageMaxClass: "max-w-3xl",
    heading: "AI Workspace",
    subheading: "Futuristic Technology Vision",
    imageDescription: "A futuristic AI-powered workspace featuring holographic displays, advanced technology interfaces, and the cutting-edge tools of tomorrow's automation specialist. Visualizes the intersection of human creativity and artificial intelligence.",
    badgeLabel: "AI-generated art",
    badgeClass: "border-cyan-300 text-cyan-700",
    prompt: "Futuristic AI-powered workspace with holographic displays and advanced technology",
    listLabel: "Represents",
    listItems: ["🖥 Future of work", "🤖 AI-human collaboration", "⚡ Technology innovation", "🌐 Digital workspace"],
    metaTitle: "AI Workspace - Futuristic Visualization",
    metaAlt: "Futuristic AI-powered workspace with holographic displays and advanced technology",
    metaKeywords: "Devon Clemente, AI workspace, futuristic technology, automation specialist",
    metaFormat: "JPEG, AI-Generated",
    prevHref: "/gallery/devon-clemente-knight-portrait",
    prevLabel: "← Previous Image",
    nextHref: "/gallery/devon-clemente-digital-transformation",
    nextLabel: "Next Image →",
    headerTitle: "Technology Gallery",
  },
  "devon-clemente-digital-transformation": {
    title: "Devon Clemente - Digital Transformation | Gallery",
    description: "Digital transformation artwork by Devon Clemente, AI Process Automation Specialist.",
    imageSrc: "/assets/devonclemente-digital-transformation.jpeg",
    imageAlt: "Devon Clemente - Digital Transformation Concept Art",
    imageMaxClass: "max-w-3xl",
    heading: "Digital Transformation",
    subheading: "Legacy to Modern Evolution",
    imageDescription: "A powerful visualization showing the transformation from traditional systems to modern digital solutions. Data streams flow from legacy infrastructure to cloud-based, AI-powered systems, representing business modernization and automation.",
    badgeLabel: "AI-generated art",
    badgeClass: "border-cyan-300 text-cyan-700",
    prompt: "Digital transformation concept with data streams flowing from traditional to modern systems",
    listLabel: "Represents",
    listItems: ["📊 Legacy system migration", "☁️ Cloud adoption", "🔄 Process modernization", "💡 Digital innovation"],
    metaTitle: "Digital Transformation Concept",
    metaAlt: "Digital transformation visualization with data flowing from legacy to modern systems",
    metaKeywords: "Devon Clemente, digital transformation, modernization, automation",
    metaFormat: "JPEG, AI-Generated",
    prevHref: "/gallery/devon-clemente-ai-workspace",
    prevLabel: "← Previous Image",
    nextHref: "/gallery/devon-clemente-neural-network",
    nextLabel: "Next Image →",
    headerTitle: "Technology Gallery",
  },
  "devon-clemente-neural-network": {
    title: "Devon Clemente - Neural Network | Gallery",
    description: "Neural network AI artwork by Devon Clemente, AI Process Automation Specialist.",
    imageSrc: "/assets/devonclemente-neural-network.jpeg",
    imageAlt: "Devon Clemente - Artificial Intelligence Neural Network Art",
    imageMaxClass: "max-w-3xl",
    heading: "Neural Network",
    subheading: "AI Intelligence Visualization",
    imageDescription: "A stunning visualization of a glowing neural network brain with interconnected nodes representing artificial intelligence, machine learning, and cognitive computing. Symbolizes the power and complexity of modern AI systems.",
    badgeLabel: "AI-generated art",
    badgeClass: "border-cyan-300 text-cyan-700",
    prompt: "Glowing neural network brain with interconnected nodes representing AI intelligence",
    listLabel: "Represents",
    listItems: ["🧠 Artificial intelligence", "⚡ Machine learning", "🔗 Interconnected systems", "🌟 Cognitive computing"],
    metaTitle: "Neural Network Brain AI",
    metaAlt: "Glowing neural network brain with interconnected nodes for AI intelligence",
    metaKeywords: "Devon Clemente, neural network, AI, machine learning, artificial intelligence",
    metaFormat: "JPEG, AI-Generated",
    prevHref: "/gallery/devon-clemente-digital-transformation",
    prevLabel: "← Previous Image",
    nextHref: "/gallery/devon-clemente-process-automation",
    nextLabel: "Next Image →",
    headerTitle: "Technology Gallery",
  },
  "devon-clemente-process-automation": {
    title: "Devon Clemente - Process Automation | Gallery",
    description: "Process automation artwork by Devon Clemente, AI Process Automation Specialist.",
    imageSrc: "/assets/devonclemente-gears-to-code.jpeg",
    imageAlt: "Devon Clemente - Process Automation Visualization",
    imageMaxClass: "max-w-3xl",
    heading: "Process Automation",
    subheading: "Gears to Code Evolution",
    imageDescription: "A conceptual visualization of the transformation from mechanical processes (gears) to digital automation (flowing code). Symbolizes the evolution of business automation and the power of software to streamline operations.",
    badgeLabel: "AI-generated art",
    badgeClass: "border-cyan-300 text-cyan-700",
    prompt: "Mechanical gears transforming into flowing code, symbolizing automation evolution",
    listLabel: "Represents",
    listItems: ["⚙️ Process optimization", "💻 Automation software", "🔄 Workflow integration", "🚀 Digital evolution"],
    metaTitle: "Process Automation Gears to Code",
    metaAlt: "Mechanical gears transforming into flowing code for process automation",
    metaKeywords: "Devon Clemente, automation, process optimization, workflow, code",
    metaFormat: "JPEG, AI-Generated",
    prevHref: "/gallery/devon-clemente-neural-network",
    prevLabel: "← Previous Image",
    nextHref: "/gallery/devon-clemente-data-analytics",
    nextLabel: "Next Image →",
    headerTitle: "Technology Gallery",
  },
  "devon-clemente-data-analytics": {
    title: "Devon Clemente - Data Analytics | Gallery",
    description: "Data analytics dashboard artwork by Devon Clemente, AI Process Automation Specialist.",
    imageSrc: "/assets/devonclemente-data-analytics.jpeg",
    imageAlt: "Devon Clemente - Data Analytics Dashboard Visualization",
    imageMaxClass: "max-w-3xl",
    heading: "Data Analytics",
    subheading: "Dashboard Visualization",
    imageDescription: "A modern data analytics dashboard visualization featuring charts, graphs, and real-time insights. Represents the power of data-driven decision-making and business intelligence to drive strategic outcomes and measurable results.",
    badgeLabel: "AI-generated art",
    badgeClass: "border-cyan-300 text-cyan-700",
    prompt: "Modern data analytics dashboard with charts, graphs, and real-time insights",
    listLabel: "Represents",
    listItems: ["📊 Data visualization", "💹 Business intelligence", "📈 Performance metrics", "🎯 Strategic insights"],
    metaTitle: "Data Analytics Dashboard",
    metaAlt: "Modern data analytics dashboard with charts, graphs, and real-time insights",
    metaKeywords: "Devon Clemente, data analytics, business intelligence, dashboard",
    metaFormat: "JPEG, AI-Generated",
    prevHref: "/gallery/devon-clemente-process-automation",
    prevLabel: "← Previous Image",
    nextHref: "/gallery/devon-clemente-future-work",
    nextLabel: "Next Image →",
    headerTitle: "Technology Gallery",
  },
  "devon-clemente-future-work": {
    title: "Devon Clemente - Future of Work | Gallery",
    description: "Future of work AI collaboration visualization by Devon Clemente, AI Process Automation Specialist.",
    imageSrc: "/assets/devonclemente-ai-collaboration.jpeg",
    imageAlt: "Devon Clemente - Future of Work AI Collaboration Art",
    imageMaxClass: "max-w-3xl",
    heading: "Future of Work",
    subheading: "Human-AI Collaboration",
    imageDescription: "A hopeful and inspiring visualization of the future workplace where AI assistants and human workers collaborate in harmony. Represents the potential of AI to augment human capabilities and create better outcomes for everyone.",
    badgeLabel: "AI-generated art",
    badgeClass: "border-cyan-300 text-cyan-700",
    prompt: "Future workplace collaboration with AI assistants and human workers in harmony",
    listLabel: "Represents",
    listItems: ["🤝 Collaboration & harmony", "🚀 Future of work", "💡 Augmented capabilities", "✨ Human-AI partnership"],
    metaTitle: "Future of Work AI Collaboration",
    metaAlt: "Future workplace with AI assistants and human workers collaborating in harmony",
    metaKeywords: "Devon Clemente, future of work, AI collaboration, human-AI partnership",
    metaFormat: "JPEG, AI-Generated",
    prevHref: "/gallery/devon-clemente-data-analytics",
    prevLabel: "← Previous Image",
    nextHref: "/gallery/devon-clemente-professional-formal",
    nextLabel: "Back to Start →",
    headerTitle: "Technology Gallery",
  },
};

export function generateStaticParams() {
  return Object.keys(galleryData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = galleryData[slug];
  if (!item) return { title: "Not Found" };
  return {
    title: item.title,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      url: `https://devonclemente.com/gallery/${slug}`,
      images: [{ url: item.imageSrc }],
      type: "website",
    },
    alternates: {
      canonical: `https://devonclemente.com/gallery/${slug}`,
    },
  };
}

export default async function GallerySlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = galleryData[slug];
  if (!item) notFound();

  const fullUrl = `https://devonclemente.com/gallery/${slug}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border/40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/gallery">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Gallery
              </Button>
            </Link>
            <h1 className="text-lg font-semibold text-foreground">{item.headerTitle}</h1>
            <div className="w-[100px]" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Hero: Image + Details */}
        <section className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Image column */}
            <div className="lg:col-span-2">
              <div className="bg-muted rounded-lg overflow-hidden border border-border/50 flex items-center justify-center p-4 md:p-8">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className={`w-full h-auto ${item.imageMaxClass} object-contain`}
                />
              </div>
              <GalleryShareButtons shareUrl={fullUrl} />
            </div>

            {/* Content column */}
            <div className="lg:col-span-1 flex flex-col justify-between">
              <div>
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-foreground mb-2">{item.heading}</h1>
                  <p className="text-lg text-primary font-semibold">{item.subheading}</p>
                </div>

                <div className="mb-6">
                  <h2 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Description</h2>
                  <p className="text-base text-muted-foreground leading-relaxed">{item.imageDescription}</p>
                </div>

                <div className="mb-6">
                  <h2 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">Type</h2>
                  <Badge variant="outline" className={item.badgeClass}>{item.badgeLabel}</Badge>
                </div>

                {item.prompt && (
                  <div className="mb-6">
                    <h2 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">Generation Prompt</h2>
                    <p className="text-sm text-muted-foreground italic">"{item.prompt}"</p>
                  </div>
                )}

                <div>
                  <h2 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">{item.listLabel}</h2>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {item.listItems.map((li, i) => <li key={i}>{li}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meta info */}
        <section className="max-w-5xl mx-auto bg-accent/30 rounded-lg p-6 mb-16 border border-border/50">
          <h2 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">About This Image</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div><p className="text-muted-foreground"><strong>Image Title:</strong> {item.metaTitle}</p></div>
            <div><p className="text-muted-foreground"><strong>Alt Text:</strong> {item.metaAlt}</p></div>
            <div><p className="text-muted-foreground"><strong>Keywords:</strong> {item.metaKeywords}</p></div>
            <div><p className="text-muted-foreground"><strong>Format:</strong> {item.metaFormat}</p></div>
          </div>
        </section>

        {/* Navigation */}
        <section className="max-w-5xl mx-auto">
          <div className="flex gap-4 justify-between">
            <Button variant="outline" asChild>
              <Link href={item.prevHref}>{item.prevLabel}</Link>
            </Button>
            <Button asChild>
              <Link href={item.nextHref}>{item.nextLabel}</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
