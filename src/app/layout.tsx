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
  title: "Prabhash Singh | Frontend Engineer",
  description: "Portfolio of Prabhash Singh, an Expert Frontend Engineer specializing in React.js, Next.js, and Micro-Frontends.",
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
