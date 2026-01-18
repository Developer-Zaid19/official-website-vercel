import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      
      {/* HERO SECTION */}
      <section className="rounded-2xl bg-linear-to-br from-slate-950 to-slate-900 text-slate-100 px-6 py-16 text-center">
        
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Learn Programming <br />
          <span className="text-sky-400">
            Simple • Practical • Beginner Friendly
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-slate-300">
          
I explain programming and technology in easy language. Here you will find support material in the form of simple blogs, free PDF notes, and YouTube videos.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link
            href="/blogs"
            className="bg-sky-400 text-slate-950 px-6 py-3 rounded-lg font-semibold hover:bg-sky-300 transition"
          >
            Read Blogs
          </Link>

          <Link
            href="/notes"
            className="border border-slate-500 text-slate-100 px-6 py-3 rounded-lg hover:bg-white/5 transition"
          >
            Download Notes
          </Link>
        </div>
      </section>

      {/* CONTENT BELOW HERO */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          What you will find here?
        </h2>

        <ul className="space-y-2 text-slate-700">
          <li>📘 Beginner-friendly programming blogs</li>
          <li>📄 Free PDF notes for practice</li>
          <li>🎥 Extra explanations for YouTube videos</li>
        </ul>
      </section>

    </main>
  );
}
