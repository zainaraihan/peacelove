import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  // ── Basic ─────────────────────────────────────────────────────────────────
  title: {
    default: "P&L International | Premium Health & Global Business Platform",
    template: "%s | P&L International",
  },
  description:
    "P&L International is a premier cross-border modern retail platform dedicated to ultimate health, anti-aging, and lifelong wellness. Join our 100-Billion Global Business Platform.",
  keywords: [
    "P&L International",
    "Peace and Love International",
    "BPM Wellness",
    "38Fule",
    "stem cell medical tourism",
    "cellular nutrition",
    "anti-aging",
    "global health platform",
    "MLM wellness",
    "health products",
  ],
  authors: [{ name: "P&L International" }],
  creator: "P&L International",

  // ── Favicon & Icons ───────────────────────────────────────────────────────
  icons: {
    icon: "/peacelove.ico",           // browser tab icon
    shortcut: "/peacelove.ico",       // shortcut icon
    apple: "/Peace&Love_MainLogo_Gold.svg", // Apple touch icon
  },

  // ── Open Graph (Facebook, WhatsApp, LinkedIn) ─────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pnl-intl.com",
    siteName: "P&L International",
    title: "P&L International | Premium Health & Global Business Platform",
    description:
      "Unlock world-class health and join P&L's 100-Billion Global Business Platform. Premium cellular nutrition, women's wellness, and elite stem cell medical tourism.",
    images: [
      {
        url: "/Peace&Love_MainLogo_Gold.svg",
        width: 1200,
        height: 630,
        alt: "P&L International Logo",
      },
    ],
  },

  // ── Twitter / X Card ──────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "P&L International | Premium Health & Global Business Platform",
    description:
      "Unlock world-class health and join P&L's 100-Billion Global Business Platform.",
    images: ["/Peace&Love_MainLogo_Gold.svg"],
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
