import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prabhash-singh.com"),
  title: "Prabhash Singh | Senior Software Engineer",
  description: "Portfolio of Prabhash Singh, a Senior Software Engineer specializing in scalable web applications and distributed systems.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Next.js", "System Design", "Web Performance", "Cloud Architecture"],
  authors: [{ name: "Prabhash Singh" }],
  creator: "Prabhash Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prabhash-singh.com",
    title: "Prabhash Singh | Senior Software Engineer",
    description: "Building scalable, high-performance web applications with modern technologies.",
    siteName: "Prabhash Singh Portfolio",
    images: [
      {
        url: "/img/og-image.jpg", // Ensure this image exists or use a placeholder
        width: 1200,
        height: 630,
        alt: "Prabhash Singh - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prabhash Singh | Senior Software Engineer",
    description: "Building scalable, high-performance web applications with modern technologies.",
    creator: "@prabhash_singh", // Replace with actual handle if available
    images: ["/img/og-image.jpg"],
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

import { ViewModeProvider } from "@/context/ViewModeContext";
import WelcomeModal from "@/components/WelcomeModal";
import BackgroundAnimation from "@/components/BackgroundAnimation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground font-mono`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <ViewModeProvider>
            <BackgroundAnimation />
            <WelcomeModal />
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </ViewModeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
