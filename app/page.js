"use client"
import Link from "next/link";
import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";


export default function HomePage() {
  const el = useRef(null);
  useEffect(() => {
    if (!el.current) return;
    const typed = new Typed(el.current, {
      strings: [
        "Simple",
        "Practical"
      ],
      typeSpeed: 40,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy(); // cleanup (important)
    };
  }, []);

  return (
    <main className=" px-4 py-8 bg-(--bg)">

      {/* HERO SECTION */}
      <section className="rounded-2xl bg-linear-to-br from-slate-950 to-slate-900 text-slate-100 px-6 py-16 text-center">

        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-(--text)">
          Learn Programming <br />
          <span className="text-(--maincolor) " ref={el}>

          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-(--text)">

          I explain programming and technology in easy language. Here you will find support material in the form of simple blogs, free PDF notes, and YouTube videos.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link
            href="/blogs"
            className="bg-(--maincolor) text-slate-950 px-6 py-3 rounded-lg font-semibold hover:bg-sky-300 transition"
          >
            Read Blogs
          </Link>

          <Link
            href="/notes"
            className="border border-slate-500 text-(--text) px-6 py-3 rounded-lg hover:bg-white/5 transition"
          >
            Download Notes
          </Link>
        </div>
      </section>

      {/* CONTENT BELOW HERO */}
      <div className='flex flex-col md:flex-row md:justify-around'>


        <section className="mt-14 px-auto border-2 border-(--border) rounded-2xl md:w-100 bg-linear-to-br from-slate-950 to-slate-900 text-slate-100">
          <h2 className="text-2xl font-semibold text-(--maincolor) w-full text-center mb-4 p-2">
            What you will find here?
          </h2>

          <ul className="space-y-2 text-(--text) m-3 w-full ">
            <li>📘 Beginner-friendly programming blogs.</li>
            <li>📄 Free PDF and CheatSheat Notes.</li>
            <li>🎥 Extra explanations for YouTube videos.</li>
          </ul>
        </section>
        <section className="mt-14 px-auto border-2 border-(--border) rounded-2xl md:w-100 bg-linear-to-br from-slate-950 to-slate-900 text-slate-100">
          <h2 className="text-2xl font-semibold text-(--maincolor) w-full text-center mb-4 p-2">

            What happened in these?
          </h2>

          <ul className="space-y-2 text-(--text) m-3 w-full ">
            <li>✅ Blogs about Solution of problems.</li>
            <li>✅ PDF&apos;s that I cover in Video.</li>
            <li>✅ Youtube Videos Are Tutorials.</li>
          </ul>
        </section>
      </div>

    </main>
  );
}
