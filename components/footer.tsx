import Link from "next/link";
import { Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-800 to-accent-500 bg-clip-text text-transparent">
                FIRE Clip Machine
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 text-sm max-w-md">
              The specialized AI repurposer for personal finance and FIRE podcasters.
              Turn episodes into compliant, viral clips automatically.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">
              Product
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#features"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#demo"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors"
                >
                  Demo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-800 dark:hover:text-primary-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2026 FIRE Clip Machine. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-800 dark:hover:text-primary-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-800 dark:hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
