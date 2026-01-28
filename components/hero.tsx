"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-accent-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10" />

      <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block">Turn Your FIRE Podcast</span>
              <span className="block">Episodes into</span>
              <span className="block bg-gradient-to-r from-primary-800 to-accent-500 bg-clip-text text-transparent">
                Compliant, Viral Clips
              </span>
              <span className="block">Automatically</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Built for personal finance creators. Get authoritative shorts, X threads,
            LinkedIn carousels, and quote graphics with built-in compliance guardrails –
            no hype, no manual editing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/signup">
              <Button size="xl" className="bg-primary-800 hover:bg-primary-700 text-white">
                Start 14-Day Free Trial
              </Button>
            </Link>
            <Button size="xl" variant="outline">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          <div className="pt-8">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Trusted by FIRE creators
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap opacity-60 grayscale">
              <div className="text-gray-400 font-semibold">ChooseFI</div>
              <div className="text-gray-400 font-semibold">BiggerPockets</div>
              <div className="text-gray-400 font-semibold">Afford Anything</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
