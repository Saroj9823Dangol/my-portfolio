import { notFound } from "next/navigation";
import Link from "next/link";
import BackgroundCanvas from "@/components/background-canvas";
import BlogsContent from "@/components/blogs/blogs-content";
import BlogsHero from "@/components/blogs/blogs-hero";
import ContactPortal from "@/components/contact-portal";
import DownloadCV from "@/components/DownloadCV";

interface BlogPageProps {
  searchParams: { page?: string };
}

const BlogPage = async ({ searchParams }: BlogPageProps) => {
  const page = parseInt(searchParams.page || "1", 10);
  const limit = 10;
  const skip = (page - 1) * limit;

  // Fetch products with caching
  const productsResponse = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    { cache: "force-cache" } // Cache the response
  );

  if (!productsResponse.ok) {
    notFound();
  }

  const data = await productsResponse.json();
  const products = data.products;
  const totalProducts = data.total; // DummyJSON provides total in the response
  const totalPages = Math.ceil(totalProducts / limit);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <BackgroundCanvas />
      <BlogsHero />
      <BlogsContent />
      <DownloadCV />
      <ContactPortal />

      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product: any) => (
            <div
              key={product.id}
              className="p-4 border border-gray-700 rounded-lg"
            >
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-300">${product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {totalPages > 1 && (
        <div className="flex justify-center gap-4 py-8 pagination">
          {page > 1 && (
            <Link href={`/blogs?page=${page - 1}`} prefetch={true}>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors">
                Previous
              </button>
            </Link>
          )}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNum) => (
                <Link
                  key={pageNum}
                  href={`/blogs?page=${pageNum}`}
                  prefetch={true}
                >
                  <button
                    className={`px-4 py-2 rounded ${
                      pageNum === page
                        ? "bg-blue-700 text-white"
                        : "bg-gray-700 text-white hover:bg-blue-500"
                    } transition-colors`}
                  >
                    {pageNum}
                  </button>
                </Link>
              )
            )}
          </div>
          {page < totalPages && (
            <Link href={`/blogs?page=${page + 1}`} prefetch={true}>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors">
                Next
              </button>
            </Link>
          )}
        </div>
      )}
    </main>
  );
};

export default BlogPage;
