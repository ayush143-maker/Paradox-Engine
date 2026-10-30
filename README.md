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

Edit exhibit wording in the relevant material under `content/`, and inspect the related route in `app/` and interface elements in `components/` before changing how that content is presented. The supplied file list does not identify specific exhibit files or a separate asset directory, so locate existing references before adding or replacing media. Preserve any relative paths you find, and review the affected route after edits.

For visual changes, review `tailwind.config.ts` alongside the existing page and component styles before changing project-wide theme settings. This README does not document particular theme tokens or project-specific settings; check their locations and conventions in the code rather than assuming new ones.

## Manual review checklist

These are actions to perform after a change, not verified results:

- Open the app at the local URL and inspect its entry page. Navigate to the affected exhibit, including the Monty Hall or Zeno material if that is what changed.
- Check image and media references used by the affected route or components against the files and paths in the repository. The supplied file list does not identify a separate asset directory, so inspect the actual references before assuming where media belongs.
- Try the exhibit's described interactions and follow the museum navigation. Check that the displayed explanation still matches the interaction after content or component changes.
- Inspect the entry page and affected exhibit at narrow mobile-sized and wide desktop-sized viewports. Look for clipped explanations, overlapping controls, and difficult-to-use navigation.

## Accessibility review checklist

These are future checks to perform; they are not claims that the app has been tested or found accessible:

- Use only a keyboard to move through the museum navigation and any controls on the affected exhibit. Check that every interactive item can receive focus and be operated, and that the focus order follows the page's reading order.
- Watch the keyboard focus indicator as it moves. Check that it remains visible against the page styling and is not obscured by other content.
- Check that navigation and exhibit controls have meaningful accessible names, and that labels explain what a control does rather than relying on an icon or visual position alone.
- Review text and control contrast against their backgrounds, including any text placed over exhibit visuals. Check that mathematical explanations remain readable when styling changes.
- For images or diagrams that convey exhibit information, check that appropriate text alternatives convey the same relevant meaning. If an image is decorative, check that it does not add distracting redundant text.
- If an exhibit animates or moves, check whether the motion can be reduced or paused and whether the explanation remains understandable without animation.