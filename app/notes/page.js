"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Loader from "../components/Loader";

// Category ke hisaab se emoji
const categoryIcon = (cat = "") => {
  const c = cat.toLowerCase();
  if (c.includes("python"))     return "🐍";
  if (c.includes("javascript") || c.includes("js")) return "⚡";
  if (c.includes("react"))      return "⚛️";
  if (c.includes("next"))       return "▲";
  if (c.includes("css"))        return "🎨";
  if (c.includes("html"))       return "🌐";
  if (c.includes("git"))        return "🔧";
  if (c.includes("data"))       return "📊";
  if (c.includes("c++") || c.includes("cpp") || c.includes("c/c")) return "⚙️";
  return "📄";
};

export default function NotesPage() {
  const [notes,   setNotes]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(false);
  const [filter,  setFilter]  = useState("All");

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch(
          "https://devzaidbackend.onrender.com/api/content/notes",
          { cache: "no-store" }
        );
        if (!res.ok) { setError(true); return; }
        const data = await res.json();
        setNotes(data);
      } catch (err) {
        console.error("Error fetching notes:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  // Unique categories for filter
  const categories = ["All", ...new Set(notes.map((n) => n.category).filter(Boolean))];

  const filtered = filter === "All"
    ? notes
    : notes.filter((n) => n.category === filter);

  return (
    <main className="min-h-screen px-4 py-14">
      <div className="max-w-5xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="sec-label mb-3">Free Resources</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Notes & <span className="gradient-text">Cheatsheets</span>
          </h1>
          <p className="text-(--text-muted) text-base max-w-xl leading-relaxed">
            Free PDF notes on programming and coding that support my YouTube videos. Download and keep them forever!
          </p>
        </motion.div>

        <div className="divider mb-10" />

        {/* ── Loading ── */}
        {loading && (
          <div className="min-h-[50vh] flex items-center justify-center">
            <Loader />
          </div>
        )}

        {/* ── Error ── */}
        {!loading && error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass rounded-2xl p-12 text-center"
          >
            <p className="text-4xl mb-4">📡</p>
            <h2 className="text-xl font-bold text-(--maincolor) mb-2">Could not load notes</h2>
            <p className="text-(--text-muted) text-sm mb-6">
              Server might be starting up. Please try again in a moment.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 rounded-xl bg-(--maincolor) text-slate-950 font-bold text-sm hover:shadow-[0_0_20px_var(--mainglow-strong)] transition-all"
            >
              Try Again
            </button>
          </motion.div>
        )}

        {/* ── Content ── */}
        {!loading && !error && (
          <>
            {/* Category Filter */}
            {categories.length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-2 mb-10"
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                      filter === cat
                        ? "bg-(--maincolor) text-slate-950 shadow-[0_0_16px_var(--mainglow)]"
                        : "glass text-(--text-muted) hover:border-(--maincolor) hover:text-(--maincolor)"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </motion.div>
            )}

            {/* Empty */}
            {filtered.length === 0 && (
              <div className="glass rounded-2xl p-12 text-center">
                <p className="text-4xl mb-4">📭</p>
                <p className="text-(--text-muted)">No notes found in this category.</p>
              </div>
            )}

            {/* Notes Grid */}
            <div className="grid gap-5 sm:grid-cols-2">
              {filtered.map((note, i) => (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="glass rounded-2xl p-6 group hover:glow-border transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Top */}
                  <div>
                    {/* Icon + Category */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[rgba(0,188,255,0.08)] border border-(--border) flex items-center justify-center text-2xl flex-shrink-0 group-hover:border-(--maincolor) transition-all duration-300">
                        {categoryIcon(note.category)}
                      </div>
                      {note.category && (
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[rgba(0,188,255,0.08)] text-(--maincolor) tracking-wide">
                          {note.category}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-(--text) mb-2 group-hover:text-(--maincolor) transition-colors duration-300 leading-snug">
                      {note.title}
                    </h3>

                    {note.description && (
                      <p className="text-sm text-(--text-muted) leading-relaxed line-clamp-2">
                        {note.description}
                      </p>
                    )}
                  </div>

                  {/* Download Button */}
                  <div className="mt-6 pt-4 border-t border-(--border)">
                    <a
                      href={`/notes/${note.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-(--maincolor) text-slate-950 font-bold text-sm hover:shadow-[0_0_20px_var(--mainglow-strong)] hover:scale-[1.02] transition-all duration-300"
                    >
                      📄 Download PDF
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats bottom */}
            {notes.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 text-center text-xs text-(--text-muted)"
              >
                {filtered.length} note{filtered.length !== 1 ? "s" : ""} available
                {filter !== "All" && ` in "${filter}"`}
              </motion.div>
            )}
          </>
        )}

      </div>
    </main>
  );
}