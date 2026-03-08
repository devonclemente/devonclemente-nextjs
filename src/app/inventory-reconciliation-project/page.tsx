import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Inventory Reconciliation | Devon Clemente",
  description: "AI-powered inventory reconciliation automation. Intelligent matching, discrepancy detection, and reporting. Built by Devon Clemente.",
  openGraph: {
    title: "AI Inventory Reconciliation | Devon Clemente",
    description: "AI-powered inventory reconciliation automation. Intelligent matching, discrepancy detection, and reporting.",
    url: "https://www.devonclemente.com/inventory-reconciliation-project",
    type: "website",
    images: [{ url: "/assets/devonclemente-professional-headshot-ai.png", width: 1024, height: 1024, alt: "Devon Clemente - AI Process Automation Specialist" }],
  },
  alternates: { canonical: "https://www.devonclemente.com/inventory-reconciliation-project" },
};

export default function InventoryReconciliationPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Floating Back Button */}
      <Link href="/#featured-projects" className="fixed top-6 left-6 z-50">
        <Button
          variant="outline"
          size="sm"
          className="shadow-lg hover:shadow-xl transition-all duration-200 bg-background/80 backdrop-blur-sm"
        >
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
              AI Automation Project
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Inventory Reconciliation
              <span className="block text-accent">Automation with AI</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Real-time inventory tracking using AI-powered document processing and automated workflows
            </p>
            <div className="text-lg text-white/80">
              Devon Clemente | AI Automation | Sprint 7 Final Project
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 pb-8">
          {/* Business Problem */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">The Business Problem</h2>
            <p className="text-muted-foreground mb-4">
              Air Brake &amp; Equipment faced critical inventory management challenges that impacted operations and customer satisfaction:
            </p>
            <ul className="list-disc pl-4 text-muted-foreground space-y-2">
              <li>No accurate inventory tracking system in place</li>
              <li>Manual, slow, and error-prone processes</li>
              <li>Pick tickets sitting unbilled for 2-3 months before inventory adjustments</li>
              <li>Staff informing customers of part availability based on outdated system data</li>
              <li>Warehouse staff wasting up to 1 hour searching for parts already sold</li>
              <li>Frequent callbacks to customers reporting parts unavailable</li>
            </ul>
            <div className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
              <p className="font-semibold text-destructive">
                Result: Lost sales, wasted labor, and customer frustration
              </p>
            </div>
          </Card>

          {/* Solution Overview */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">The Solution Overview</h2>
            <p className="text-muted-foreground mb-4">
              An automated real-time inventory tracking system powered by AI and intelligent workflow automation:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-2">Core Capabilities</h3>
                <ul className="list-disc pl-4 text-muted-foreground space-y-1">
                  <li>Processes pick tickets and packing slips immediately upon receipt</li>
                  <li>AI extracts transaction data and updates inventory instantly</li>
                  <li>Triggers low stock alert emails when parts fall below reorder points</li>
                  <li>Routes uncertain extractions to manual review queue for quality control</li>
                  <li>Maintains real-time accuracy across all inventory records</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Technologies Used</h3>
                <ul className="list-disc pl-4 text-muted-foreground space-y-1">
                  <li>Make.com (automation platform)</li>
                  <li>Gemini 2.0 Flash Vision API</li>
                  <li>Google Sheets (database)</li>
                  <li>Gmail (notifications)</li>
                  <li>JSON parsing and data validation</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Technical Implementation */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Technical Implementation</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                The automation workflow leverages Make.com&apos;s automation platform combined with Google&apos;s Gemini 2.0 Flash vision capabilities for intelligent document data extraction processing:
              </p>

              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">1. Document Capture &amp; AI Processing</h3>
                  <p className="text-sm">
                    System monitors designated folder (in a real world scenario it would be linked to a scans folder) for incoming pick tickets and packing slips scanned by employees. AI-powered OCR extracts structured data including part numbers, quantities, and transaction details from documents of varying formats and quality.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">2. Data Validation &amp; Quality Control</h3>
                  <p className="text-sm">
                    Extracted data undergoes confidence scoring. High-confidence extractions (95%+) automatically update inventory. Lower-confidence items route to manual review queue with an email notification for human attention.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">3. Inventory Updates &amp; Reconciliation</h3>
                  <p className="text-sm">
                    Real-time inventory adjustments across master database using Google Sheets API (or integrate with company inventory system). System aggregates multiple transactions, validates part numbers against master inventory list, and calculates new quantity levels instantly.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">4. Automated Alerts &amp; Notifications</h3>
                  <p className="text-sm">
                    Intelligent monitoring of inventory levels triggers automated email alerts when parts fall below reorder points. Notifications include part details, current stock levels, and recommended reorder quantities based on historical usage patterns.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Project Results */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Project Results &amp; Impact</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                The implementation delivered measurable improvements in operational efficiency and customer satisfaction:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                  <h3 className="font-semibold text-primary mb-2">Processing Efficiency</h3>
                  <ul className="text-sm space-y-1">
                    <li>• 98% reduction in processing time</li>
                    <li>• Real-time vs. 2-3 month delays</li>
                    <li>• 95%+ extraction accuracy</li>
                  </ul>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                  <h3 className="font-semibold text-primary mb-2">Business Impact</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Eliminated wasted search time</li>
                    <li>• Accurate stock availability data</li>
                    <li>• Reduced lost sales opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Key Features */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="font-semibold">AI-Powered OCR</h3>
                <p className="text-sm text-muted-foreground">
                  Gemini 2.0 Flash extracts data from handwritten and low-quality documents with 95%+ accuracy
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold">Real-Time Processing</h3>
                <p className="text-sm text-muted-foreground">
                  Instant inventory updates upon document receipt, eliminating 2-3 month delays
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="font-semibold">Quality Control</h3>
                <p className="text-sm text-muted-foreground">
                  Confidence scoring routes uncertain visual document images to a review queue and triggers email alerts for human intervention.
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="font-semibold">Smart Alerts</h3>
                <p className="text-sm text-muted-foreground">
                  Automated low-stock notifications trigger when inventory falls below reorder points
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-semibold">Data Aggregation</h3>
                <p className="text-sm text-muted-foreground">
                  Multi-transaction processing with automatic part number validation and reconciliation
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="font-semibold">Flexible Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Modular workflow design allows easy integration with existing business systems
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
