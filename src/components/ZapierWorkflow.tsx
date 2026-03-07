import { CheckCircle2, Calendar, Webhook, Cpu, Mail, HelpCircle, MoreHorizontal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ZapierWorkflow = () => {
  const workflowSteps = [
    {
      icon: Calendar,
      title: "Schedule by Zapier",
      subtitle: "1. Every Day",
      description: "Triggers daily at 7:00 AM",
      badge: "Schedule",
      badgeColor: "bg-orange-500"
    },
    {
      icon: Webhook,
      title: "Webhooks by Zapier",
      subtitle: "2. GET",
      description: "Fetch weather data from API",
      badge: "Webhooks",
      badgeColor: "bg-orange-500"
    },
    {
      icon: Cpu,
      title: "Google AI Studio (Gemini)",
      subtitle: "3. Send Prompt",
      description: "Process weather into business insights",
      badge: "AI Studio",
      badgeColor: "bg-blue-500"
    },
    {
      icon: Mail,
      title: "Gmail (2.5.1)",
      subtitle: "4. Send Email",
      description: "Deliver formatted recommendations",
      badge: "Gmail",
      badgeColor: "bg-red-500"
    }
  ];

  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 rounded-xl shadow-xl border border-border">
      <div className="space-y-4">
        {workflowSteps.map((step, index) => (
          <div key={index} className="relative">
            <Card className="bg-background border shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    <Badge variant="outline" className={`${step.badgeColor} text-white border-0 text-xs`}>
                      <step.icon className="w-3 h-3 mr-1" />
                      {step.badge}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-muted-foreground" />
                    <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-semibold text-sm text-foreground">{step.subtitle}</h3>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
            </Card>

            {index < workflowSteps.length - 1 && (
              <div className="flex justify-center py-2">
                <div className="w-px h-6 bg-primary/30"></div>
                <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transform bg-primary/20 rounded-full p-1">
                  <div className="w-2 h-2 bg-primary/40 rounded-full"></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <p className="text-xs text-center text-muted-foreground">
          Simulated Zapier Workflow - Weather Business Automation - Devon Clemente
        </p>
      </div>
    </div>
  );
};

export default ZapierWorkflow;
