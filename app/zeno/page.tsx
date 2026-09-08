import Link from "next/link";
import ZenoMachine from "../../components/ZenoMachine";

export default function ZenoPage() {
  return (
    <div className="grid gap-10">
      <div className="border border-ink p-6">
        <Link href="/" className="font-mono text-xs uppercase">
          Back to index
        </Link>

        <h1 className="mt-6 text-4xl">Zeno's Half-Click Machine</h1>

        <p className="mt-4 max-w-[75ch]">
          To finish the race, you must first cover half the distance. Then
          half of what remains. Then half of that. The button is right there.
          Mathematics disagrees.
        </p>
      </div>

      <ZenoMachine />

      <div className="border border-ink p-6 font-mono text-sm leading-7">
        <p>Curator's note:</p>
        <p className="mt-2 opacity-80">
          If the interface feels broken, good. It is not broken. It is honest.
        </p>
      </div>
    </div>
  );
}
