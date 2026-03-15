import React from "react";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa6";

const socials = [
  { icon: <FaYoutube />,   label: "YouTube",   href: "https://youtube.com/@Developer-zaid",              color: "hover:text-red-500",  hover: "hover:border-red-500" },
  { icon: <FaInstagram />, label: "Instagram",  href: "https://instagram.com/dvlprzaid",                  color: "hover:text-pink-500", hover: "hover:border-pink-500" },
  { icon: <FaLinkedin />,  label: "LinkedIn",   href: "https://www.linkedin.com/in/developer-zaid29",     color: "hover:text-blue-400", hover: "hover:border-blue-400" },
  { icon: <FaGithub />,    label: "GitHub",     href: "https://github.com/Developer-Zaid19",              color: "hover:text-gray-300", hover: "hover:border-gray-400" },
];

const quickLinks = [
  { name: "Home",    href: "/" },
  { name: "Blogs",   href: "/blogs" },
  { name: "Notes",   href: "/notes" },
  { name: "About",   href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-(--border) overflow-hidden">

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[160px] rounded-full bg-[radial-gradient(ellipse,rgba(0,188,255,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <span className="font-bold text-xl text-(--maincolor)">&lt;DeveloperZaid/&gt;</span>
            <p className="mt-3 text-sm text-(--text-muted) leading-relaxed max-w-xs">
              Learn programming in a simple and practical way. Blogs, notes, and tutorials for beginners.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  title={s.label}
                  className={`w-9 h-9 rounded-lg border border-(--border) flex items-center justify-center text-(--text-muted) text-base transition-all duration-300 ${s.color} ${s.hover}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[3px] text-(--maincolor) mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-sm text-(--text-muted) hover:text-(--maincolor) transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-(--border) group-hover:bg-(--maincolor) group-hover:w-6 transition-all duration-300" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[3px] text-(--maincolor) mb-5">
              What's Here
            </h3>
            <ul className="space-y-3 text-sm text-(--text-muted)">
              <li className="flex items-center gap-2"><span className="text-(--maincolor)">📘</span> Beginner-friendly blogs</li>
              <li className="flex items-center gap-2"><span className="text-(--maincolor)">📄</span> Free PDF & Cheatsheet Notes</li>
              <li className="flex items-center gap-2"><span className="text-(--maincolor)">🎥</span> YouTube video support</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="divider mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-(--text-muted)">
          <span>Made with <span className="text-red-400">♥</span> by DeveloperZaid</span>
          <span>© {new Date().getFullYear()} DeveloperZaid. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}