import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Careers — Opulentia Digital Core Horizon" };

export default function CareersPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-xs font-semibold tracking-[0.3em] text-amber">CAREERS</p>
      <h1 className="mt-3 font-display text-4xl text-text sm:text-5xl">Build With Us</h1>
      <p className="mt-6 text-base leading-relaxed text-text-dim">
        Opulentia Digital Core Horizon is early-stage — we&apos;re not running
        open reqs yet. If you want to build enterprise AI orchestration,
        analytics, cloud infrastructure, or security tooling with a small,
        engineering-first team, reach out and tell us what you&apos;d want to
        work on.
      </p>
      <Link
        href="/contact"
        className="mt-10 inline-block rounded-sm bg-amber px-8 py-3 text-sm font-semibold tracking-wide text-obsidian transition hover:bg-amber-dim"
      >
        Get in Touch
      </Link>
    </main>
  );
}
