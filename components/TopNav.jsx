"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const products = [
  { name: "Golf Netting",        href: "/en/products/golf-netting" },
  { name: "Baseball Netting",    href: "/en/products/baseball-netting" },
  { name: "Safety Netting",      href: "/en/products/safety-netting" },
  { name: "Ski Slope Netting",   href: "/en/products/ski-slope-netting" },
  { name: "Fishing Nets",        href: "/en/products/fishing-nets" },
]

export default function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

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
          <a href="/en#manufacturing" className="hover:text-brand ">Company</a>

          {/* Products 드롭다운 */}
          <div className="relative">
            <button
              onClick={() => setDesktopProductsOpen((prev) => !prev)}
              className="flex items-center gap-1 hover:text-brand  font-medium"
            >
              Products
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${desktopProductsOpen ? "rotate-180" : ""}`}
                viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"
              >
                <polyline points="2,4 6,8 10,4" />
              </svg>
            </button>

            {/* 드롭다운 메뉴 */}
            {desktopProductsOpen && (
              <>
                {/* 외부 클릭 시 닫기 */}
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setDesktopProductsOpen(false)}
                />
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-20">
                  <div className="bg-white border border-black/8 rounded-xl shadow-lg shadow-black/8 py-1.5 min-w-[200px]">
                    {products.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        onClick={() => setDesktopProductsOpen(false)}
                        className="block px-4 py-2.5 text-[13px] text-[#20262A]/80 hover:bg-[#f8f8f6] hover:text-[#20262A] "
                      >
                        {p.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          <a href="/en#facilities" className="hover:text-brand ">Facilities</a>
          <a href="/en#contact" className="hover:text-brand ">Contact</a>
        </nav>

        {/* RIGHT BUTTONS */}
        <div className="hidden md:flex items-center gap-6 ml-6">
          <Button asChild className="bg-brand hover:bg-black text-white ">
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
            <a href="/en#manufacturing" onClick={() => setMobileOpen(false)}>Company</a>

            {/* 모바일 Products 아코디언 */}
            <div>
              <button
                type="button"
                className="flex items-center gap-1 w-full text-left py-1"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setMobileProductsOpen((prev) => !prev);
                }}
              >
                Products
                <svg
                  className={`w-3.5 h-3.5 ml-1 ${mobileProductsOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"
                >
                  <polyline points="2,4 6,8 10,4" />
                </svg>
              </button>
              <div className={`${mobileProductsOpen ? "block" : "hidden"} mt-2 ml-3 flex flex-col gap-2 border-l-2 border-[#e8c840] pl-3`}>
                {products.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="block text-[14px] text-[#20262A]/70 py-1"
                    onClick={() => { setMobileOpen(false); setMobileProductsOpen(false); }}
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>

            <a href="/en#facilities" onClick={() => setMobileOpen(false)}>Facilities</a>
            <a href="/en#contact" onClick={() => setMobileOpen(false)}>Contact</a>
            <a href="/en#contact" onClick={() => setMobileOpen(false)} className="font-medium text-[#0F2D3A]">
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
