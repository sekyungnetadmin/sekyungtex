import type { Metadata } from "next";
import { CONTACT } from "@/components/ko/site";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 세경네트",
  alternates: { canonical: "/ko/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="ko-site bg-white">
      <section className="mx-auto max-w-[720px] px-6 pb-24 pt-14 text-[15px] leading-[1.9] text-[#444] md:px-8 md:pt-[100px]">
        <h1 className="m-0 mb-6 text-[24px] font-bold text-[#111]">개인정보처리방침</h1>
        <p className="m-0">
          세경네트는 문의 답변을 위해 회사명, 담당자명, 연락처, 이메일, 문의 내용을 받으며, 처리 후 3년이 지나면 파기합니다.
        </p>
        <p className="m-0 mt-3">
          받은 정보는 다른 곳에 제공하지 않습니다. 홈페이지 운영(Vercel)과 메일 발송(Google)을 위해 해외 서버를 이용합니다.
        </p>
        <p className="m-0 mt-3">
          열람 · 수정 · 삭제를 원하시면 아래로 연락주세요.
          <br />
          보호책임자 박지은 · {CONTACT.tel} · {CONTACT.email}
        </p>
        <p className="m-0 mt-6 text-[13px] text-[#999]">시행일 2026년 11월 24일</p>
      </section>
    </main>
  );
}
