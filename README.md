# Paradox-Engine

An interactive collection of mathematical and logical paradoxes presented as a small digital museum. Browse exhibits including the Monty Hall problem and Zeno's paradoxes. The README does not specify particular interface controls or interactions.

## Run locally

With Node.js and npm available, install dependencies and start the Next.js development server:

    npm install
    npm run dev

Open the local URL printed by the server in your browser to review changes. To create a production build, run:

    npm run build

After a successful build, use the package's `npm start` command to serve the production build locally. No hosting provider or deployment configuration is documented.

## Explore the code

Page routes are under `app/`, reusable interface elements under `components/`, and exhibit material under `content/`. When adding an exhibit, explain its assumptions and reasoning clearly, then review the exhibit in the local app.