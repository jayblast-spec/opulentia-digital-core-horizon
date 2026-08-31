import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";

export const metadata: Metadata = { title: "Solutions — Opulentia Digital Core Horizon" };

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-xs font-semibold tracking-[0.3em] text-amber">SOLUTIONS</p>
      <h1 className="mt-3 font-display text-4xl text-text sm:text-5xl">The Core Platform</h1>
      <p className="mt-6 max-w-2xl text-base text-text-dim">
        Four products, engineered to work together or stand alone: AI
        orchestration, analytics, cloud infrastructure, and digital trust.
      </p>

      <div className="mt-16 space-y-6">
        {products.map((p) => (
          <Link
            key={p.slug}
            href={`/services/${p.slug}`}
            className="group flex flex-col justify-between gap-4 rounded-md border border-border bg-panel p-8 transition hover:border-amber sm:flex-row sm:items-center"
          >
            <div className="flex items-start gap-5">
              <span className="text-4xl text-amber">{p.icon}</span>
              <div>
                <h2 className="font-display text-xl text-text">{p.name}</h2>
                <p className="mt-1 text-sm text-text-dim">{p.tagline}</p>
              </div>
            </div>
            <span className="text-sm font-semibold tracking-wide text-amber group-hover:underline">
              Explore Details →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
