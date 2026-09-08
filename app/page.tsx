import { paradoxes } from "../content/paradoxes";
import ParadoxCard from "../components/ParadoxCard";

export default function HomePage() {
  return (
    <div className="grid gap-16">
      <section className="grid gap-8 border border-ink p-6 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.35em]">
            Exhibit A / Do Not Trust Intuition
          </p>

          <h1 className="mt-4 max-w-[68ch] text-4xl leading-tight md:text-6xl">
            The Paradox Engine
          </h1>

          <p className="mt-6 max-w-[60ch] text-lg">
            A small museum where mathematics is allowed to be rude. Every
            exhibit is interactive, and none of them care about your comfort.
          </p>
        </div>

        <div className="border border-ink p-5 font-mono text-sm leading-7">
          <p>Rules:</p>
          <ol className="mt-3 list-decimal pl-5">
            <li>Click carefully.</li>
            <li>If an exhibit says impossible, it is probably right.</li>
            <li>No SaaS. No gradients. No fake metrics.</li>
          </ol>
        </div>
      </section>

      <section className="border border-ink">
        {paradoxes.map((paradox, index) => (
          <ParadoxCard key={paradox.slug} index={index + 1} {...paradox} />
        ))}
      </section>
    </div>
  );
}
