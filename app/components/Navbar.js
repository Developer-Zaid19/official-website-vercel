"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home",    href: "/" },
  { name: "Blogs",   href: "/blogs" },
  { name: "Notes",   href: "/notes" },
  { name: "About",   href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname  = usePathname();
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled
        ? "bg-[rgba(8,14,26,0.90)] backdrop-blur-xl border-b border-[var(--border)] shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
        : "bg-(--bg) border-b border-(--border)"
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-bold text-xl text-(--maincolor) h3logo group-hover:glow-text transition-all duration-300">
            &lt;DeveloperZaid/&gt;
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.name}
                href={l.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive
                    ? "text-(--maincolor) bg-[rgba(0,188,255,0.08)]"
                    : "text-(--text-muted) hover:text-(--maincolor) hover:bg-[rgba(0,188,255,0.06)]"
                }`}
              >
                {l.name}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-(--maincolor)" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-(--maincolor) p-2 rounded-lg hover:bg-[rgba(0,188,255,0.08)] transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ${
        isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="px-4 pb-5 pt-1 flex flex-col gap-1 bg-[rgba(8,14,26,0.97)] border-t border-(--border)">
          {navLinks.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.name}
                href={l.href}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-(--maincolor) bg-[rgba(0,188,255,0.08)]"
                    : "text-(--text-muted) hover:text-(--maincolor) hover:bg-[rgba(0,188,255,0.06)]"
                }`}
              >
                {l.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}