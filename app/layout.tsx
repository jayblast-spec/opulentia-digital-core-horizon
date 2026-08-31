import type { Metadata } from "next";
import { Tektur, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://opulentia-digital.vercel.app";
const description =
  "Opulentia Digital Core Horizon (RC-9802444) — enterprise AI, analytics, and cloud infrastructure, with a live technology news hub.";

export const metadata: Metadata = {
  title: "Opulentia Digital Core Horizon",
  description,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Opulentia Digital Core Horizon",
    description,
    url: siteUrl,
    siteName: "Opulentia Digital Core Horizon",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Opulentia Digital Core Horizon",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${tektur.variable} ${inter.variable} antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
