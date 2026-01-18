import Link from "next/link";
import blogs from "./../content/blog.json";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-(--bg) px-4 py-12">
      <section className="max-w-5xl mx-auto">

        {/* Page Heading */}
        <h1 className="text-3xl font-bold text-(--text) mb-4">
          Blogs
        </h1>

        <p className="text-(--sectext) mb-10 max-w-3xl">
          Here I write simple, beginner-friendly blogs about programming and tech—without the unnecessary theory.
        </p>

        {/* Blog List */}
        <div className="space-y-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="border border-black/10 rounded-xl p-6 bg-white hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold text-(--text) mb-2">
                {blog.title}
              </h2>

              <p className="text-(--sectext) mb-4">
                {blog.description}
              </p>

              <Link
                href={`/blogs/${blog.slug}`}
                className="inline-block text-sm font-medium text-blue-600 hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}
