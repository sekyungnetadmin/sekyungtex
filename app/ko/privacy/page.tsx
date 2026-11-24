import type { Metadata } from "next";
import { CONTACT } from "@/components/ko/site";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 세경네트",
  alternates: { canonical: "/ko/privacy" },
};

const ROWS: [string, string][] = [
  ["처리 목적", "홈페이지 견적 문의 · 카탈로그 요청에 대한 답변"],
  ["처리 항목", "회사명, 담당자명, 연락처, 이메일, 문의 내용, 첨부파일 / 접속 기록(방문 통계)"],
  ["보유 기간", "문의 처리 후 3년, 이후 지체 없이 파기"],
  ["제3자 제공", "하지 않음 (법령에 근거가 있는 경우 제외)"],
  ["위탁 · 국외 이전", "Vercel Inc.(홈페이지 호스팅), Google LLC(메일 발송 · 방문 통계) — 미국 등 해외 서버"],
  ["파기 방법", "전자 파일은 복구할 수 없게 삭제, 출력물은 분쇄"],
  ["안전성 조치", "암호화 통신(HTTPS), 접근 권한 최소화"],
  ["정보주체 권리", "언제든 열람 · 정정 · 삭제 · 처리정지 요청 가능"],
  ["보호책임자", `박지은 (대표) · ${CONTACT.tel} · ${CONTACT.email}`],
];

export default function PrivacyPage() {
  return (
    <main className="ko-site bg-white">
      <section className="mx-auto max-w-[820px] px-6 pb-24 pt-14 md:px-8 md:pt-[100px]">
        <h1 className="m-0 text-[36px] font-black tracking-[-1.5px] md:text-[44px]">개인정보처리방침</h1>
        <p className="mt-4 text-[15px] leading-[1.8] text-[#555]">
          주식회사 세경네트는 「개인정보 보호법」에 따라 아래와 같이 개인정보를 처리합니다.
        </p>
        <dl className="mt-8 border-t border-[#111]">
          {ROWS.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[110px_1fr] gap-3 border-b border-[#E0E0E0] py-4 text-[14px] md:grid-cols-[160px_1fr] md:text-[15px]">
              <dt className="text-[#777]">{k}</dt>
              <dd className="m-0 leading-[1.7]">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-[13px] leading-[1.8] text-[#777]">
          개인정보 침해 신고 · 상담: 개인정보침해신고센터(국번 없이 118), 개인정보분쟁조정위원회(1833-6972)
          <br />
          시행일: 2026년 11월 24일
        </p>
      </section>
    </main>
  );
}
