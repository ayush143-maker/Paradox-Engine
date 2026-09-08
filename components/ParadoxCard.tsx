import Link from "next/link";
import type { Paradox } from "../content/paradoxes";

type Props = {
  index: number;
} & Paradox;

export default function ParadoxCard({
  index,
  title,
  tag,
  statement,
  href,
  status,
}: Props) {
  const inner = (
    <>
      <div className="grid gap-1 font-mono text-xs uppercase tracking-[0.2em] opacity-70">
        <span>Exhibit {String(index).padStart(2, "0")}</span>
        <span>{tag}</span>
      </div>

      <h2 className="mt-4 text-2xl">{title}</h2>

      <p className="mt-3 max-w-[70ch]">{statement}</p>

      <div className="mt-6 font-mono text-xs uppercase">
        {status === "live" ? "Enter exhibit" : "Sealed for safety"}
      </div>
    </>
  );

  if (status === "live" && href) {
    return (
      <Link
        href={href}
        className="group block border-b border-ink p-6 transition-colors last:border-b-0 hover:bg-ink hover:text-paper"
      >
        {inner}
      </Link>
    );
  }

  return (
    <div className="border-b border-ink p-6 opacity-40 last:border-b-0">
      {inner}
    </div>
  );
}
