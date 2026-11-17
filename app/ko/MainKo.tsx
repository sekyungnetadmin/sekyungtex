import Link from "next/link";
import Image from "next/image";
import { IMG, PRODUCTS } from "@/components/ko/site";
import { getPosts } from "@/lib/news";

const SLIDES = [
  { img: IMG.golfClose, en: "From Yarn to Net.", kr: "원사부터 완제품까지, 직접 짭니다.", delay: "0s" },
  { img: IMG.baseballField, en: "Still Weaving.", kr: "끊임없이 고민합니다.", delay: "6s" },
  { img: IMG.knitting, en: "Nets, Made Right.", kr: "현장에 맞게, 제대로 만듭니다.", delay: "12s" },
];

const STATS = [
  { big: "100%", small: "원사부터 자체 생산" },
  { big: "10,000+", small: "연간 생산 세트" },
  { big: "전국", small: "지자체 · 골프장 납품" },
  { big: "1~2일", small: "5,000㎡ 미만 납품" },
];

const PROCESS = ["원사 준비", "와인딩", "제망", "재단", "검수 · 포장"];

const LABEL = "ko-en text-[13px] font-semibold tracking-[6px] text-[#777]";
const H2 = "ko-en m-0 text-[40px] md:text-[52px] font-extrabold leading-[1.1] tracking-[-2px]";

export default function MainKo() {
  const posts = getPosts().slice(0, 3);

  return (
    <main className="ko-site bg-white">
      {/* HERO */}
      <section className="relative h-[620px] overflow-hidden bg-[#0E0E0E] text-white md:h-[760px]">
        {SLIDES.map((s, i) => (
          <Image
            key={s.en}
            src={s.img}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="sk-s object-cover"
            style={{ animationDelay: s.delay }}
          />
        ))}
        <span className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/85" />
        <div className="relative mx-auto flex h-full max-w-[1280px] flex-col justify-end gap-6 px-6 pb-[72px] md:px-8">
          <span className="ko-en text-[13px] font-semibold tracking-[6px] text-[#D4D4D4]">SEKYUNG NET</span>
          <div className="relative h-[150px]">
            {SLIDES.map((s, i) => (
              <div key={s.en} className="sk-t absolute bottom-0 left-0 flex flex-col gap-5" style={{ animationDelay: s.delay }}>
                {i === 0 ? (
                  <h1 className="ko-en m-0 whitespace-nowrap text-[48px] font-extrabold leading-none tracking-[-3px] md:text-[96px]">{s.en}</h1>
                ) : (
                  <p className="ko-en m-0 whitespace-nowrap text-[48px] font-extrabold leading-none tracking-[-3px] md:text-[96px]">{s.en}</p>
                )}
                <p className="m-0 text-[17px] text-[#E8E8E8] md:text-[20px]">{s.kr}</p>
              </div>
            ))}
          </div>
          <div className="ko-en mt-6 flex items-center gap-4 text-[13px] font-semibold text-[#BDBDBD]">
            <span className="relative block h-4 w-5 text-white">
              {SLIDES.map((s, i) => (
                <span key={i} className="sk-n absolute left-0 top-0" style={{ animationDelay: s.delay }}>
                  0{i + 1}
                </span>
              ))}
            </span>
            <span className="relative block h-0.5 w-40 overflow-hidden bg-[#555]">
              <span className="sk-bar absolute left-0 top-0 block h-0.5 bg-[#FFC107]" />
            </span>
            <span>03</span>
          </div>
        </div>
        <div className="ko-en absolute bottom-[72px] right-12 hidden flex-col items-center gap-3 text-[11px] font-semibold tracking-[4px] text-[#BDBDBD] md:flex">
          <span style={{ writingMode: "vertical-rl" }}>SCROLL</span>
          <span className="relative block h-16 w-px overflow-hidden bg-[#444]">
            <span className="sk-line absolute inset-0 block bg-white" />
          </span>
        </div>
      </section>

      {/* BUSINESS */}
      <section id="products" className="mx-auto flex max-w-[1280px] flex-col gap-12 px-6 pt-[140px] md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <span className={LABEL}>사업영역</span>
            <h2 className={H2}>Business</h2>
          </div>
          <p className="m-0 max-w-[380px] text-[16px] leading-[1.8] text-[#555]">스포츠 · 산업안전 · 수산</p>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
          {PRODUCTS.map((p) => (
            <Link key={p.href} href={p.href} className="sk-card relative block aspect-[3/4] overflow-hidden bg-[#1A1A1A] text-white">
              <Image src={p.img} alt={p.kr} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover" />
              <span className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/75" />
              <span className="absolute bottom-6 left-6 right-6 flex flex-col gap-1.5">
                <span className="ko-en text-[12px] font-semibold italic tracking-[2px] text-[#FFC107]">{p.en}</span>
                <span className="text-[20px] font-bold text-white md:text-[22px]">{p.kr}</span>
              </span>
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-8 pt-6 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.big} className="flex flex-col gap-1.5 border-t border-[#111] pt-5">
              <span className="ko-en text-[30px] font-extrabold md:text-[34px]">{s.big}</span>
              <span className="text-[15px] text-[#555]">{s.small}</span>
            </div>
          ))}
        </div>
      </section>

      {/* MANUFACTURING */}
      <section id="about" className="mx-auto max-w-[1280px] px-6 pt-[140px] md:px-8">
        <div className="relative overflow-hidden bg-[#141414] text-white">
          <Image src={IMG.knitting} alt="세경네트 제망 공장" fill sizes="100vw" className="object-cover" />
          <span className="absolute inset-0 bg-gradient-to-b from-black/55 to-black/85" />
          <div className="relative flex flex-col gap-4 px-8 pb-14 pt-[120px] md:px-14">
            <span className="ko-en text-[13px] font-semibold tracking-[6px] text-[#D4D4D4]">생산 공정</span>
            <h2 className={`${H2} text-white`}>Manufacturing Process</h2>
            <div className="grid grid-cols-2 pt-12 md:grid-cols-5">
              {PROCESS.map((t, i) => (
                <div key={t} className="flex flex-col gap-2 border-b border-white/35 py-5">
                  <span className="ko-en text-[12px] font-semibold text-[#BDBDBD]">0{i + 1}</span>
                  <span className="text-[18px] font-bold text-white">
                    {t}
                    {i < PROCESS.length - 1 && <span className="font-normal text-[#8A8A8A]" aria-hidden="true"> →</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEWS — 글이 있을 때만 표시 */}
      {posts.length > 0 ? (
        <section className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-12 px-6 py-[140px] md:grid-cols-3 md:px-8">
          <div className="flex flex-col gap-4">
            <span className={LABEL}>소식 · 정보</span>
            <h2 className={H2}>News</h2>
            <Link href="/ko/news" className="mt-2 self-start border-b-2 border-[#FFC107] pb-1 text-[15px] font-bold">
              전체 글 보기
            </Link>
          </div>
          <div className="flex flex-col md:col-span-2">
            {posts.map((p) => (
              <Link key={p.slug} href={`/ko/news/${p.slug}`} className="flex min-h-[44px] items-center justify-between gap-6 border-b border-[#E0E0E0] py-7">
                <span className="flex flex-col gap-1.5">
                  <span className="text-[13px] text-[#777]">
                    {p.type}
                    {p.topic && ` / ${p.topic}`}
                  </span>
                  <span className="text-[20px] font-bold">{p.title}</span>
                </span>
                <span className="text-[20px]" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <div className="h-[140px]" />
      )}
    </main>
  );
}
