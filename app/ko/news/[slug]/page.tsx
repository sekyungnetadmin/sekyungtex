import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPosts, mdToHtml } from "@/lib/news";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | 세경네트`,
    description: post.summary,
    alternates: { canonical: `https://sekyungtex.co.kr/ko/news/${post.slug}` },
  };
}

export default function NewsPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <main className="ko-site bg-white">
      <article className="mx-auto flex max-w-[760px] flex-col gap-7 px-6 pb-[140px] pt-24 md:px-8 md:pt-[120px]">
        <Link href="/ko/news" className="text-[14px] text-[#777]">
          ← News
        </Link>
        <span className="ko-en text-[13px] font-semibold tracking-[4px] text-[#777]">
          {post.type}
          {post.topic && ` / ${post.topic}`}
          {post.date && ` · ${post.date.slice(0, 7).replace("-", ".")}`}
        </span>
        <h1 className="m-0 text-[34px] font-black leading-[1.25] tracking-[-1.5px] md:text-[48px] md:tracking-[-2px]">{post.title}</h1>
        <div className="ko-prose" dangerouslySetInnerHTML={{ __html: mdToHtml(post.body) }} />
      </article>
    </main>
  );
}
