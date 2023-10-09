import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quorum Challenge",
  // description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen w-screen">{children}</body>
    </html>
  );
}
