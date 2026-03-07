import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import UiPathWorkflowViewer from "@/components/UiPathWorkflowViewer";

export const metadata: Metadata = {
  title: "Triple Peaks Invoice Automation | Devon Clemente",
  description: "UiPath RPA invoice processing automation for Triple Peaks Hotel. Automated data extraction and validation. Built by Devon Clemente.",
  openGraph: {
    title: "Triple Peaks Invoice Automation | Devon Clemente",
    description: "UiPath RPA invoice processing automation. Automated data extraction and validation.",
    url: "https://devonclemente.com/triple-peaks-invoice-project",
    type: "website",
    images: [{ url: "/gallery-preview.jpg" }],
  },
  alternates: { canonical: "https://devonclemente.com/triple-peaks-invoice-project" },
};

export default function TriplePeaksInvoiceProjectPage() {
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
              Automation Project
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              UiPath
              <span className="block text-accent">Invoice RPA</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Streamlined invoice processing using UiPath RPA to automate data extraction and system entry
            </p>
            <div className="text-lg text-white/80">
              Devon Clemente | Business Process Automation | Hospitality Industry
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-8 pb-8">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-muted-foreground mb-4">
            This project showcases the development of an automated invoice processing system for Triple Peaks Hotel using UiPath RPA technology. The solution automates the extraction of key information from hotel invoices, validates the data, and enters it into the hotel&apos;s management system.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Key Features</h3>
              <ul className="list-disc pl-4 text-muted-foreground space-y-1">
                <li>Automated PDF invoice data extraction</li>
                <li>Smart data validation and error handling</li>
                <li>Integration with hotel management system</li>
                <li>Email notification system for exceptions</li>
                <li>Detailed audit logging and reporting</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Technologies Used</h3>
              <ul className="list-disc pl-4 text-muted-foreground space-y-1">
                <li>UiPath Studio Enterprise</li>
                <li>UiPath Document Understanding</li>
                <li>PDF processing and OCR</li>
                <li>Excel automation</li>
                <li>RESTful API integration</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Technical Details</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              The automation workflow is built using UiPath Studio Enterprise and leverages advanced Document Understanding capabilities for intelligent data extraction from invoice PDFs. The process includes:
            </p>
            <ul className="list-disc pl-4 space-y-2">
              <li>
                <span className="font-medium text-foreground">Document Processing:</span>{" "}
                Automated extraction of invoice details using OCR and machine learning models trained on hotel-specific documents.
              </li>
              <li>
                <span className="font-medium text-foreground">Data Validation:</span>{" "}
                Multi-step validation process to ensure accuracy of extracted data, including cross-referencing with existing records.
              </li>
              <li>
                <span className="font-medium text-foreground">System Integration:</span>{" "}
                Seamless integration with the hotel&apos;s management system through API calls and UI automation.
              </li>
              <li>
                <span className="font-medium text-foreground">Error Handling:</span>{" "}
                Robust exception handling with automated notifications and human-in-the-loop verification for edge cases.
              </li>
            </ul>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Project Results</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              The implementation of this RPA solution has delivered significant improvements in invoice processing efficiency and accuracy:
            </p>
            <ul className="list-disc pl-4 space-y-2">
              <li>90% reduction in manual data entry time</li>
              <li>99.9% accuracy in data extraction and entry</li>
              <li>Processing capacity increased from 50 to 500 invoices per day</li>
              <li>4-hour reduction in daily processing time</li>
              <li>Significant decrease in processing backlog</li>
            </ul>
          </div>
        </Card>

        {/* Demo Section */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-foreground border-b-2 border-primary pb-4">
              Project Demonstration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg text-muted-foreground text-center mb-6">
              Explore the UiPath RPA workflow and technical implementation details
            </p>
            <div className="flex justify-center">
              <UiPathWorkflowViewer />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
