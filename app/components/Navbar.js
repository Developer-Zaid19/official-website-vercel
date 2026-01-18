"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const pathname = usePathname();


    const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blogs", href: "/blogs" },
    { name: "Notes", href: "/notes" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="flex justify-between items-center px-3.5 py-5 border-b-2 border-b-gray-800 bg-(--bg)">
      <h3 className="text-(--hadding) font-bold text-3xl h3logo">&lt;DeveloperZaid/&gt;</h3>

      <div className="flex md:gap-7 gap-2 text-(--text) ">
        {navLinks.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.name}
                href={l.href}
                className={`relative inline-block font-semibold ${isActive
                  ? "text-(--hadding) after:block after:w-full after:h-0.5 after:bg-(--hadding) after:absolute after:-bottom-1 after:left-0"
                  : "text-white hover:text-(--hadding)"
                  }`}
              >
                {l.name}
              </Link>
            );
          })}
      </div>
    </nav>
  );
}

