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

After a successful build, use `npm start` to serve it locally. These commands are documented for local use; they do not identify a hosting provider or specify deployment settings.

## Explore and edit

Routes are under `app/`, reusable interface elements under `components/`, and exhibit material under `content/`. When adding or editing an exhibit, explain its assumptions and reasoning clearly, then review the affected route in the local app.

The supplied file list does not identify specific exhibit files or a separate asset directory. Locate existing media references before adding or replacing assets, and keep paths in sync with their files. For visual changes, review `tailwind.config.ts` alongside existing page and component styles; check the code for project conventions rather than assuming particular theme settings.

## Deployment-readiness checklist

The repository includes Next.js-related files such as `next.config.mjs`, but the available information does not document a hosting target or deployment configuration. Treat these as preparation steps, not as a record of completed deployment checks:

- [ ] **Confirm the published source and output.** Check the project's actual package scripts and `next.config.mjs` before choosing a build command, output directory, or publication root. Do not assume that a folder named `out`, `build`, or another directory is produced. The documented `npm run build` command creates a production build; confirm what the configured project produces and what the intended publishing process expects.
- [ ] **Check route and asset paths.** Routes live under `app/`. Review references in routes, components, and content, and confirm each referenced asset exists at the expected path. Preserve relative paths when moving files. If the app will be served from a path other than the site root, verify that routes and asset references still resolve in that context.
- [ ] **Review configuration and data.** The repository lists configuration files including `next.config.mjs`, `tailwind.config.ts`, `tsconfig.json`, and `.eslintrc.json`, but no `.env.example` or other environment-variable template is listed. Do not commit passwords, tokens, or other real secrets. If configuration values are needed, use the intended configuration mechanism and placeholders in any tracked examples. Treat anything delivered to a browser as public, not as a secret.
- [ ] **Review public content.** Check exhibit text and assets for information that should not be published before committing or making them available.
- [ ] **Preview after publishing.** After publication, open the published site and manually check the home page and affected exhibit routes. Confirm that styles and referenced assets load, links lead where expected, and content displays correctly. Use browser Console and Network panels to investigate errors or failed requests. This is a recommended final review, not a claim that a deployment or preview has already occurred.

## Configuration and data handling

The repository lists configuration files such as `next.config.mjs`, `tailwind.config.ts`, `tsconfig.json`, and `.eslintrc.json`, but no `.env.example` or other environment-variable template. Do not put passwords, tokens, or other real secrets in tracked files. If a template is added later, use placeholders only.

This project uses Next.js, so check whether a value is used only on the server or included in page data and browser bundles. Anything delivered to a browser must be treated as public, not as a secret. Review exhibit content and assets before committing them for information that should not be public.

## Contributor handoff

Keep each change scoped to the relevant route, component, exhibit content, or asset. Preserve existing filenames and relative references unless a change requires updating every affected reference. In the handoff, summarize what changed and which parts of the museum it affects.

Before publishing, manually review the changed route in the local app, including relevant content and visual behavior. This is a review checklist, not a record of checks already completed.

## Troubleshooting

Use these as diagnostic steps; they are not reports of known failures:

1. Confirm you are opening the intended route. Check route files under `app/` rather than assuming every exhibit is at the root URL.
2. If a style, script, or media item is missing, compare its reference in `app/`, `components/`, or `content/` with the file location. Preserve the intended relative path when moving files.
3. Open the browser developer tools and inspect Console and Network while loading the route. Use errors and failed requests to identify which resource or code path needs attention.
4. Confirm any required local asset is present and that its referenced name and path match. The supplied file list does not identify a dedicated asset directory.

## Accessibility review checklist

These are future checks, not claims that the app has been tested or found accessible:

- Use a keyboard to navigate the museum and operate controls on affected exhibits. Check focus order and visibility.
- Check that controls have meaningful accessible names and labels that explain their actions.
- Review text and control contrast, including text over exhibit visuals. Check that mathematical explanations remain readable after styling changes.
- For informative images or diagrams, check that text alternatives convey relevant meaning; avoid redundant announcements for decorative images.
- If an exhibit animates or moves, check whether motion can be reduced or paused and whether the explanation remains understandable without animation.

## Final release review

- Confirm the documented starting point still matches the files present at the repository root.
- Check the scripts and dependency versions in `package.json`; use the repository's declared workflow rather than assuming a generic build command.
- Review the published result once on a narrow screen and once on a wider screen; treat this as a release check, not an automated test report.
