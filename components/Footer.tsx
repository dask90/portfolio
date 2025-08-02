import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-2 md:mb-0">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="/" className="hover:text-amber-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-amber-400 transition">
            About
          </Link>
          <Link href="/projects" className="hover:text-amber-400 transition">
            Projects
          </Link>
          <Link href="/blog" className="hover:text-amber-400 transition">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-amber-400 transition">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
