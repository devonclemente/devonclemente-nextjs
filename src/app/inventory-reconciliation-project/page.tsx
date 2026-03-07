import type { Metadata } from "next";
import InventoryReconciliationClient from "./InventoryReconciliationClient";

export const metadata: Metadata = {
  title: "AI Inventory Reconciliation | Devon Clemente",
  description: "AI-powered inventory reconciliation automation. Intelligent matching, discrepancy detection, and reporting. Built by Devon Clemente.",
  openGraph: {
    title: "AI Inventory Reconciliation | Devon Clemente",
    description: "AI-powered inventory reconciliation automation. Intelligent matching, discrepancy detection, and reporting.",
    url: "https://devonclemente.com/inventory-reconciliation-project",
    type: "website",
    images: [{ url: "/gallery-preview.jpg" }],
  },
  alternates: { canonical: "https://devonclemente.com/inventory-reconciliation-project" },
};

export default function InventoryReconciliationPage() {
  return <InventoryReconciliationClient />;
}
