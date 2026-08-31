import Image from "next/image";
import Link from "next/link";
import NewsTicker from "@/components/NewsTicker";
import { products } from "@/lib/products";
import { fetchTechNews } from "@/lib/news";

export default async function Home() {
  const news = await fetchTechNews(4);

  return (
    <main>
      <NewsTicker />

      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
        <Image
          src="/hero-datacenter.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/70 to-obsidian" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-amber">
            OPULENTIA DIGITAL CORE HORIZON · RC-9802444
          </p>
          <h1 className="font-display text-5xl leading-tight tracking-tight text-text sm:text-6xl md:text-7xl">
            ENTERPRISE AI
            <br />
            INTELLIGENCE
            <br />
            HORIZON
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-text-dim">
            AI orchestration, analytics, cloud infrastructure, and digital trust —
            engineered as one platform, built for organizations that need real
            operational readiness.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/services"
              className="rounded-sm bg-amber px-8 py-3 text-sm font-semibold tracking-wide text-obsidian transition hover:bg-amber-dim"
            >
              ACCESS CORE
            </Link>
            <Link
              href="/about"
              className="rounded-sm border border-border px-8 py-3 text-sm font-semibold tracking-wide text-text transition hover:border-amber hover:text-amber"
            >
              About the Company
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-amber">PLATFORM</p>
          <h2 className="mt-3 font-display text-3xl text-text sm:text-4xl">
            Four Products, One Core
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/services/${p.slug}`}
              className="group flex flex-col rounded-md border border-border bg-panel p-6 transition hover:border-amber"
            >
              <span className="text-3xl text-amber">{p.icon}</span>
              <h3 className="mt-4 font-display text-lg text-text">{p.name}</h3>
              <p className="mt-2 flex-1 text-sm text-text-dim">{p.summary}</p>
              <span className="mt-4 text-xs font-semibold tracking-wide text-amber group-hover:underline">
                Explore Details →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-panel py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-amber">BUILT FOR SCALE</p>
          <h2 className="mt-3 font-display text-3xl text-text sm:text-4xl">
            Engineering Excellence, Enterprise-Ready
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-text-dim">
            Our infrastructure is engineered to provide robust stability and full
            operational readiness for organizations requiring sophisticated
            intelligence solutions and secure cloud automation that integrates
            seamlessly with existing enterprise systems.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-amber">LIVE FEED</p>
            <h2 className="mt-3 font-display text-3xl text-text sm:text-4xl">
              Tech News Hub
            </h2>
          </div>
          <Link href="/news" className="text-sm font-semibold text-amber hover:underline">
            View all →
          </Link>
        </div>
        {news.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {news.map((n) => (
              <a
                key={n.id}
                href={n.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border bg-panel p-5 transition hover:border-amber"
              >
                <p className="text-xs font-semibold tracking-wide text-amber">{n.source}</p>
                <p className="mt-2 text-sm text-text">{n.title}</p>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-sm text-text-dim">Live feed temporarily unavailable — visit the News Hub directly.</p>
        )}
      </section>
    </main>
  );
}
