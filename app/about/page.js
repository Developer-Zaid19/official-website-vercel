"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { number: "2025",     label: "Started",           icon: "🚀" },
  { number: "20+",      label: "Blogs Published",   icon: "📘" },
  { number: "YouTube",  label: "Primary Platform",  icon: "🎥" },
  { number: "Free",     label: "All Resources",     icon: "🎁" },
];

const values = [
  { icon: "🎯", title: "No Hype",        desc: "No fake motivation or clickbait. Just real, honest learning content." },
  { icon: "🧩", title: "Simple First",   desc: "Concepts explained in the simplest way possible — for true beginners." },
  { icon: "⚡", title: "Practical",      desc: "Every blog and note is focused on things you can actually use." },
  { icon: "💸", title: "Always Free",    desc: "All notes, blogs and resources are completely free — no paywalls." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">

      {/* ════════════════════════════
          HERO
      ════════════════════════════ */}
      <section className="relative py-24 px-4 text-center grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,188,255,0.09),transparent)] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="sec-label mb-4"
          >
            ✦ Who Am I
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            About{" "}
            <span className="gradient-text">
              {process.env.NEXT_PUBLIC_NAME ?? "DeveloperZaid"}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base sm:text-lg text-(--text-muted) leading-relaxed max-w-2xl mx-auto"
          >
            I'm a learner who explains programming and tech in{" "}
            <span className="text-(--maincolor) font-semibold">simple and practical</span>{" "}
            language — for beginners, without the hype.
          </motion.p>
        </div>
      </section>

      <div className="divider" />

      {/* ════════════════════════════
          MISSION
      ════════════════════════════ */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="sec-label mb-3">Why This Exists</p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              My <span className="gradient-text">Mission</span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="glass rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto"
          >
            <p className="text-4xl mb-6">🎯</p>
            <p className="text-base sm:text-lg text-(--text-muted) leading-relaxed">
              My mission is to break down complex programming concepts into easy language —
              so that beginners feel{" "}
              <span className="text-(--maincolor) font-semibold">confident</span>{" "}
              instead of{" "}
              <span className="text-red-400 font-semibold">confused</span>.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="divider" />

      {/* ════════════════════════════
          STORY
      ════════════════════════════ */}
      <section className="py-20 px-4 bg-(--bgt)">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="sec-label mb-3">How It Started</p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              My <span className="gradient-text">Story</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="glass rounded-2xl p-7 sm:p-9"
            >
              <span className="text-3xl mb-5 block">💡</span>
              <h3 className="text-lg font-bold text-(--maincolor) mb-3">The Problem I Saw</h3>
              <p className="text-sm sm:text-base text-(--text-muted) leading-relaxed">
                {process.env.NEXT_PUBLIC_NAME ?? "DeveloperZaid"} was started in 2025, when I realized that
                learning resources for beginners were either too complex or completely surface-level.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass rounded-2xl p-7 sm:p-9"
            >
              <span className="text-3xl mb-5 block">🛠️</span>
              <h3 className="text-lg font-bold text-(--maincolor) mb-3">What I Built</h3>
              <p className="text-sm sm:text-base text-(--text-muted) leading-relaxed">
                This platform is designed for those who want to learn — without pressure,
                without fake motivation, with just{" "}
                <span className="text-(--maincolor) font-semibold">real learning</span>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ════════════════════════════
          VALUES
      ════════════════════════════ */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="sec-label mb-3">What We Stand For</p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Core <span className="gradient-text">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-6 flex gap-5 items-start group hover:glow-border transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[rgba(0,188,255,0.08)] border border-(--border) flex items-center justify-center text-2xl flex-shrink-0 group-hover:border-(--maincolor) transition-all duration-300">
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-bold text-(--text) mb-1.5 group-hover:text-(--maincolor) transition-colors duration-300">
                    {v.title}
                  </h3>
                  <p className="text-sm text-(--text-muted) leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ════════════════════════════
          STATS
      ════════════════════════════ */}
      <section className="py-20 px-4 bg-(--bgt)">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="sec-label mb-3">At a Glance</p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Platform <span className="gradient-text">Growth</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-6 text-center group hover:glow-border transition-all duration-300"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="text-xl sm:text-2xl font-bold text-(--maincolor) glow-text mb-1">
                  {s.number}
                </div>
                <div className="text-xs text-(--text-muted) tracking-wide">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ════════════════════════════
          CTA
      ════════════════════════════ */}
      <section className="py-24 px-4 text-center">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="max-w-xl mx-auto glass rounded-2xl px-8 py-14"
        >
          <p className="text-4xl mb-5">🚀</p>
          <p className="sec-label mb-3">Ready to Start?</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-5">
            Join the <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-(--text-muted) text-sm leading-relaxed max-w-sm mx-auto mb-9">
            If you're on a learning journey and want genuine content — you've come to the right place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blogs"
              className="px-7 py-3 rounded-xl bg-(--maincolor) text-slate-950 font-bold text-sm hover:shadow-[0_0_25px_var(--mainglow-strong)] hover:scale-105 transition-all duration-300"
            >
              Explore Blogs →
            </Link>
            <Link
              href="/notes"
              className="px-7 py-3 rounded-xl border border-(--border) text-(--text-muted) font-medium text-sm hover:border-(--maincolor) hover:text-(--maincolor) hover:bg-[rgba(0,188,255,0.05)] transition-all duration-300"
            >
              Download Notes
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
}