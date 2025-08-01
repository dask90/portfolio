import Link from "next/link";
import HeroSection from "@/components/HeroSection";

export default function BlogPage() {
  return (
    <>
      <HeroSection title="Blog" backgroundImage="/image/allhero.jpg" />

      {/* Blog Posts Section */}
      <section className="pl-20  py-12">
        <h1 className="text-2xlfont-bold  mb-8 text-black">
          Come with me on my Dev Journey
        </h1>
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-amber-300">
              Learning TypeScript
            </h2>
            <p className="text-black mt-2">
              TypeScript has completely changed the way I write JavaScript. At
              first, the types felt like extra work—but once I got the hang of
              it, everything just clicked. It makes my code cleaner, easier to
              understand, and way less buggy.
            </p>
            <Link
              href="/blog/learning-typescript"
              className="text-amber-300 hover:text-amber-500 mt-2 inline-block"
            >
              Read More →
            </Link>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-300">
              Mastering Tailwind CSS
            </h2>
            <p className="text-black mt-2">
              Tailwind CSS made me rethink how I style components. Instead of
              jumping between files, I now build everything right in the markup.
              It felt weird at first, but now its faster, more consistent, and
              honestly kind of addictive.
            </p>
            <Link
              href="/blog/mastering-tailwind-css"
              className="text-amber-300 hover:text-amber-500 mt-2 inline-block"
            >
              Read More →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
