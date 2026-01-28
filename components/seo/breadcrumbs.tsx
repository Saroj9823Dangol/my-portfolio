"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { generateBreadcrumbSchema } from "@/lib/seo/schema";
import { StructuredData } from "./structured-data";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.sarojdangol012.com.np" },
    ...items,
  ];

  const schema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      <StructuredData data={schema} />
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center space-x-2 text-sm ${className}`}
      >
        <Link
          href="/"
          className="flex items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <Home className="h-4 w-4" />
          <span className="sr-only">Home</span>
        </Link>

        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            {index === items.length - 1 ? (
              <span className="font-medium text-primary">{item.name}</span>
            ) : (
              <Link
                href={item.url}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
