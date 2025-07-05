"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, FileQuestion, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* 404 Icon and Number */}
        <div className="space-y-4">
          <div className="mx-auto w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center">
            <FileQuestion className="w-12 h-12 text-slate-600" />
          </div>
          <div className="space-y-2">
            <h1 className="text-8xl font-bold text-slate-800 tracking-tight">
              404
            </h1>
            <h2 className="text-2xl font-semibold text-slate-700">
              Page Not Found
            </h2>
            <p className="text-slate-600 max-w-md mx-auto">
              Sorry, we couldn't find the page you're looking for. It might have
              been moved, deleted, or you entered the wrong URL.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/">
              <Home className="w-4 h-4" />
              Go Home
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 bg-transparent"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="space-y-4">
          <h3 className="font-semibold text-slate-800">Popular Pages</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg mx-auto">
            <Link
              href="/about"
              className="text-sm text-slate-600 hover:text-slate-800 hover:underline transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm text-slate-600 hover:text-slate-800 hover:underline transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="text-sm text-slate-600 hover:text-slate-800 hover:underline transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/help"
              className="text-sm text-slate-600 hover:text-slate-800 hover:underline transition-colors"
            >
              Help Center
            </Link>
          </div>
        </div>

        {/* Footer Message */}
        <div className="pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500">
            If you believe this is an error, please{" "}
            <Link href="/contact" className="text-slate-700 hover:underline">
              contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
