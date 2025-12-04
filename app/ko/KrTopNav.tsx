"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function KrTopNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <a href="/ko" className="flex items-center gap-3 -ml-8 transition-transform duration-300 hover:scale-105 hover:opacity-90">
          <img
            src="/assets/logo-sekyung.png"
            alt="세경네트"
            className="h-12 md:h-14 w-auto scale-[4.0] origin-left object-contain transition-all duration-500 hover:brightness-110"
          />
        </a>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-10 text-body font-medium text-[#20262A]/90 justify-start pl-10">

          <a href="/ko#manufacturing" className="hover:text-brand transition-colors duration-300">
            회사소개
          </a>

          {/* 제품안내 드롭다운 */}
         <div
  className="relative"
  onMouseEnter={() => setOpen(true)}
  onMouseLeave={() => setOpen(false)}
>
  <button className="hover:text-brand transition-colors duration-300">
    제품안내
  </button>

  {open && (
    <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-50">
      <a href="/ko/products/golf" className="block px-4 py-2 hover:bg-gray-100">
        골프망
      </a>
      <a href="/ko/products/ski" className="block px-4 py-2 hover:bg-gray-100">
        스키망
      </a>
      <a href="/ko/products/sports" className="block px-4 py-2 hover:bg-gray-100">
        스포츠망
      </a>
      <a href="/ko/products/safety" className="block px-4 py-2 hover:bg-gray-100">
        안전망
      </a>
      <a href="/ko/products/fishery" className="block px-4 py-2 hover:bg-gray-100">
        어망
      </a>
    </div>
  )}
</div>

          <a href="/ko#facilities" className="hover:text-brand transition-colors duration-300">
            설비현황
          </a>

          <a href="/ko#contact" className="hover:text-brand transition-colors duration-300">
            문의하기
          </a>
        </nav>

        {/* LANGUAGE + CTA */}
        <div className="hidden md:flex items-center gap-6 ml-6">
          <Button asChild className="bg-brand hover:bg-black text-white transition-colors duration-300">
            <a href="/ko#contact">견적 요청</a>
          </Button>

          <div className="flex items-center gap-3 text-body-sm text-slate-600">
            <Link href="/">EN</Link>
            <span className="opacity-40">|</span>
            <Link href="/ko">KR</Link>
          </div>
        </div>

      </div>
    </header>
  );
}