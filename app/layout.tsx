export const metadata = {
  title: "Pioneer DJ Mastery",
  description:
    "A premium learning system for DJ techniques on Pioneer CDJ-3000X, DJM-V10, and RX2 controllers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
