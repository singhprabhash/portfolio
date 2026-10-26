import type { Metadata } from "next";
import { Caveat, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const TITLE = "Prabhash Singh — Software Engineer";
const DESCRIPTION =
  "Prabhash Singh is a Software Engineer with 7 years of experience building responsive web applications, modernizing enterprise platforms, and developing SaaS products across insurance and healthcare.";

export const metadata: Metadata = {
  metadataBase: new URL("https://prabhash-singh.com"),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Software Engineer",
    "Frontend Engineer",
    "React.js",
    "Vue.js",
    "TypeScript",
    "Next.js",
    "Enterprise Applications",
    "Insurance SaaS",
    "Healthcare Software",
  ],
  authors: [{ name: "Prabhash Singh" }],
  creator: "Prabhash Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prabhash-singh.com",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Prabhash Singh Portfolio",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prabhash Singh - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@prabhash_singh",
    images: ["/img/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jakarta.variable} ${playfair.variable} ${caveat.variable} bg-[#FEF9F1] text-ink-900 antialiased overflow-x-hidden selection:bg-pastel-peach font-sans`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-ink-900 focus:text-cream-50 focus:px-4 focus:py-2 focus:rounded-full text-sm font-semibold"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
