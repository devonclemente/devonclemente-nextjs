"use client";

import { useState } from 'react';
import { FileText, Zap, TrendingUp, Clock, CheckCircle, AlertTriangle, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function UiPathWorkflowViewer() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const workflowSteps = [
    { num: 1, title: 'Read Invoices', desc: 'Iterate through Google Drive folder', icon: FileText },
    { num: 2, title: 'Extract Data', desc: 'Invoice #, Supplier, Due Date, Total', icon: Zap },
    { num: 3, title: 'Check Quality', desc: 'Verify confidence scores (≥0.7)', icon: CheckCircle },
    { num: 4, title: 'Filter & Flag', desc: 'Remove post-9/22, flag low confidence', icon: AlertTriangle },
    { num: 5, title: 'Generate Description', desc: 'AI creates purchase summaries', icon: TrendingUp },
    { num: 6, title: 'Write to Sheets', desc: 'Populate Google Sheets report', icon: FileText }
  ];

  const benefits = [
    { title: 'Time Savings', value: '30-45 min → <2 min' },
    { title: 'Accuracy', value: '100% extraction' },
    { title: 'Scalability', value: '6 or 600 invoices' },
    { title: 'Quality Control', value: 'Auto-flagging' }
  ];

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
      >
        <FileText className="w-4 h-4 mr-2" />
        View UiPath RPA Workflow
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col">

            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 hover:bg-white/20 rounded-full p-2 transition"
              >
                <X size={24} />
              </button>
              <h2 className="text-3xl font-bold mb-2">Invoice Reporting Automation</h2>
              <p className="text-orange-100">UiPath RPA Workflow | Devon Clemente</p>
            </div>

            {/* Tabs */}
            <div className="flex border-b bg-gray-50">
              {['overview', 'workflow', 'results'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 font-semibold capitalize transition ${
                    activeTab === tab
                      ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">

              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                    <h3 className="font-bold text-lg mb-2 text-red-900">Problem</h3>
                    <p className="text-gray-700">Finance managers manually processed invoices weekly—opening PDFs, extracting data, creating summaries. Six invoices = 30-45 minutes of repetitive, error-prone work.</p>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <h3 className="font-bold text-lg mb-2 text-green-900">Solution</h3>
                    <p className="text-gray-700 mb-3">RPA workflow using UiPath Document Understanding + Claude 3.5 Sonnet AI:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Extracts invoice #, supplier, due date, amount</li>
                      <li>Filters by deadline (≤ Sept 22, 2025)</li>
                      <li>Validates confidence scores (≥0.7)</li>
                      <li>Generates purchase descriptions via AI</li>
                      <li>Outputs to Google Sheets</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-blue-900 text-center">
                      <Clock className="inline mr-2" size={28} />
                      6 invoices processed in under 2 minutes
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'workflow' && (
                <div className="space-y-4">
                  {workflowSteps.map((step, idx) => {
                    const Icon = step.icon;
                    return (
                      <div key={idx} className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                          {step.num}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Icon size={20} className="text-blue-600" />
                            <h4 className="font-bold text-lg">{step.title}</h4>
                          </div>
                          <p className="text-gray-600">{step.desc}</p>
                        </div>
                        {idx < workflowSteps.length - 1 && (
                          <ChevronRight className="text-gray-400 flex-shrink-0 mt-2" size={24} />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {activeTab === 'results' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {benefits.map((benefit, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                        <h4 className="font-bold text-gray-800 mb-1">{benefit.title}</h4>
                        <p className="text-2xl font-bold text-blue-600">{benefit.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mt-6">
                    <h3 className="font-bold text-lg mb-2 text-yellow-900">Challenges</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Google Sheets remapping required after each logout</li>
                      <li>Date comparison workarounds in UiPath Web</li>
                      <li>Email notifications would enhance alerting</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <h3 className="font-bold text-lg mb-2 text-green-900">What Worked</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>100% accuracy on field extraction</li>
                      <li>Confidence scoring caught quality issues</li>
                      <li>AI descriptions were clear and professional</li>
                      <li>Google Sheets integration seamless</li>
                    </ul>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </>
  );
}
