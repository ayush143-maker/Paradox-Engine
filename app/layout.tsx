import "./globals.css";
import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono } from "next/font/google";
import SiteFrame from "../components/SiteFrame";

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "The Paradox Engine",
  description:
    "A minimalist interactive museum of mathematical paradoxes and impossible interfaces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${mono.variable}`}>
      <body className="bg-paper text-ink antialiased paper-grid">
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
