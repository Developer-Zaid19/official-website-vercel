import blogs from "../../content/blog.json";
import Link from "next/link";

export default function BlogDetail({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return (
      <main className="min-h-screen bg-(--bg) flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-(--hadding) mb-2">
            Blog not found
          </h1>
          <p className="text-(--err) mb-4">
            Perhaps this blog does not exist or has been removed.
          </p>
          <Link
            href="/blogs"
            className="text-(--focus) underline"
          >
            ← Back to Blogs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-(--bg) md:bg-linear-to-br from-slate-950 to-slate-900 px-4 py-12">
      <article className="max-w-3xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-(--hadding) mb-3">
          {blog.title}
        </h1>

        {/* Date */}
        {blog.date && (
          <p className="text-sm text-(--focus) mb-8">
            {blog.date}
          </p>
        )}

        {/* Content */}
        <div className='space-y-4'>

        
        <div className="prose prose-slate max-w-none text-(--text)">
          {blog.content}
        </div>
        <div className="prose prose-slate max-w-none my-6 md:my-0 text-(--text)">
          {blog.para1}
        </div>
        <div className="prose prose-slate max-w-none text-(--text)">
          {blog.para2}
        </div>
        </div>

        {/* Back link */}
        <div className="mt-12">
          <Link
            href="/blogs"
            className="text-(--focus) underline text-sm"
          >
            ← Back to all blogs
          </Link>
        </div>

      </article>
    </main>
  );
}
