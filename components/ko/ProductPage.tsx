import Image from "next/image";
import type { ReactNode } from "react";

export type Spec = { k: string; v: ReactNode };

type Props = {
  en: string;
  kr: string;
  lead: ReactNode;
  hero: string;
  heroAlt: string;
  heroPos?: string;
  features: { title: string; desc: string }[];
  specs: Spec[];
  photos: { src: string; alt: string }[];
  install?: boolean;
};

const LABEL = "ko-en text-[12px] md:text-[13px] font-semibold tracking-[4px] md:tracking-[6px] text-[#777]";

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

export default function ProductPage({ en, kr, lead, hero, heroAlt, heroPos, features, specs, photos, install = true }: Props) {
  return (
    <main className="ko-site bg-white">
      <section className="mx-auto flex max-w-[1280px] flex-col justify-between gap-5 px-6 pb-10 pt-14 md:flex-row md:flex-wrap md:items-end md:gap-8 md:px-8 md:pb-16 md:pt-[120px]">
        <div className="flex flex-col gap-3 md:gap-5">
          <span className={LABEL}>{en}</span>
          <h1 className="m-0 text-[42px] font-black leading-[1.05] tracking-[-2px] md:text-[80px] md:tracking-[-4px]">{kr}</h1>
        </div>
        <p className="m-0 max-w-[420px] text-[16px] leading-[1.75] text-[#555] md:text-[17px]">{lead}</p>
      </section>

      <section className="relative mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#E8E8E8] sm:aspect-[16/9] md:aspect-[16/7]">
          <Image src={hero} alt={heroAlt} fill priority quality={90} sizes="100vw" className="object-cover" style={heroPos ? { objectPosition: heroPos } : undefined} />
        </div>
        <span className="absolute bottom-0 left-6 h-1.5 w-16 bg-[#FFC107] md:left-8" />
      </section>

      <section className="mx-auto grid max-w-[1280px] grid-cols-1 gap-7 px-6 py-14 md:grid-cols-3 md:gap-12 md:px-8 md:py-[120px]">
        {features.map((f, i) => (
          <div key={f.title} className="flex flex-col gap-2 border-t border-[#111] pt-4 md:gap-3.5 md:pt-6">
            <span className="ko-en text-[13px] font-semibold tracking-[2px] text-[#777]">0{i + 1}</span>
            <span className="text-[19px] font-bold tracking-[-0.5px] md:text-[22px]">{f.title}</span>
            <span className="text-[15px] leading-[1.7] text-[#555]">{f.desc}</span>
          </div>
        ))}
      </section>

      <section className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-4 px-6 pb-14 md:grid-cols-3 md:gap-12 md:px-8 md:pb-[120px]">
        <span className={LABEL}>SPEC</span>
        <div className="flex flex-col md:col-span-2">
          {specs.map((s) => (
            <div key={s.k} className="grid grid-cols-[80px_1fr] gap-3 border-b border-[#E0E0E0] py-3.5 text-[15px] md:grid-cols-3 md:gap-4 md:py-[18px] md:text-[16px]">
              <span className="text-[#777]">{s.k}</span>
              <span className="font-medium md:col-span-2">{s.v}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-[1280px] snap-x snap-mandatory gap-2 overflow-x-auto px-6 pb-14 sm:grid sm:grid-cols-3 sm:overflow-visible md:px-8 md:pb-[120px]">
        {photos.map((p) => (
          <div key={p.src} className="relative aspect-[3/4] w-[72%] shrink-0 snap-start overflow-hidden bg-[#E8E8E8] sm:w-auto">
            <Image src={p.src} alt={p.alt} fill quality={90} sizes="(max-width: 640px) 80vw, 33vw" className="object-cover" />
          </div>
        ))}
      </section>

      {install && (
        <section className="bg-[#F5F5F5]">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-6 py-14 md:gap-14 md:px-8 md:py-[120px]">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="flex flex-col gap-4">
                <span className={LABEL}>INSTALLATION</span>
                <h2 className="m-0 text-[32px] font-black tracking-[-1.5px] md:text-[40px]">설치 문의</h2>
              </div>
              <p className="m-0 max-w-[420px] text-[15px] leading-[1.75] text-[#555] md:text-[16px]">
                전국 출장 시공이 가능하고,
                <br />
                운영 중인 시설도 일정을 맞춰 작업합니다.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
              {STEPS.map((s, i) => (
                <div key={s.t} className="flex flex-col gap-1.5 border-t border-[#111] pt-4 md:gap-3 md:pt-5">
                  <span className="ko-en text-[13px] font-semibold tracking-[2px] text-[#777]">STEP 0{i + 1}</span>
                  <span className="text-[17px] font-bold md:text-[20px]">{s.t}</span>
                  <span className="text-[14px] leading-[1.7] text-[#555] md:text-[15px]">{s.d}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-5 border-l-4 border-[#FFC107] bg-white px-5 py-6 md:gap-6 md:px-8 md:py-7">
              <span className="text-[16px] font-bold">이것만 보내주세요</span>
              <div className="grid flex-1 basis-full grid-cols-1 gap-4 sm:grid-cols-2 md:basis-[600px] md:grid-cols-4 md:gap-6">
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
