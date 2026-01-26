"use client"
import React from "react";
import { useState, useEffect } from "react";

export default function NotesPage() {
    const [fetchednotes, setfetchednotes] = useState([])
  
    useEffect(() => {
      const availablenotes = async () => {
        const res = await fetch(`https://devzaidbackend.onrender.com/api/content/notes`, {
          cache: "no-store",
        });
  
        if (!res.ok) return 
        const data = await res.json();
       setfetchednotes(data)
      }
  
  availablenotes()
    }, [])
  
  if (!fetchednotes) return;
  return (
    <main className="min-h-screen bg-(--bg) px-4 py-12">
      <section className="max-w-5xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-(--hadding) mb-4">
          Notes and CheatSheats
        </h1>

        <p className="text-(--text) mb-10 max-w-3xl">
          Here you&apos;ll find free PDF notes on programming and coding that support my YouTube videos.
        </p>

        {/* Notes List */}
        <div className="grid gap-6 sm:grid-cols-2">
          {fetchednotes.map((note) => (
            <div
              key={note.id}
              className="border rounded-xl p-5 hover:shadow-md transition bg-linear-to-br from-slate-950 to-slate-900 border-(--border)"
            >
              <h3 className="text-lg font-semibold text-(--hadding) mb-1">
                {note.title}
              </h3>

              <p className="text-sm text-(--text) mb-4">
                Category: <span className="font-medium">{note.category}</span>
              </p>

              <a
                href={`https://devzaidbackend.onrender.com/notes/${note.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium text-(--focus) hover:underline"
              >
                📄 Download PDF
              </a>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}
