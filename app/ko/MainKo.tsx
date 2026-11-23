import Link from "next/link";
import Image from "next/image";
import { IMG, PRODUCTS } from "@/components/ko/site";
import { getPosts } from "@/lib/news";

const SLIDES = [
  { img: IMG.golfClose, en: "From Yarn to Net.", kr: "원사부터 완제품까지, 직접 짭니다.", delay: "0s" },
  { img: IMG.golfRange, en: "Still Weaving.", kr: "끊임없이 고민합니다.", delay: "6s" },
  { img: IMG.baseballStadium, en: "Nets, Made Right.", kr: "현장에 맞게, 제대로 만듭니다.", delay: "12s" },
];

const STATS = [
  { big: "100%", small: "원사부터 자체 생산" },
  { big: "10,000+", small: "연간 생산 세트" },
  { big: "전국", small: "지자체 · 골프장 납품" },
  { big: "1~2일", small: "5,000㎡ 미만 납품" },
];

const PROCESS = [
  { t: "원사 준비", d: "UV 안정제를 넣은 PE 원사 입고 · 관리" },
  { t: "와인딩", d: "제망에 맞게 원사를 감는 공정" },
  { t: "제망", d: "무결망 · 결망을 규격에 맞춰 생산" },
  { t: "재단", d: "현장 도면에 맞춘 재단 · 가공" },
  { t: "검수 · 포장", d: "규격 · 외관 검수 후 출고" },
];

const LABEL = "ko-en text-[12px] md:text-[13px] font-semibold tracking-[4px] md:tracking-[6px] text-[#777]";
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
            quality={90}
            sizes="100vw"
            className="sk-s object-cover"
            style={{ animationDelay: s.delay }}
          />
        ))}
        <span className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/85" />
        <div className="relative mx-auto flex h-full max-w-[1280px] flex-col justify-end gap-6 px-6 pb-[72px] md:px-8">
          <h1 className="m-0 text-[13px] font-semibold tracking-[1px] text-[#D4D4D4] md:text-[15px]">골프망 · 야구망 · 안전망 · 스키망 · 어망 제조 <span className="text-[#FFC107]">|</span> 세경네트</h1>
          <div className="relative h-[150px]">
            {SLIDES.map((s, i) => (
              <div key={s.en} className="sk-t absolute bottom-0 left-0 flex flex-col gap-5" style={{ animationDelay: s.delay }}>
                <p className="ko-en m-0 whitespace-nowrap text-[48px] font-extrabold leading-none tracking-[-3px] md:text-[96px]">{s.en}</p>
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
      <section id="products" className="mx-auto flex max-w-[1280px] flex-col gap-8 px-6 md:gap-12 pt-20 md:px-8 md:pt-[140px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <h2 className={`${LABEL} m-0`}>사업영역 · 주요 제품</h2>
            <p className={`${H2} m-0`}>Business</p>
          </div>
          <p className="m-0 max-w-[380px] text-[16px] leading-[1.8] text-[#555]">스포츠 · 산업안전 · 수산</p>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
          {PRODUCTS.map((p) => (
            <Link key={p.href} href={p.href} className="sk-card relative block aspect-[4/5] overflow-hidden first:col-span-2 first:aspect-[16/9] md:aspect-[3/4] md:first:col-span-1 md:first:aspect-[3/4] bg-[#1A1A1A] text-white">
              <Image src={p.img} alt={p.kr} fill quality={90} sizes="(max-width: 768px) 50vw, 20vw" className="object-cover" />
              <span className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/75" />
              <span className="absolute bottom-4 left-4 right-4 flex flex-col gap-1 md:bottom-6 md:left-6 md:right-6 md:gap-1.5">
                <span className="ko-en text-[10px] font-semibold italic tracking-[1.5px] text-[#FFC107] md:text-[12px] md:tracking-[2px]">{p.en}</span>
                <span className="text-[17px] font-bold leading-snug text-white md:text-[22px]">{p.kr}</span>
                <span className="hidden text-[13px] leading-snug text-[#D4D4D4] sm:block">{p.desc}</span>
              </span>
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 pt-2 md:grid-cols-4 md:gap-8 md:pt-6">
          {STATS.map((s) => (
            <div key={s.big} className="flex flex-col gap-1.5 border-t border-[#111] pt-5">
              <span className="ko-en text-[26px] font-extrabold md:text-[34px]">{s.big}</span>
              <span className="text-[15px] text-[#555]">{s.small}</span>
            </div>
          ))}
        </div>
      </section>

      {/* MANUFACTURING */}
      <section id="about" className="mx-auto max-w-[1280px] px-6 pt-20 md:px-8 md:pt-[140px]">
        <div className="relative overflow-hidden bg-[#141414] text-white">
          <Image src={IMG.knitting} alt="세경네트 제망 공장" fill sizes="100vw" className="object-cover" />
          <span className="absolute inset-0 bg-gradient-to-b from-black/55 to-black/85" />
          <div className="relative flex flex-col gap-4 px-6 pb-10 pt-16 md:px-14 md:pb-14 md:pt-[120px]">
            <h2 className="ko-en m-0 text-[13px] font-semibold tracking-[6px] text-[#D4D4D4]">그물 생산 공정</h2>
            <p className={`${H2} m-0 text-white`}>Manufacturing Process</p>
            <p className="m-0 max-w-[620px] text-[15px] leading-[1.8] text-[#D4D4D4] md:text-[16px]">
              세경네트는 부산 사하구에서 골프망, 야구망, 축구망, 건설 안전망, 스키장 안전망, 어망을 원사부터 직접 생산하는 그물 제조업체입니다.
            </p>
            <div className="grid grid-cols-2 gap-x-6 pt-6 md:grid-cols-5 md:gap-x-0 md:pt-12">
              {PROCESS.map(({ t, d }, i) => (
                <div key={t} className="flex flex-col gap-2 border-b border-white/35 py-5">
                  <span className="ko-en text-[12px] font-semibold text-[#BDBDBD]">0{i + 1}</span>
                  <span className="text-[16px] font-bold text-white md:text-[18px]">
                    {t}
                    {i < PROCESS.length - 1 && <span className="hidden font-normal text-[#8A8A8A] md:inline" aria-hidden="true"> →</span>}
                  </span>
                  <span className="pr-4 text-[13px] leading-[1.6] text-[#BDBDBD]">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEWS — 글이 있을 때만 표시 */}
      {posts.length > 0 ? (
        <section className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-8 px-6 py-20 md:grid-cols-3 md:gap-12 md:py-[140px] md:px-8">
          <div className="flex flex-col gap-4">
            <h2 className={`${LABEL} m-0`}>소식 · 정보</h2>
            <p className={`${H2} m-0`}>News</p>
            <Link href="/ko/news" className="mt-2 self-start border-b-2 border-[#FFC107] pb-1 text-[15px] font-bold">
              전체 글 보기
            </Link>
          </div>
          <div className="flex flex-col md:col-span-2">
            {posts.map((p) => (
              <Link key={p.slug} href={`/ko/news/${p.slug}`} className="flex min-h-[44px] items-center justify-between gap-6 border-b border-[#E0E0E0] py-5 md:py-7">
                <span className="flex flex-col gap-1.5">
                  <span className="text-[13px] text-[#777]">
                    {p.type}
                    {p.topic && ` / ${p.topic}`}
                  </span>
                  <span className="text-[17px] font-bold md:text-[20px]">{p.title}</span>
                </span>
                <span className="text-[20px]" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <div className="h-20 md:h-[140px]" />
      )}
    </main>
  );
}
