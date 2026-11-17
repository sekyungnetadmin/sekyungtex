"use client";

import Link from "next/link";
import { useState } from "react";
import { PRODUCTS } from "@/components/ko/site";

const NAV = [
  { href: "/ko#about", label: "회사소개" },
  { href: "/ko#products", label: "제품", sub: true },
  { href: "/ko/news", label: "News" },
];

export default function KrTopNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="ko-site sticky top-0 z-50 border-b border-[#EBEBEB] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-6 py-5 md:px-8">
        <Link href="/ko" className="flex items-baseline gap-2.5" aria-label="세경네트 홈">
          <span className="ko-en text-[22px] font-extrabold tracking-wide text-[#111]">SEKYUNG</span>
          <span className="text-[13px] font-medium text-[#777]">세경네트</span>
        </Link>

        {/* Desktop */}
        <nav aria-label="주 메뉴" className="hidden items-center gap-8 text-[15px] font-medium md:flex">
          {NAV.map((item) =>
            item.sub ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  type="button"
                  className="py-2 text-[#111] hover:text-[#A16207]"
                  aria-expanded={productsOpen}
                  onClick={() => setProductsOpen((v) => !v)}
                >
                  {item.label}
                </button>
                {productsOpen && (
                  <div className="absolute left-1/2 top-full w-48 -translate-x-1/2 border border-[#EBEBEB] bg-white py-2 shadow-sm">
                    {PRODUCTS.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        className="block px-5 py-2.5 text-[14px] text-[#111] hover:bg-[#F5F5F5]"
                      >
                        {p.kr}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.label} href={item.href} className="text-[#111] hover:text-[#A16207]">
                {item.label}
              </Link>
            )
          )}
          <Link href="/ko/contact" className="border-b-2 border-[#FFC107] pb-0.5 font-bold text-[#111]">
            견적문의
          </Link>
          <span className="ko-en text-[12px] font-semibold text-[#999]">
            KR · <Link href="/en" className="hover:text-[#111]">EN</Link>
          </span>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={mobileOpen}
          aria-label="메뉴 열기"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" aria-hidden="true">
            {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav aria-label="모바일 메뉴" className="border-t border-[#EBEBEB] bg-white px-6 pb-6 md:hidden">
          <Link href="/ko#about" className="block py-3 text-[16px]" onClick={() => setMobileOpen(false)}>회사소개</Link>
          <div className="py-3">
            <span className="text-[16px]">제품</span>
            <div className="mt-2 flex flex-col pl-3">
              {PRODUCTS.map((p) => (
                <Link key={p.href} href={p.href} className="py-2 text-[15px] text-[#555]" onClick={() => setMobileOpen(false)}>
                  {p.kr}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/ko/news" className="block py-3 text-[16px]" onClick={() => setMobileOpen(false)}>News</Link>
          <Link href="/ko/contact" className="block py-3 text-[16px] font-bold" onClick={() => setMobileOpen(false)}>견적문의</Link>
          <Link href="/en" className="ko-en block py-3 text-[13px] text-[#777]">English</Link>
        </nav>
      )}
    </header>
  );
}
