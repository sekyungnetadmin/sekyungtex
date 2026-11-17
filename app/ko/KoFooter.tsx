"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT } from "@/components/ko/site";

export default function KoFooter() {
  const onContact = usePathname()?.startsWith("/ko/contact");
  return (
    <div className="ko-site">
      {!onContact && (
      <section className="bg-[#111] text-white">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-end justify-between gap-6 px-6 py-12 md:gap-8 md:px-8 md:py-[72px]">
          <div>
            <h2 className="ko-en m-0 text-[34px] font-extrabold leading-[1.1] tracking-[-2px] text-white md:text-[40px]">Get a Quote</h2>
            <p className="mt-3 text-[20px] text-[#BDBDBD]">문의하기</p>
          </div>
          <div className="flex flex-col items-start gap-5">
            <Link
              href="/ko/contact"
              className="inline-flex min-h-[44px] items-end border-b-[3px] border-[#FFC107] pb-1.5 text-[18px] font-bold text-white"
            >
              견적 요청하기 →
            </Link>
            <Link href="/ko/contact?tab=catalog" className="text-[15px] text-[#BDBDBD] underline-offset-4 hover:text-white hover:underline">
              카탈로그 요청하기
            </Link>
            <span className="text-[15px] text-[#BDBDBD]">
              {CONTACT.tel} · {CONTACT.email}
            </span>
          </div>
        </div>
      </section>
      )}
      <footer className="border-t border-[#262626] bg-[#111] text-[#8A8A8A]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-6 py-8 text-[13px] leading-[1.8] md:flex-row md:flex-wrap md:items-center md:justify-between md:px-8">
          <img src="/assets/logo-sekyung-h-white.png" alt="세경네트" width={817} height={217} className="h-6 w-auto self-start opacity-90" />
          <span>
            (주)세경네트 · {CONTACT.address} · 사업자등록번호 {CONTACT.bizNo}
          </span>
          <span>
            T. {CONTACT.tel} · F. {CONTACT.fax} · © {new Date().getFullYear()} Sekyung Net
          </span>
        </div>
      </footer>
    </div>
  );
}
