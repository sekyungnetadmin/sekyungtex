"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <a href="#" className="flex items-center gap-3 -ml-8 transition-transform duration-300 hover:scale-105 hover:opacity-90">
          <img
            src="/assets/logo-sekyung.png"
            alt="Sekyung"
            className="h-12 md:h-14 w-auto scale-[4.5] origin-left object-contain transition-all duration-500 hover:brightness-110"
          />
        </a>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700"
          aria-expanded={mobileOpen}
          aria-label="Toggle mobile menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-10 text-body font-medium text-[#20262A]/90 justify-start pl-10">
          <a href="#manufacturing" className="hover:text-brand transition-colors duration-300">Company</a>
          <a href="#products" className="hover:text-brand transition-colors duration-300">Products</a>
          <a href="#facilities" className="hover:text-brand transition-colors duration-300">Facilities</a>
          <a href="#contact" className="hover:text-brand transition-colors duration-300">Contact</a>
        </nav>

        {/* RIGHT BUTTONS */}
        <div className="hidden md:flex items-center gap-6 ml-6">
          <Button asChild className="bg-brand hover:bg-black text-white transition-colors duration-300">
            <a href="#contact">Get a Quote</a>
          </Button>

          <div className="flex items-center gap-3 text-body-sm text-slate-600">
            <Link href="/" className="hover:text-brand">EN</Link>
            <span className="opacity-40">|</span>
            <Link href="/ko" className="hover:text-brand">KR</Link>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <nav className="px-6 py-4 flex flex-col gap-3 text-[15px] text-[#20262A]">
            <a href="#manufacturing" onClick={() => setMobileOpen(false)}>Company</a>
            <a href="#products" onClick={() => setMobileOpen(false)}>Products</a>
            <a href="#facilities" onClick={() => setMobileOpen(false)}>Facilities</a>
            <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="font-medium text-[#0F2D3A]">
              Get a Quote
            </a>
            <div className="pt-1 text-slate-600">
              <Link href="/" onClick={() => setMobileOpen(false)}>EN</Link>
              <span className="mx-2 opacity-40">|</span>
              <Link href="/ko" onClick={() => setMobileOpen(false)}>KR</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}