"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const products = [
  { name: "Golf Driving Range Netting",      href: "/en/products/golf-driving-range-netting" },
  { name: "Baseball Netting",  href: "/en/products/baseball-netting" },
  { name: "Safety Netting",    href: "/en/products/safety-netting" },
  { name: "Ski Slope Netting", href: "/en/products/ski-slope-netting" },
  { name: "Fishing Nets",      href: "/en/products/fishing-nets" },
];

export default function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);

  function closeMobile() {
    setMobileOpen(false);
    setMobileProductsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <a href="/en" className="flex items-center gap-3 -ml-8">
          <img
            src="/assets/logo-sekyung.png"
            alt="Sekyung"
            className="h-12 md:h-14 w-auto scale-[4.5] origin-left object-contain"
          />
        </a>

        {/* 모바일 햄버거 버튼 */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex items-center gap-10 text-body font-medium text-[#20262A]/90 pl-10">
          <a href="/en#manufacturing" className="hover:text-brand">Company</a>

          {/* 데스크탑 Products 드롭다운 */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setDesktopProductsOpen((prev) => !prev)}
              className="flex items-center gap-1 hover:text-brand font-medium"
            >
              Products
              <svg className={`w-3.5 h-3.5 transition-transform ${desktopProductsOpen ? "rotate-180" : ""}`}
                viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="2,4 6,8 10,4" />
              </svg>
            </button>

            {desktopProductsOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setDesktopProductsOpen(false)} />
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-20">
                  <div className="bg-white border border-black/8 rounded-xl shadow-lg py-1.5 min-w-[200px]">
                    {products.map((p) => (
                      <Link key={p.href} href={p.href}
                        onClick={() => setDesktopProductsOpen(false)}
                        className="block px-4 py-2.5 text-[13px] text-[#20262A]/80 hover:bg-[#f8f8f6] hover:text-[#20262A]">
                        {p.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          <a href="/en#facilities" className="hover:text-brand">Facilities</a>
          <a href="/en#contact" className="hover:text-brand">Contact</a>
        </nav>

        {/* 데스크탑 우측 버튼 */}
        <div className="hidden md:flex items-center gap-6 ml-6">
          <Button asChild className="bg-brand hover:bg-black text-white">
            <a href="/en#contact">Get a Quote</a>
          </Button>
          <div className="flex items-center gap-3 text-body-sm text-slate-600">
            <Link href="/" className="hover:text-brand">EN</Link>
            <span className="opacity-40">|</span>
            <Link href="/ko" className="hover:text-brand">KR</Link>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {mobileOpen && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <nav className="px-6 py-4 flex flex-col gap-3 text-[15px] text-[#20262A]">
            <a href="/en#manufacturing" onClick={closeMobile}>Company</a>

            {/* 모바일 Products */}
            <div className="flex flex-col gap-1">
              <span className="text-[15px] text-[#20262A]/50 text-xs uppercase tracking-widest">Products</span>
              {products.map((p) => (
                <Link key={p.href} href={p.href}
                  className="pl-2 text-[14px] text-[#20262A] border-l-2 border-[#e8c840] py-1"
                  onClick={closeMobile}>
                  {p.name}
                </Link>
              ))}
            </div>

            <a href="/en#facilities" onClick={closeMobile}>Facilities</a>
            <a href="/en#contact" onClick={closeMobile}>Contact</a>
            <a href="/en#contact" onClick={closeMobile} className="font-medium text-[#0F2D3A]">Get a Quote</a>
            <div className="pt-1 text-slate-600">
              <Link href="/" onClick={closeMobile}>EN</Link>
              <span className="mx-2 opacity-40">|</span>
              <Link href="/ko" onClick={closeMobile}>KR</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
