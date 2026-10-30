# Paradox-Engine

Paradox-Engine is a small digital museum of mathematical and logical paradoxes. Its `/monty-hall` and `/zeno` pages pair explanations and curator’s notes with interactive exhibits.

## Run locally

With Node.js and npm installed, run:

```sh
npm install
npm run dev
```

Open the local URL printed by the development server. To create a production build, run:

```sh
npm run build
```

The repository information does not document a hosting provider or deployment configuration.

## Project structure

- `app/` — application routes.
- `components/` — reusable interface elements.
- `content/` — exhibit material.
- `package.json` — dependencies and project scripts.
- `tailwind.config.ts` — styling configuration.

The supplied file list does not identify individual exhibit files or a separate asset directory. Check existing media references before adding or moving assets, and update paths when files change.

## Exhibits and interactions

The `/monty-hall` page explains the three-door scenario and links back to the index. The game randomly assigns the car, lets the user pick a door, then opens a goat door that is neither the chosen door nor the car door. The user chooses Stay or Switch; the game reveals the car and records the outcome. Separate win and total counts are shown for staying and switching, alongside a log of up to the eight most recent outcomes. The curator’s note says switching wins about two-thirds of the time.

Run it again clears the current round but leaves the counts and log intact. Those values are held in component state; no persistence is shown.

The `/zeno` page explains repeatedly covering half the remaining distance. Take half step increments the step count and updates remaining-distance text, exact and approximate progress, and a progress bar. Reset sets both the step count and Finish-attempt count to zero. Finish increments attempts without changing the step count and displays an attempt-dependent message; at five or more attempts, the message changes to mildly corrupted. The button remains rendered. Above 1,024 steps, the remaining-distance label switches to a JavaScript precision-themed message. Step and attempt values are component state, with no persistence shown.

## Editing and review

When adding or revising an exhibit, explain its assumptions and reasoning clearly, then review the affected route in the local app. Keep changes scoped to the relevant route, component, content, or asset. Review the project’s existing styles and configuration rather than assuming theme settings.

The available project information does not establish that deployment, browser compatibility review, accessibility review, or automated checks have been completed. Before publishing changes, manually review the affected exhibit and its referenced assets. Use keyboard navigation and check that controls and mathematical explanations remain usable and readable.