import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Shield, Zap, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "FIRE-Tuned AI",
    description:
      "Authoritative tone with jargon detection (Roth IRA, 4% rule, index funds). Speaks your audience's language without dumbing it down.",
  },
  {
    icon: Shield,
    title: "Compliance Safety",
    description:
      "Auto-flags risky phrases like 'guaranteed returns' and suggests safe rephrases. Built-in SEC/FINRA guardrails keep you protected.",
  },
  {
    icon: Zap,
    title: "One-Click Outputs",
    description:
      "Reels, X threads, LinkedIn carousels, quote graphics – all formatted and ready to post. No design skills needed.",
  },
  {
    icon: TrendingUp,
    title: "Unlimited on Pro",
    description:
      "Scale your weekly episodes without limits. Process unlimited content, export unlimited clips, grow without constraints.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Everything You Need to <span className="text-primary-800 dark:text-primary-400">Scale Your Content</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Purpose-built for personal finance podcasters who want to grow their audience
            without risking compliance issues.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary-800 dark:hover:border-primary-400 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-800 to-accent-500 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
