import Link from "next/link";
import { navLinks } from "@/data/nav";

export default function Footer() {
  return (
    <footer className="pt-8 pb-12 bg-[#FEF9F1] border-t border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-black/[0.05]">
          {/* Brand Wordmark */}
          <Link
            href="#hero"
            className="text-xl font-bold font-serif text-ink-900 touch-target py-2"
          >
            Prabhash<span className="text-[#D96B43]">.</span>
          </Link>

          {/* Centered Navigation Footer Links */}
          <nav className="flex flex-wrap justify-center gap-5 text-[0.8125rem] font-semibold text-ink-700 uppercase tracking-wider">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-ink-900 transition-colors py-2"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Quick Connect */}
          <div className="flex items-center gap-3 text-xs font-bold text-ink-800 uppercase tracking-wider">
            <a
              href="https://linkedin.com/in/prabhash-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D96B43] transition-colors py-2"
            >
              LinkedIn
            </a>
            <span aria-hidden="true">/</span>
            <a
              href="mailto:prabhash6615@gmail.com"
              className="hover:text-[#D96B43] transition-colors py-2"
            >
              Email
            </a>
          </div>
        </div>

        {/* Copyright & Handcrafted Credit */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-ink-500 gap-3 text-center sm:text-left">
          <div>© 2026 Prabhash Singh. All rights reserved.</div>
          <div className="font-handwriting text-base sm:text-lg text-ink-800 font-medium -rotate-3 select-none inline-block">
            Handcrafted with modern code &amp; care ✨
          </div>
        </div>
      </div>
    </footer>
  );
}
