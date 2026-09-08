
"use client";

import { useState } from "react";

function remainingLabel(steps: number) {
  if (steps === 0) return "1";
  if (steps <= 1024) return `1 / 2^${steps}`;
  return "too small for JavaScript, still too large for Zeno";
}

function failureMessage(attempts: number) {
  if (attempts === 0)
    return "Finish requires exact arrival. Approximation is not arrival.";

  if (attempts === 1)
    return "Denied. You still have infinitely many steps left.";

  if (attempts === 2)
    return "The Finish button appreciates your optimism.";

  if (attempts === 3)
    return "Achilles is running. Achilles is also losing.";

  if (attempts === 4)
    return "Reality suggests rounding errors. Zeno suggests patience.";

  return "Exhibit integrity compromised. Please continue being wrong.";
}

export default function ZenoMachine() {
  const [steps, setSteps] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const traveled = steps === 0 ? 0 : 1 - Math.pow(0.5, steps);
  const percent = traveled * 100;

  const barWidth = Math.min(percent, 99.9999999999);

  const percentApprox =
    steps === 0
      ? "0.0000000000"
      : percent >= 99.9999999999
        ? "99.999999999999…"
        : percent.toFixed(10);

  const progressExact = steps === 0 ? "0" : `1 - 1/2^${steps}`;

  const broken = attempts >= 5;

  const shakeX = attempts === 0 ? 0 : Math.sin(attempts * 9) * 18;
  const shakeY = attempts === 0 ? 0 : Math.cos(attempts * 7) * 8;

  const frame = broken
    ? "border-paper bg-ink text-paper"
    : "border-ink bg-paper text-ink";

  const primaryButton = broken
    ? "border-paper bg-paper text-ink"
    : "border-ink bg-ink text-paper";

  const trackBorder = broken ? "border-paper" : "border-ink";

  return (
    <div className={`border p-6 ${frame}`}>
      <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs uppercase tracking-[0.2em]">
        <span>Machine 01</span>
        <span>
          {broken ? "state: mildly corrupted" : "state: logically consistent"}
        </span>
      </div>

      <div className="mt-6 grid gap-2 font-mono text-sm">
        <span>steps taken: {steps}</span>
        <span>remaining distance: {remainingLabel(steps)}</span>
        <span>exact progress: {progressExact}</span>
        <span>approx progress: {percentApprox}%</span>
      </div>

      <div
        className={`relative mt-8 h-16 overflow-hidden border ${trackBorder}`}
      >
        <div
          className="absolute inset-y-0 left-0 bg-current opacity-10 transition-all duration-500"
          style={{ width: `${barWidth}%` }}
        />

        <div
          className="absolute top-1/2 h-3 w-3 -translate-y-1/2 bg-current transition-all duration-500"
          style={{ left: `calc(${barWidth}% - 6px)` }}
        />

        <button
          type="button"
          onClick={() => setAttempts((a) => a + 1)}
          className={`absolute right-3 top-1/2 border px-3 py-1 font-mono text-xs uppercase ${trackBorder}`}
          style={{
            transform: `translateY(-50%) translate(${shakeX}px, ${shakeY}px)`,
          }}
        >
          Finish
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setSteps((s) => s + 1)}
          className={`border px-4 py-2 font-mono text-xs uppercase ${primaryButton}`}
        >
          Take half step
        </button>

        <button
          type="button"
          onClick={() => {
            setSteps(0);
            setAttempts(0);
          }}
          className="border border-current px-4 py-2 font-mono text-xs uppercase hover:opacity-80"
        >
          Reset
        </button>
      </div>

      <p className="mt-5 font-mono text-sm">
        {failureMessage(attempts)}
      </p>
    </div>
  );
}
