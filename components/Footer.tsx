import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-panel">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-sm tracking-wide text-text">
              OPULENTIA <span className="text-amber">DIGITAL</span>
            </p>
            <p className="mt-1 text-xs text-text-dim">CORE HORIZON</p>
            <p className="mt-3 text-xs text-text-dim">Registration RC-9802444</p>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold tracking-wide text-text-dim">COMPANY</p>
            <ul className="space-y-2 text-sm text-text-dim">
              <li><Link href="/about" className="hover:text-amber">About</Link></li>
              <li><Link href="/careers" className="hover:text-amber">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-amber">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold tracking-wide text-text-dim">PLATFORM</p>
            <ul className="space-y-2 text-sm text-text-dim">
              <li><Link href="/services" className="hover:text-amber">Solutions</Link></li>
              <li><Link href="/blog" className="hover:text-amber">Insights</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold tracking-wide text-text-dim">INTELLIGENCE</p>
            <ul className="space-y-2 text-sm text-text-dim">
              <li><Link href="/news" className="hover:text-amber">Tech News Hub</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-xs text-text-dim">
          © {new Date().getFullYear()} Opulentia Digital Core Horizon (RC-9802444). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
