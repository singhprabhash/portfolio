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

  // Close the mobile menu if the viewport grows to the desktop layout.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#FEF9F1]/90 backdrop-blur-md transition-all duration-300 border-b border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link
          href="#hero"
          className="group text-xl sm:text-2xl font-bold tracking-tight text-ink-900 font-serif flex items-center gap-1 touch-target py-2"
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

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="#contact"
            className="btn-primary hidden whitespace-nowrap min-h-[44px]! px-4! text-[13px]! sm:inline-flex sm:px-5!"
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
            className="md:hidden inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/90 text-ink-900"
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

      {/* Mobile menu: overlay panel + tap-outside backdrop */}
      {open && (
        <div
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="absolute inset-x-0 top-full h-[100dvh] bg-ink-900/25 md:hidden"
        />
      )}
      <nav
        id="mobile-menu"
        aria-label="Mobile Navigation"
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-black/[0.06] bg-[#FEF9F1] shadow-float md:hidden"
      >
        <ul className="mx-auto max-w-7xl px-5 py-2 sm:px-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[52px] items-center border-b border-black/[0.06] text-lg font-medium text-ink-800"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mx-auto max-w-7xl px-5 pb-5 pt-3 sm:px-8">
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary w-full"
          >
            <span>Let&apos;s Talk</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
