import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FIRE Clip Machine – AI Repurposing for Personal Finance Podcasters",
  description:
    "Turn your FIRE podcast episodes into compliant, viral clips automatically. Built for personal finance creators with AI-powered compliance guardrails.",
  keywords: [
    "FIRE",
    "personal finance",
    "podcast repurposing",
    "AI content creation",
    "compliance",
    "social media clips",
  ],
  authors: [{ name: "FIRE Clip Machine" }],
  openGraph: {
    title: "FIRE Clip Machine – AI Repurposing for Personal Finance Podcasters",
    description:
      "Turn your FIRE podcast episodes into compliant, viral clips automatically.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicons/manifest.json" />
      </head>
      <body className={inter.className}>
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
