import Image from "next/image";
import type { ReactNode } from "react";

export type Spec = { k: string; v: ReactNode };

type Props = {
  en: string;
  kr: string;
  lead: ReactNode;
  hero: string;
  heroAlt: string;
  features: { title: string; desc: string }[];
  specs: Spec[];
  photos: { src: string; alt: string }[];
  install?: boolean;
};

const LABEL = "ko-en text-[13px] font-semibold tracking-[6px] text-[#777]";

const STEPS = [
  { t: "현장 확인", d: "구조물, 기존 와이어, 장력 조건을 보고 시공 방식을 정합니다." },
  { t: "제작 · 자재 준비", d: "규격에 맞춰 망을 짜고 와이어와 부자재를 미리 준비합니다." },
  { t: "설치 · 장력 조정", d: "균일한 장력으로 설치하고 고정 상태를 점검합니다." },
  { t: "마감 · 점검", d: "연결부와 마감을 확인하고 현장을 정리합니다." },
];

const NEED = [
  { k: "도면", v: "없으면 현장 사진 (전체 + 설치 구간)" },
  { k: "대략 규격", v: "높이 · 폭 · 길이" },
  { k: "현장 상태", v: "신규 · 교체 · 부분 보수" },
  { k: "지역 · 일정", v: "지역과 희망 날짜" },
];

export const Note = ({ children }: { children: ReactNode }) => (
  <span className="font-normal text-[#777]"> {children}</span>
);

export default function ProductPage({ en, kr, lead, hero, heroAlt, features, specs, photos, install = true }: Props) {
  return (
    <main className="ko-site bg-white">
      <section className="mx-auto flex max-w-[1280px] flex-wrap items-end justify-between gap-8 px-6 pb-16 pt-24 md:px-8 md:pt-[120px]">
        <div className="flex flex-col gap-5">
          <span className={LABEL}>{en}</span>
          <h1 className="m-0 text-[52px] font-black leading-[1.05] tracking-[-3px] md:text-[80px] md:tracking-[-4px]">{kr}</h1>
        </div>
        <p className="m-0 max-w-[420px] text-[17px] leading-[1.8] text-[#555]">{lead}</p>
      </section>

      <section className="relative mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="relative aspect-[16/9] overflow-hidden bg-[#E8E8E8] md:aspect-[16/7]">
          <Image src={hero} alt={heroAlt} fill priority sizes="100vw" className="object-cover" />
        </div>
        <span className="absolute bottom-0 left-6 h-1.5 w-16 bg-[#FFC107] md:left-8" />
      </section>

      <section className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 py-24 md:grid-cols-3 md:px-8 md:py-[120px]">
        {features.map((f, i) => (
          <div key={f.title} className="flex flex-col gap-3.5 border-t border-[#111] pt-6">
            <span className="ko-en text-[13px] font-semibold tracking-[2px] text-[#777]">0{i + 1}</span>
            <span className="text-[22px] font-bold tracking-[-0.5px]">{f.title}</span>
            <span className="text-[15px] leading-[1.7] text-[#555]">{f.desc}</span>
          </div>
        ))}
      </section>

      <section className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-8 px-6 pb-24 md:grid-cols-3 md:gap-12 md:px-8 md:pb-[120px]">
        <span className={LABEL}>SPEC</span>
        <div className="flex flex-col md:col-span-2">
          {specs.map((s) => (
            <div key={s.k} className="grid grid-cols-3 gap-4 border-b border-[#E0E0E0] py-[18px] text-[16px]">
              <span className="text-[#777]">{s.k}</span>
              <span className="col-span-2 font-medium">{s.v}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1280px] grid-cols-1 gap-2 px-6 pb-24 sm:grid-cols-3 md:px-8 md:pb-[120px]">
        {photos.map((p) => (
          <div key={p.src} className="relative aspect-[3/4] overflow-hidden bg-[#E8E8E8]">
            <Image src={p.src} alt={p.alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
          </div>
        ))}
      </section>

      {install && (
        <section className="bg-[#F5F5F5]">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-14 px-6 py-24 md:px-8 md:py-[120px]">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="flex flex-col gap-4">
                <span className={LABEL}>INSTALLATION</span>
                <h2 className="m-0 text-[36px] font-black tracking-[-1.5px] md:text-[40px]">설치 문의</h2>
              </div>
              <p className="m-0 max-w-[420px] text-[16px] leading-[1.8] text-[#555]">
                전국 출장 시공이 가능하고,
                <br />
                운영 중인 시설도 일정을 맞춰 작업합니다.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s, i) => (
                <div key={s.t} className="flex flex-col gap-3 border-t border-[#111] pt-5">
                  <span className="ko-en text-[13px] font-semibold tracking-[2px] text-[#777]">STEP 0{i + 1}</span>
                  <span className="text-[20px] font-bold">{s.t}</span>
                  <span className="text-[15px] leading-[1.7] text-[#555]">{s.d}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-6 border-l-4 border-[#FFC107] bg-white px-8 py-7">
              <span className="text-[16px] font-bold">이것만 보내주세요</span>
              <div className="grid flex-1 basis-[600px] grid-cols-2 gap-6 md:grid-cols-4">
                {NEED.map((n) => (
                  <div key={n.k} className="flex flex-col gap-1">
                    <span className="text-[15px] font-bold">{n.k}</span>
                    <span className="text-[14px] text-[#555]">{n.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
