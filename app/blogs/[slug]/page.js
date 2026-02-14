"use client";
import Link from "next/link";
import React from "react";
import Loader from "../../components/Loader";
import { useEffect, useState} from "react";

export default function Blogslug({params}) {

  
  const [fetchedblog, setfetchedblog] = useState({})
    const [loading, setLoading] = useState(true)
  

  useEffect(() => {
    const availableblogs = async () => {
      try {
        
        const {slug} = await params;
        const res = await fetch(`https://devzaidbackend.onrender.com/api/content/blogs/${slug}`, {
          cache: "no-store",
        });
        
        if (!res.ok){
          setLoading(false)
          return 
        } 
        const data = await res.json();
        setfetchedblog(data)
      } catch (error) {
        console.log("Error fetching blog:", error)
      } finally {
      setLoading(false)
    } 
    }

availableblogs()
  }, [params])

  if (!fetchedblog) {
    return (
      <main className="min-h-screen bg-(--bg) flex items-center justify-center px-4">
         
        <div className="text-center">
          <h1 className="text-2xl font-bold text-(--maincolor) mb-2">
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
      {loading? <div className="min-h-[70vh] flex items-center justify-center">
    <Loader />
</div>
:
      <article className="max-w-3xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-(--maincolor) mb-3">
          {fetchedblog.title}
        </h1>

        {/* Date */}
        {fetchedblog.date && (
          <p className="text-sm text-(--focus) mb-8">
            {fetchedblog.date}
          </p>
        )}

        {/* Content */}
        <div className='space-y-4'>

        
        <div className="prose prose-slate max-w-none text-(--text)">
          {fetchedblog.content}
        </div>
        <div className="prose prose-slate max-w-none my-6 md:my-0 text-(--text)">
          {fetchedblog.para1}
        </div>
        <div className="prose prose-slate max-w-none text-(--text)">
          {fetchedblog.para2}
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

      </article> }
    </main>
  );
}
