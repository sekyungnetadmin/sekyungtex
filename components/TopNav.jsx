"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <a href="#" className="flex items-center gap-3 -ml-8 transition-transform duration-300 hover:scale-105 hover:opacity-90">
          <img
            src="/assets/logo-sekyung.png"
            alt="Sekyung"
            className="h-12 md:h-14 w-auto scale-[4.0] origin-left object-contain transition-all duration-500 hover:brightness-110"
          />
        </a>

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
    </header>
  );
}