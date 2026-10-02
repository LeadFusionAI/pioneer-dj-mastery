import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pioneer DJ Technique Lab",
  description:
    "A premium learning system for Pioneer CDJ-3000X, V10 mixer, and RX2 performance techniques.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
