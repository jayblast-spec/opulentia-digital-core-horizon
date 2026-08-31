import type { Metadata } from "next";

export const metadata: Metadata = { title: "About — Opulentia Digital Core Horizon" };

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <p className="text-xs font-semibold tracking-[0.3em] text-amber">ABOUT</p>
      <h1 className="mt-3 font-display text-4xl text-text sm:text-5xl">
        Opulentia Digital Core Horizon
      </h1>
      <p className="mt-2 text-sm text-text-dim">Registration RC-9802444</p>

      <div className="mt-10 space-y-6 text-base leading-relaxed text-text-dim">
        <p>
          Opulentia Digital Core Horizon is an enterprise technology company
          building AI orchestration, analytics, cloud infrastructure, and
          digital trust tooling as a single, coherent platform — engineered for
          organizations that need real operational readiness, not a demo.
        </p>
        <p>
          We are early. This site does not claim scale, deployments, or user
          counts we have not earned yet. What we do claim is engineering
          discipline: every product is built with explainability, security,
          and auditability as defaults, not afterthoughts.
        </p>
        <p>
          Alongside our platform, we run a live technology news hub —
          because staying informed on the pace of change in enterprise AI is
          part of how we build responsibly.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {[
          { title: "Engineering-first", body: "Capability and readiness before claims of scale." },
          { title: "Security by default", body: "Access control, encryption, and audit logging built in from day one." },
          { title: "Honest positioning", body: "No fabricated metrics, no invented deployments — ever." },
        ].map((v) => (
          <div key={v.title} className="rounded-md border border-border bg-panel p-6">
            <h3 className="font-display text-base text-text">{v.title}</h3>
            <p className="mt-2 text-sm text-text-dim">{v.body}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
