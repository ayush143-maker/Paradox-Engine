import Link from "next/link";
import MontyHallGame from "../../components/MontyHallGame";

export default function MontyHallPage() {
  return (
    <div className="grid gap-10">
      <div className="border border-ink p-6">
        <Link href="/" className="font-mono text-xs uppercase">
          Back to index
        </Link>

        <h1 className="mt-6 text-4xl">Monty Hall Probability Trap</h1>

        <p className="mt-4 max-w-[75ch]">
          Three doors. One car. Two goats. The host knows where the car is.
          Your intuition does not. Choose a door, then decide whether to switch.
        </p>
      </div>

      <MontyHallGame />

      <div className="border border-ink p-6 font-mono text-sm leading-7">
        <p>Curator's note:</p>
        <p className="mt-2 opacity-80">
          Switching wins about 2/3 of the time. Your brain will still hate it.
        </p>
      </div>
    </div>
  );
}
