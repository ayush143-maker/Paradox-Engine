export type Paradox = {
  slug: string;
  title: string;
  tag: string;
  statement: string;
  status: "live" | "sealed";
  href?: string;
};

export const paradoxes: Paradox[] = [
  {
    slug: "zeno",
    title: "Zeno's Half-Click Machine",
    tag: "Infinity / Motion",
    statement:
      "Finish button tak pahunchne ke liye har baar remaining distance half karo. Exactly 100% kabhi mat maango.",
    status: "live",
    href: "/zeno",
  },
  {
    slug: "monty-hall",
    title: "Monty Hall Probability Trap",
    tag: "Probability / Regret",
    statement:
      "Switch karna better hai, but brain accept nahi karta. Prove it by pain.",
    status: "live",
    href: "/monty-hall",
  },
  {
    slug: "banach-tarski",
    title: "Banach-Tarski Splitter",
    tag: "Measure / Set Theory",
    statement:
      "Ek sphere ko todo, do same spheres banao. UI abhi ready nahi, mathematics ready hai.",
    status: "sealed",
  },
  {
    slug: "theseus",
    title: "Ship of Theseus Deploy",
    tag: "Identity / Git",
    statement:
      "Agar repo ke saare components replace ho jayein, toh website wahi rehti hai kya?",
    status: "sealed",
  },
];
