"use client";

import { useState } from "react";

type Phase = "choose" | "switch" | "result";

const DOORS = [0, 1, 2] as const;

function randomDoor() {
  return Math.floor(Math.random() * DOORS.length);
}

function chooseHostDoor(selected: number, car: number) {
  const options = DOORS.filter((door) => door !== selected && door !== car);
  return options[Math.floor(Math.random() * options.length)];
}

export default function MontyHallGame() {
  const [phase, setPhase] = useState<Phase>("choose");
  const [carDoor, setCarDoor] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [opened, setOpened] = useState<number | null>(null);
  const [result, setResult] = useState<"win" | "lose" | null>(null);

  const [stats, setStats] = useState({
    stay: {
      wins: 0,
      total: 0,
    },
    switch: {
      wins: 0,
      total: 0,
    },
  });

  const [log, setLog] = useState<string[]>([]);

  const pickDoor = (door: number) => {
    if (phase !== "choose") return;

    const car = randomDoor();
    const host = chooseHostDoor(door, car);

    setCarDoor(car);
    setSelected(door);
    setOpened(host);
    setPhase("switch");
  };

  const updateStats = (mode: "stay" | "switch", won: boolean) => {
    setStats((prev) => {
      const current = prev[mode];

      return {
        ...prev,
        [mode]: {
          wins: current.wins + (won ? 1 : 0),
          total: current.total + 1,
        },
      };
    });
  };

  const decide = (shouldSwitch: boolean) => {
    if (
      phase !== "switch" ||
      selected === null ||
      opened === null ||
      carDoor === null
    ) {
      return;
    }

    const finalDoor = shouldSwitch
      ? DOORS.find((door) => door !== selected && door !== opened)!
      : selected;

    const won = finalDoor === carDoor;

    setSelected(finalDoor);
    setResult(won ? "win" : "lose");
    setPhase("result");

    updateStats(shouldSwitch ? "switch" : "stay", won);

    setLog((prev) =>
      [
        `${shouldSwitch ? "Switched" : "Stayed"} and ${won ? "won" : "lost"}`,
        ...prev,
      ].slice(0, 8)
    );
  };

  const reset = () => {
    setPhase("choose");
    setCarDoor(null);
    setSelected(null);
    setOpened(null);
    setResult(null);
  };

  const doorLabel = (door: number) => {
    if (phase === "result" && door === carDoor) return "CAR";
    if (door === opened) return "GOAT";
    if (door === selected) return "PICK";
    return "???";
  };

  return (
    <div className="border border-ink bg-paper p-6 text-ink">
      <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs uppercase tracking-[0.2em]">
        <span>Probability Trap 02</span>
        <span>
          {phase === "choose"
            ? "choose a door"
            : phase === "switch"
              ? "host opened a goat"
              : result}
        </span>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {DOORS.map((door) => (
          <button
            key={door}
            type="button"
            onClick={() => pickDoor(door)}
            disabled={phase !== "choose"}
            className={`min-h-32 border border-ink p-4 text-left font-mono text-sm transition-colors ${
              door === selected ? "bg-ink text-paper" : "hover:bg-ink/5"
            } ${phase !== "choose" ? "cursor-default" : ""}`}
          >
            <span className="block text-3xl">Door {door + 1}</span>
            <span className="mt-3 block text-xs uppercase tracking-[0.2em]">
              {doorLabel(door)}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {phase === "switch" && (
          <>
            <button
              type="button"
              onClick={() => decide(false)}
              className="border border-ink bg-ink px-4 py-2 font-mono text-xs uppercase text-paper"
            >
              Stay
            </button>

            <button
              type="button"
              onClick={() => decide(true)}
              className="border border-ink px-4 py-2 font-mono text-xs uppercase"
            >
              Switch
            </button>
          </>
        )}

        {phase === "result" && (
          <button
            type="button"
            onClick={reset}
            className="border border-ink px-4 py-2 font-mono text-xs uppercase"
          >
            Run it again
          </button>
        )}
      </div>

      <div className="mt-6 grid gap-2 font-mono text-sm">
        <span>
          stay wins: {stats.stay.wins}/{stats.stay.total}
        </span>
        <span>
          switch wins: {stats.switch.wins}/{stats.switch.total}
        </span>
      </div>

      {log.length > 0 && (
        <div className="mt-6 border-t border-ink pt-4 font-mono text-xs uppercase leading-6 opacity-70">
          {log.map((entry, index) => (
            <p key={index}>{entry}</p>
          ))}
        </div>
      )}
    </div>
  );
}
