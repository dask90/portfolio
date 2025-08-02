"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
//import ThemeToggle from "./ThemeToggle";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

const middleNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black z-50">
      <div className="px-4 py-7 flex items-center justify-between relative w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-bold text-white">Dave</div>

        {/* Center Nav */}
        <div className="hidden md:flex gap-8 mx-auto">
          {middleNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition duration-300 hover:text-amber-300 ${
                pathname === item.href
                  ? "text-amber-300 font-semibold"
                  : "text-gray-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:flex items-center gap-2 bg-amber-300 text-black px-4 py-2 rounded hover:bg-amber-400 transition"
          >
            Contact <ArrowRight size={16} />
          </Link>

          <button
            className="md:hidden text-gray-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-700 px-4 pb-4">
          <div className="flex flex-col gap-4 mt-4">
            {middleNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`transition duration-300 hover:text-amber-300 text-sm ${
                  pathname === item.href
                    ? "text-amber-300 font-semibold"
                    : "text-gray-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-sm bg-amber-300 text-black px-5 py-3 rounded-full hover:bg-amber-400 transition w-fit"
            >
              Contact <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
