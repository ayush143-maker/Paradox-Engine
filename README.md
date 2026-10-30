# Paradox-Engine

Paradox-Engine is a small digital museum of mathematical and logical paradoxes. Its exhibits include the Monty Hall problem and Zeno’s paradoxes, presented as interactive browser pages.

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

## Editing exhibits

When adding or revising an exhibit, explain its assumptions and reasoning clearly, then review the affected route in the local app. Keep changes scoped to the relevant route, component, content, or asset. Review the project’s existing styles and configuration rather than assuming theme settings.

## Review notes

The available project information does not establish that a deployment, browser compatibility review, accessibility review, or automated check has been completed. Before publishing changes, manually review the affected exhibit, its content, and its referenced assets. Use keyboard navigation and check that controls and mathematical explanations remain usable and readable.