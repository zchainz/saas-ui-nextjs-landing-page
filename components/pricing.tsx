import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$39",
    period: "/month",
    description: "Perfect for podcasters just getting started",
    popular: false,
    features: [
      "4 episodes per month",
      "20 clips per episode",
      "X threads & LinkedIn posts",
      "Watermarked branding",
      "Basic compliance checks",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "$79",
    period: "/month",
    description: "Most popular for growing FIRE creators",
    popular: true,
    features: [
      "Unlimited episodes",
      "Unlimited clips",
      "All output formats",
      "Custom branding",
      "Advanced compliance AI",
      "Priority chat + community",
      "Social scheduling",
      "Analytics dashboard",
    ],
  },
  {
    name: "Elite",
    price: "$149",
    period: "/month",
    description: "White-glove service for professional networks",
    popular: false,
    features: [
      "Everything in Pro",
      "3 team seats",
      "White-glove compliance review",
      "Priority support + 1:1 calls",
      "Custom AI training",
      "Early access to features",
      "API access",
      "Dedicated account manager",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your content creation needs. All plans include
            14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular
                  ? "border-2 border-primary-800 shadow-xl scale-105"
                  : "border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary-800 to-accent-500 text-white border-none">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-4">
                  {plan.description}
                </CardDescription>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {plan.period}
                  </span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Link href="/signup" className="w-full">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-primary-800 hover:bg-primary-700 text-white"
                        : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            All plans include 14-day free trial. No credit card required. Cancel
            anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
