import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-display text-6xl text-foreground mb-4">404</h1>
        <h2 className="font-display text-2xl text-moon-gray mb-4">
          Blog Post Not Found
        </h2>
        <p className="font-body text-muted-foreground mb-8">
          The blog post you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/blogs">
          <button className="px-6 py-3 bg-moon-gray/20 text-moon-gray font-terminal text-sm rounded-lg hover:bg-moon-gray/30 transition-colors">
            Back to Blog
          </button>
        </Link>
      </div>
    </div>
  );
}
