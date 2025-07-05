import { getAllBlogPosts } from "@/lib/blogs";
import Link from "next/link";

export default async function BlogsContent() {
  const blogPosts = getAllBlogPosts();

  return (
    <section
      id="blogs-content"
      className="pb-20  pt-5 relative max-auto px-4"
      aria-label="Blog content"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-20 opacity-100 translate-y-0">
          <span className="text-3xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Blogs.read()
            </span>
          </span>
          <div
            className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"
            aria-hidden="true"
          ></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sharing knowledge and insights from {blogPosts.length}+ articles on
            web development, architecture, and cutting-edge technologies.
          </p>
        </header>

        <section aria-labelledby="blog-posts-heading">
          <h2
            id="blog-posts-heading"
            className="text-2xl md:text-3xl font-bold mb-8 text-white"
          >
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden hover:border-cyan-400 transition-all"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <Link
                  href={`/blogs/${post.slug}`}
                  className="block"
                  itemProp="url"
                >
                  <div className="p-6">
                    <h3
                      className="text-xl font-bold text-white mb-2"
                      itemProp="headline"
                    >
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4" itemProp="description">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-cyan-400">
                      <time dateTime={post.date} itemProp="datePublished">
                        {post.formattedDate}
                      </time>
                      <span className="mx-2">•</span>
                      <span itemProp="timeRequired">
                        {post.readingTime} read
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
