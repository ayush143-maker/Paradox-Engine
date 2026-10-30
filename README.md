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

## Explore and edit

Page routes are under `app/`, reusable interface elements under `components/`, and exhibit material under `content/`. When adding or editing an exhibit, explain its assumptions and reasoning clearly, then review the affected route in the local app.

The supplied file list does not identify specific exhibit files or a separate asset directory. Locate existing media references before adding or replacing assets, and keep paths in sync with their files. For visual changes, review `tailwind.config.ts` alongside existing page and component styles; check the code for project conventions rather than assuming particular theme settings.

## Configuration and data handling

The repository lists project configuration files such as `next.config.mjs`, `tailwind.config.ts`, `tsconfig.json`, and `.eslintrc.json`, but no `.env.example` or other environment-variable template is listed. Treat tracked configuration as project code: review changes before committing, and do not put passwords, tokens, or other real secrets in tracked files. If a template is added later, include only placeholder values and document its purpose without copying live credentials into it.

This project uses Next.js, so check whether a value is used only on the server or is included in the page and its browser bundles. Anything delivered to a browser—including client-side configuration and page data—must be treated as public, not as a secret. Do not add secrets to `app/`, `components/`, or `content/` if those values may be rendered or bundled for visitors. Review exhibit content and assets before committing them for information that should not be public.

## Browser and platform reliability checklist

This is a checklist for future review, not a record of completed testing or verified compatibility:

- Identify the browsers and versions relevant to the intended audience and the project's Next.js stack. Review the affected routes in those current browsers; do not infer support from a successful run in one browser.
- Open browser developer tools and inspect the Console and Network panels while loading the entry page and affected exhibits. Investigate JavaScript errors, failed requests, and unexpected warnings.
- Check local resource references in `app/`, `components/`, and `content/` against the files they are meant to load. In Network, verify that local resources and any intentional remote resources load as expected; review failed or unexpected requests.
- Inspect the entry page and affected exhibits at narrow mobile-sized and wide desktop-sized viewports. Check for clipped explanations, overlapping controls, and navigation that is difficult to use. If a layout issue appears, compare the same route at both sizes and in the relevant browsers.
- Try exhibit interactions and museum navigation after changes. Confirm that the displayed explanation still matches the interaction; do not treat visual inspection alone as verification of functionality.

## Accessibility review checklist

These are future checks, not claims that the app has been tested or found accessible:

- Use a keyboard to navigate the museum and operate controls on the affected exhibit. Check that interactive items can receive focus, focus order follows the reading order, and focus remains visible.
- Check that controls have meaningful accessible names and that their labels explain their actions rather than relying on icons or visual position.
- Review text and control contrast, including text over exhibit visuals. Check that mathematical explanations remain readable after styling changes.
- For informative images or diagrams, check that text alternatives convey relevant meaning; ensure decorative images do not create redundant announcements.
- If an exhibit animates or moves, check whether motion can be reduced or paused and whether the explanation remains understandable without animation.