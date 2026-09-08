import Link from "next/link";
import type { ReactNode } from "react";

export default function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-ink bg-paper">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link
            href="/"
            className="font-mono text-xs uppercase tracking-[0.35em]"
          >
            The Paradox Engine
          </Link>

          <nav className="flex items-center gap-4 font-mono text-xs uppercase">
            <Link href="/zeno" className="hover:underline underline-offset-4">
              Zeno
            </Link>
            <Link
              href="/monty-hall"
              className="hover:underline underline-offset-4"
            >
              Monty Hall
            </Link>
            <span className="opacity-40">Banach-Tarski [sealed]</span>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-14">{children}</main>

      <footer className="border-t border-ink">
        <div className="mx-auto max-w-6xl px-4 py-6 font-mono text-xs uppercase tracking-[0.2em] opacity-70">
          Built as an exhibit, not a SaaS. Do not deploy to production of
          reality.
        </div>
      </footer>
    </div>
  );
}
