import Link from "next/link";
import { getPosts } from "@/lib/news";

export const metadata = {
  title: "News | 그물 정보 · 회사 소식 | 세경네트",
  description: "세경네트의 그물 정보 글과 회사 소식을 모았습니다. 골프망, 야구망, 안전망, 어망 소재와 시공 이야기.",
  alternates: { canonical: "https://sekyungtex.co.kr/ko/news" },
};

const TYPES = ["전체", "블로그", "뉴스"];

export default function NewsPage({ searchParams }: { searchParams?: { type?: string } }) {
  const all = getPosts();
  const current = searchParams?.type && TYPES.includes(searchParams.type) ? searchParams.type : "전체";
  const posts = current === "전체" ? all : all.filter((p) => p.type === current);

  return (
    <main className="ko-site bg-white">
      <section className="mx-auto flex max-w-[1280px] flex-wrap items-end justify-between gap-5 px-6 pb-10 pt-14 md:gap-8 md:px-8 md:pb-20 md:pt-[120px]">
        <div className="flex flex-col gap-5">
          <span className="ko-en text-[13px] font-semibold tracking-[6px] text-[#777]">소식 · 정보</span>
          <h1 className="ko-en m-0 text-[44px] font-extrabold leading-[1.05] tracking-[-2px] md:text-[80px] md:tracking-[-3px]">News</h1>
        </div>
        <p className="m-0 max-w-[420px] text-[17px] leading-[1.8] text-[#555]">
          그물 정보와 회사 소식을
          <br />
          이곳에 정리합니다.
        </p>
      </section>

      <nav aria-label="카테고리" className="mx-auto flex max-w-[1280px] flex-wrap gap-8 px-6 pb-4 md:px-8">
        {TYPES.map((t) => (
          <Link
            key={t}
            href={t === "전체" ? "/ko/news" : `/ko/news?type=${encodeURIComponent(t)}`}
            className={`inline-flex min-h-[44px] items-center border-b-2 py-2.5 text-[15px] ${
              t === current ? "border-[#FFC107] font-bold text-[#111]" : "border-transparent text-[#777]"
            }`}
          >
            {t}
          </Link>
        ))}
      </nav>

      <section className="mx-auto flex max-w-[1280px] flex-col border-t border-[#111] px-6 pb-20 md:px-8 md:pb-[140px]">
        {posts.length === 0 && <p className="py-20 text-center text-[16px] text-[#777]">아직 등록된 글이 없습니다.</p>}
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/ko/news/${p.slug}`}
            className="grid grid-cols-1 items-center gap-3 border-b border-[#E0E0E0] py-9 md:grid-cols-6 md:gap-6"
          >
            <span className="text-[14px] text-[#777]">
              {p.type}
              {p.topic && ` / ${p.topic}`}
            </span>
            <span className="flex flex-col gap-2 md:col-span-4">
              <span className="text-[22px] font-bold tracking-[-0.5px] md:text-[24px]">{p.title}</span>
              {p.summary && <span className="text-[15px] text-[#555]">{p.summary}</span>}
            </span>
            <span className="ko-en text-[13px] text-[#777] md:text-right">{p.date.slice(0, 7).replace("-", ".")}</span>
          </Link>
        ))}
      </section>
    </main>
  );
}
