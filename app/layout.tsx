import type { Metadata } from "next";
import "./globals.css";

// Basic metadata for SEO (can expand later)
export const metadata: Metadata = {
  title: "Islam | Islamic Web App",
  description:
    "An Islamic web application providing authentic knowledge and resources.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
