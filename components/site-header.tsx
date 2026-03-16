"use client";

import { useEffect, useState } from "react";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import type { NavItem } from "@/data/harvey-site";
import { cn } from "@/lib/cn";

type SiteHeaderProps = {
  navItems: NavItem[];
};

export function SiteHeader({ navItems }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition duration-500",
        scrolled
          ? "border-b border-white/10 bg-obsidian/75 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="group shrink-0">
          <span className="block font-serif text-xl tracking-[0.08em] text-ivory transition duration-300 group-hover:text-gold">
            Harvey Havel
          </span>
          <span className="block text-[0.7rem] uppercase tracking-[0.22em] text-ivory/52">
            Author
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[0.74rem] uppercase tracking-[0.18em] text-ivory/74 transition duration-300 hover:text-gold focus-visible:outline-none focus-visible:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((current) => !current)}
          className="inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-2 text-[0.74rem] uppercase tracking-[0.18em] text-ivory/78 transition duration-300 hover:border-white/20 hover:text-gold md:hidden"
        >
          Menu
        </button>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen ? (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={shouldReduceMotion ? false : { opacity: 0, y: -16 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="mx-4 mb-4 rounded-[24px] border border-white/10 bg-midnight/90 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm text-ivory/78 transition duration-300 hover:bg-white/[0.04] hover:text-gold"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
