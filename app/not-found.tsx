"use client";

import { Button } from "@/components/ui/button";
import { FileQuestion, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen text-white bg-black flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* 404 Icon and Number */}
        <div className="space-y-4">
          <div className="mx-auto w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center">
            <FileQuestion className="w-12 h-12 " />
          </div>
          <div className="space-y-2">
            <h1 className="text-8xl font-bold tracking-tight">404</h1>
            <h2 className="text-2xl font-semibold ">Page Not Found</h2>
            <p className=" max-w-md mx-auto">
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
        </div>

        {/* Footer Message */}
        <div className="pt-8 border-t border-slate-200">
          <p className="text-sm text-white">
            If you believe this is an error, please{" "}
            <Link href="/#contact" className=" hover:underline">
              contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
