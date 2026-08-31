import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact — Opulentia Digital Core Horizon" };

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <p className="text-xs font-semibold tracking-[0.3em] text-amber">CONTACT</p>
      <h1 className="mt-3 font-display text-4xl text-text sm:text-5xl">Talk to the Team</h1>
      <p className="mt-6 text-base text-text-dim">
        Opulentia Digital Core Horizon (RC-9802444). For platform inquiries,
        partnership, or press, reach us using the form below.
      </p>

      <form
        action="mailto:hello@opulentia.digital"
        method="post"
        encType="text/plain"
        className="mt-12 space-y-6"
      >
        <div>
          <label className="text-xs font-semibold tracking-wide text-text-dim" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-2 w-full rounded-sm border border-border bg-panel px-4 py-3 text-sm text-text outline-none focus:border-amber"
          />
        </div>
        <div>
          <label className="text-xs font-semibold tracking-wide text-text-dim" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-sm border border-border bg-panel px-4 py-3 text-sm text-text outline-none focus:border-amber"
          />
        </div>
        <div>
          <label className="text-xs font-semibold tracking-wide text-text-dim" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-2 w-full rounded-sm border border-border bg-panel px-4 py-3 text-sm text-text outline-none focus:border-amber"
          />
        </div>
        <button
          type="submit"
          className="rounded-sm bg-amber px-8 py-3 text-sm font-semibold tracking-wide text-obsidian transition hover:bg-amber-dim"
        >
          Send Message
        </button>
        <p className="text-xs text-text-dim">
          This opens your email client — a wired form backend is coming as the
          domain and mailbox are finalized.
        </p>
      </form>
    </main>
  );
}
