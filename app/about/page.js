"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-(--bg)">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-(--hadding)"
        >
          About{" "}
          <span className="text-(--text)">
            {process.env.NEXT_PUBLIC_NAME}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-(--text) max-w-3xl mx-auto"
        >
          I&apos;m a learner who explains programming and tech in
          <span className="font-semibold text-(--focus)"> simple and practical </span>
          language — for beginners, without the hype.
        </motion.p>
      </section>

      <Divider />

      {/* MISSION */}
      <section className="py-16 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4 text-(--hadding)">My Mission</h2>
          <p className="text-(--text) text-lg leading-relaxed">
            My mission is to break down complex programming concepts into easy language—so that beginners feel confident instead of confused.
          </p>
        </div>
      </section>

      <Divider />

      {/* STORY */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-(--hadding)">My Story</h2>

        <p className="text-(--text) text-lg leading-relaxed mb-6">
          {process.env.NEXT_PUBLIC_NAME} was started in 2025, when I realized that learning resources for beginners were either too complex or completely surface-level.
        </p>

        <p className="text-(--text) text-lg leading-relaxed">
          This platform is designed for those who want to learn—without pressure, without fake motivation,
          with just real learning.
        </p>
      </section>

      <Divider />

      {/* STATS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-10 text-(--hadding)">Platform Growth</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "2025", label: "Started" },
              { number: "Just Start", label: "Notes & Blogs" },
              { number: "YouTube", label: "Primary Platform" },
              { number: "Learning", label: "Focused" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-white/10 hover:border-(--border) transition"
              >
                <h3 className="text-2xl font-bold text-(--text)">
                  {item.number}
                </h3>
                <p className="text-(--hadding) mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-(--hadding)">Join the Journey</h2>

        <p className="text-(--text) text-lg max-w-2xl mx-auto mb-8">
          If you&apos;re on a learning journey,
          and want genuine content—
          then you&apos;ve come to the right place.
        </p>

        <div className="px-6 py-3 border-(--accent) rounded-full text-sm font-medium hover:opacity-90 transition">
          <Link href="./blogs" className="text-(--focus)">Explore Blogs</Link> & <Link href="./notes" className="text-(--focus)"> Notes</Link>
        </div>
      </section>
    </main>
  );
}

function Divider() {
  return (
    <div className="bg-gray-600/40 w-[95vw] h-px mx-auto rounded-full" />
  );
}
