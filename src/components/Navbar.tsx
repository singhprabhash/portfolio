"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/data/nav";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape and return focus to the toggle.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-[#FEF9F1]/90 backdrop-blur-md transition-all duration-300 border-b border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link
          href="#hero"
          className="group text-2xl font-bold tracking-tight text-ink-900 font-serif flex items-center gap-1 touch-target py-2"
        >
          <span>Prabhash</span>
          <span
            aria-hidden="true"
            className="w-2 h-2 rounded-full bg-[#D96B43] inline-block group-hover:scale-125 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center space-x-0 lg:space-x-2 text-sm font-medium text-ink-700"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-2.5 lg:px-4 py-2 rounded-full hover:text-ink-900 hover:bg-black/[0.04] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="btn-primary whitespace-nowrap min-h-[44px]! px-4! sm:px-5! text-[13px]!"
          >
            <span>Let&apos;s Talk</span>
            <span aria-hidden="true" className="text-xs">
              ↗
            </span>
          </Link>

          {/* Mobile menu toggle */}
          <button
            ref={buttonRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden touch-target inline-flex items-center justify-center rounded-full border border-black/10 bg-white/90 text-ink-900"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <nav
        id="mobile-menu"
        aria-label="Mobile Navigation"
        hidden={!open}
        className="md:hidden border-t border-black/[0.04] bg-[#FEF9F1]"
      >
        <ul className="max-w-7xl mx-auto px-5 sm:px-8 py-3">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center min-h-[48px] text-base font-medium text-ink-800 border-b border-black/[0.05] last:border-b-0"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
