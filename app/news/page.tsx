import type { Metadata } from "next";
import { fetchTechNews } from "@/lib/news";

export const metadata: Metadata = { title: "Tech News Hub — Opulentia Digital Core Horizon" };
export const revalidate = 300;

function timeAgo(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime();
  const hrs = Math.floor(diffMs / 3600000);
  if (hrs < 1) return "moments ago";
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

export default async function NewsPage() {
  const items = await fetchTechNews(30);

  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <p className="text-xs font-semibold tracking-[0.3em] text-amber">LIVE FEED</p>
      <h1 className="mt-3 font-display text-4xl text-text sm:text-5xl">Tech News Hub</h1>
      <p className="mt-6 max-w-2xl text-base text-text-dim">
        Live technology headlines, refreshed continuously. We link out to the
        original publisher for every story — this hub curates, it doesn&apos;t
        republish.
      </p>

      {items.length === 0 && (
        <p className="mt-10 text-sm text-text-dim">
          Live feed temporarily unavailable. Check back shortly.
        </p>
      )}

      <div className="mt-12 divide-y divide-border border-y border-border">
        {items.map((n) => (
          <a
            key={n.id}
            href={n.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-1 py-5 transition hover:bg-panel sm:flex-row sm:items-center sm:justify-between sm:px-4"
          >
            <div>
              <p className="text-base text-text">{n.title}</p>
              <p className="mt-1 text-xs text-text-dim">
                {n.source} · {timeAgo(n.createdAt)} · {n.points} points
              </p>
            </div>
            <span className="text-xs font-semibold tracking-wide text-amber">Read →</span>
          </a>
        ))}
      </div>
    </main>
  );
}
