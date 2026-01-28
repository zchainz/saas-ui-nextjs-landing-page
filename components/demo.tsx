import { Card, CardContent } from "@/components/ui/card";
import { Upload, Wand2, Eye, Download } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Your Episode",
    description:
      "Drop your podcast audio or video file. Supports MP3, MP4, WAV – up to 3 hours per episode.",
  },
  {
    number: "02",
    icon: Wand2,
    title: "AI Analyzes & Generates",
    description:
      "Our FIRE-tuned AI identifies the best moments, extracts key insights, and creates multiple content formats in minutes.",
  },
  {
    number: "03",
    icon: Eye,
    title: "Preview & Tweak",
    description:
      "Review all generated clips and posts. Edit text, adjust timestamps, or regenerate with one click.",
  },
  {
    number: "04",
    icon: Download,
    title: "Export or Schedule",
    description:
      "Download all assets or schedule directly to social platforms. Custom branding, captions, and hashtags included.",
  },
];

export function Demo() {
  return (
    <section id="demo" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            From Episode to Viral Clip in{" "}
            <span className="text-accent-500">Minutes</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Four simple steps. Zero manual editing. Maximum reach.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-primary-800 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-800 to-accent-500 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono text-gray-400">
                          {step.number}
                        </span>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-4">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-white/20 dark:bg-black/20 flex items-center justify-center mx-auto mb-4">
                    <Wand2 className="w-10 h-10 text-primary-800 dark:text-primary-300" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Demo Screenshot Placeholder
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Dashboard Interface
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-accent-100 to-primary-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center p-4">
                  <p className="text-xs text-center text-gray-600 dark:text-gray-300">
                    Clip Preview
                  </p>
                </div>
              </Card>
              <Card className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center p-4">
                  <p className="text-xs text-center text-gray-600 dark:text-gray-300">
                    Social Post
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
