import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Solutions" },
  { href: "/news", label: "News Hub" },
  { href: "/blog", label: "Insights" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-obsidian/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-source.png"
            alt="Opulentia Digital Core Horizon"
            width={36}
            height={19}
            className="h-8 w-auto"
            priority
          />
          <span className="font-display text-sm tracking-wide text-text">
            OPULENTIA <span className="text-amber">DIGITAL</span>
          </span>
        </Link>
        <nav className="hidden gap-7 text-sm text-text-dim md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition hover:text-amber">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-sm bg-amber px-4 py-2 text-xs font-semibold tracking-wide text-obsidian transition hover:bg-amber-dim"
        >
          ACCESS CORE
        </Link>
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-border px-6 py-2 text-xs text-text-dim md:hidden">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="whitespace-nowrap hover:text-amber">
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
