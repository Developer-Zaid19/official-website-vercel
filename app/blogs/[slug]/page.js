import blogs from "../../content/blog.json";
import Link from "next/link";

export default function BlogDetail({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return (
      <main className="min-h-screen bg-(--bg) flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-(--text) mb-2">
            Blog not found
          </h1>
          <p className="text-(--sectext) mb-4">
            Perhaps this blog does not exist or has been removed.
          </p>
          <Link
            href="/blogs"
            className="text-blue-600 underline"
          >
            ← Back to Blogs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-(--bg) px-4 py-12">
      <article className="max-w-3xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-(--text) mb-3">
          {blog.title}
        </h1>

        {/* Date */}
        {blog.date && (
          <p className="text-sm text-(--sectext) mb-8">
            {blog.date}
          </p>
        )}

        {/* Content */}
        <div className='space-y-4'>

        
        <div className="prose prose-slate max-w-none">
          {blog.content}
        </div>
        <div className="prose prose-slate max-w-none ">
          {blog.para1}
        </div>
        <div className="prose prose-slate max-w-none">
          {blog.para2}
        </div>
        </div>

        {/* Back link */}
        <div className="mt-12">
          <Link
            href="/blogs"
            className="text-blue-600 underline text-sm"
          >
            ← Back to all blogs
          </Link>
        </div>

      </article>
    </main>
  );
}
