"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";

const features = [
  {
    icon: "📘",
    title: "Programming Blogs",
    desc: "Beginner-friendly blogs that explain concepts simply — no unnecessary theory, just practical knowledge.",
    href: "/blogs",
    cta: "Read Blogs",
  },
  {
    icon: "📄",
    title: "Free PDF Notes",
    desc: "Download free cheatsheets and PDF notes that I cover in my YouTube videos.",
    href: "/notes",
    cta: "Download Notes",
  },
  {
    icon: "🎥",
    title: "YouTube Videos",
    desc: "Extra explanations and tutorials for YouTube videos — everything in one place.",
    href: "https://youtube.com/@Developer-zaid",
    cta: "Watch Videos",
    external: true,
  },
];

const highlights = [
  { icon: "✅", text: "Blogs about solutions to real problems" },
  { icon: "✅", text: "PDFs that cover what I teach in videos" },
  { icon: "✅", text: "YouTube tutorials with deep dives" },
  { icon: "📘", text: "Beginner-friendly programming blogs" },
  { icon: "📄", text: "Free PDF and Cheatsheet Notes" },
  { icon: "🎥", text: "Extra explanations for YouTube videos" },
];

export default function HomePage() {
  const el = useRef(null);

  useEffect(() => {
    if (!el.current) return;
    const typed = new Typed(el.current, {
      strings: ["Simple", "Practical", "Beginner-Friendly"],
      typeSpeed: 50,
      backSpeed: 35,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <div className="overflow-x-hidden">

      {/* ════════════════════════════
          HERO
      ════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center grid-bg px-4 py-20 text-center overflow-hidden">

        {/* Radial spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,188,255,0.1),transparent)] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sec-label mb-5"
          >
            ✦ Programming Made Easy
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
          >
            Learn Programming
            <br />
            <span className="text-(--maincolor) glow-text" ref={el} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-(--text-muted) text-base sm:text-lg leading-relaxed max-w-xl mx-auto mt-6 mb-10"
          >
            I explain programming and technology in easy language. Simple blogs, free PDF notes, and YouTube tutorials — all in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            <Link
              href="/blogs"
              className="px-7 py-3 rounded-xl bg-(--maincolor) text-slate-950 font-bold text-sm hover:shadow-[0_0_25px_var(--mainglow-strong)] hover:scale-105 transition-all duration-300"
            >
              Read Blogs →
            </Link>
            <Link
              href="/notes"
              className="px-7 py-3 rounded-xl border border-(--border) text-(--text-muted) font-medium text-sm hover:border-(--maincolor) hover:text-(--maincolor) hover:bg-[rgba(0,188,255,0.05)] transition-all duration-300"
            >
              Download Notes
            </Link>
          </motion.div>

          {/* Floating stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 flex justify-center gap-10 flex-wrap"
          >
            {[
              { num: "20+", label: "Blogs" },
              { num: "Free", label: "PDF Notes" },
              { num: "YT", label: "Tutorials" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-(--maincolor) glow-text">{s.num}</div>
                <div className="text-xs text-(--text-muted) mt-1 tracking-wide">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ════════════════════════════
          FEATURE CARDS
      ════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="sec-label mb-3">What's Inside</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Everything You <span className="gradient-text">Need</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-7 flex flex-col justify-between group hover:glow-border transition-all duration-300"
            >
              <div>
                <div className="text-4xl mb-5">{f.icon}</div>
                <h3 className="text-lg font-bold text-(--text) mb-3 group-hover:text-(--maincolor) transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="text-sm text-(--text-muted) leading-relaxed">
                  {f.desc}
                </p>
              </div>
              <div className="mt-7">
                {f.external ? (
                  <a
                    href={f.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-(--maincolor) hover:glow-text transition-all duration-300"
                  >
                    {f.cta} <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                  </a>
                ) : (
                  <Link
                    href={f.href}
                    className="flex items-center gap-2 text-sm font-semibold text-(--maincolor) hover:glow-text transition-all duration-300"
                  >
                    {f.cta} <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* ════════════════════════════
          HIGHLIGHTS
      ════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6 bg-(--bgt)">
        <div className="max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="sec-label mb-3">Why Learn Here?</p>
            <h2 className="text-3xl font-bold">
              Simple. <span className="gradient-text">Practical.</span> Free.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="glass rounded-xl px-5 py-4 flex items-center gap-4 hover:glow-border transition-all duration-300"
              >
                <span className="text-xl flex-shrink-0">{h.icon}</span>
                <span className="text-sm text-(--text-muted)">{h.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════
          CTA BOTTOM
      ════════════════════════════ */}
      <section className="py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto glass rounded-2xl px-8 py-12"
        >
          <p className="sec-label mb-3">Ready to Start?</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Start Learning <span className="gradient-text">Today</span>
          </h2>
          <p className="text-(--text-muted) text-sm leading-relaxed mb-8">
            No complicated theory. Just simple, practical knowledge that actually helps you build things.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blogs"
              className="px-7 py-3 rounded-xl bg-(--maincolor) text-slate-950 font-bold text-sm hover:shadow-[0_0_25px_var(--mainglow-strong)] hover:scale-105 transition-all duration-300"
            >
              Browse Blogs →
            </Link>
            <Link
              href="/notes"
              className="px-7 py-3 rounded-xl border border-(--border) text-(--text-muted) font-medium text-sm hover:border-(--maincolor) hover:text-(--maincolor) hover:bg-[rgba(0,188,255,0.05)] transition-all duration-300"
            >
              Get Free Notes
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}