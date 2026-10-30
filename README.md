# Paradox-Engine

An interactive collection of mathematical and logical paradoxes presented as a small digital museum. Browse exhibits including the Monty Hall problem and Zeno's paradoxes.

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

After a successful build, use `npm start` to serve it locally. No hosting provider or deployment configuration is documented.

## Explore the code

Page routes are under `app/`, reusable interface elements under `components/`, and exhibit material under `content/`. When adding an exhibit, explain its assumptions and reasoning clearly, then review it in the local app.

## Personalizing the museum

Edit exhibit wording in the relevant material under `content/`, and inspect the related route in `app/` and interface elements in `components/` before changing how that content is presented. The supplied file list does not identify specific exhibit files or a separate asset directory, so locate the existing references before adding or replacing media. Preserve any relative paths you find, and check the affected route after edits.

For visual changes, review `tailwind.config.ts` alongside the existing page and component styles before changing project-wide theme settings. This README does not document particular theme tokens or project-specific settings; treat their exact locations and conventions as a review item in the code rather than assuming new ones.