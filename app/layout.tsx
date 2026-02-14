import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Roboto_Serif } from "next/font/google";
import Navbar from "@/components/layout/Navbar";

// Body font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

// Heading font
const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Islam | Islamic Web App",
  description: "Authentic Islamic knowledge platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${robotoSerif.variable} font-body bg-brand-light text-gray-900 antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
