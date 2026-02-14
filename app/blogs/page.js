"use client"
import Link from "next/link";
import React from "react";
import { useEffect, useState} from "react";
import Loader from "../components/Loader";

export default function BlogsPagez() {

  const [fetchedblog, setfetchedblog] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const availableblogs = async () => {
      try {
        
        const res = await fetch(`https://devzaidbackend.onrender.com/api/content/blogs`, {
          cache: "no-store",
        });
        
        if (!res.ok){
          setLoading(false)
          return 
        } 
        const data = await res.json();
        setfetchedblog(data)
      } catch (error) {
        console.log("Error fetching blogs:", error)
      } finally {
      setLoading(false)
    }
    }

availableblogs()
  }, [])

if (!fetchedblog) return;
  return (
    <main className="min-h-screen bg-(--bg) px-4 py-12">
      {loading? <div class="min-h-[70vh] flex items-center justify-center">
    <Loader />
</div>
:
      <section className="max-w-5xl mx-auto">

        {/* Page Heading */}
        <h1 className="text-3xl font-bold text-(--maincolor) mb-4">
          Blogs
        </h1>

        <p className="text-(--text) mb-10 max-w-3xl">
          Here I write simple, beginner-friendly blogs about programming and tech—without the unnecessary theory.
        </p>

        {/* Blog List */}
        
        <div className="space-y-6">
          {fetchedblog.map((blog) => (
            <div
              key={blog.id}
              className="border border-(--border) rounded-xl p-6 bg-linear-to-br from-slate-950 to-slate-900 hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold text-(--maincolor) mb-2">
                {blog.title}
              </h2>

              <p className="text-(--text) mb-4">
                {blog.description}
              </p>

              <Link
                href={`/blogs/${blog.id}`}
                className="inline-block text-sm font-medium text-(--focus) hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
        

      </section>
      }
    </main>
  );
}
