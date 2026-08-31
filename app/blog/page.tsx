import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata: Metadata = { title: "Insights — Opulentia Digital Core Horizon" };

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <p className="text-xs font-semibold tracking-[0.3em] text-amber">INSIGHTS</p>
      <h1 className="mt-3 font-display text-4xl text-text sm:text-5xl">
        Engineering &amp; Platform Notes
      </h1>
      <p className="mt-6 max-w-2xl text-base text-text-dim">
        Our own thinking on how we build — distinct from the live Tech News
        Hub, which tracks the wider industry.
      </p>

      <div className="mt-14 space-y-8">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="block rounded-md border border-border bg-panel p-8 transition hover:border-amber"
          >
            <h2 className="font-display text-xl text-text">{p.title}</h2>
            <p className="mt-3 text-sm text-text-dim">{p.excerpt}</p>
            <span className="mt-4 inline-block text-xs font-semibold tracking-wide text-amber">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
