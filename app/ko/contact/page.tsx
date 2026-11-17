import ContactForm from "@/components/ko/ContactForm";
import { CONTACT } from "@/components/ko/site";

export const metadata = {
  title: "견적 문의 | 골프망 · 야구망 · 안전망 · 어망 | 세경네트",
  description: "골프망, 야구망, 안전망, 스키장 안전망, 어망 견적 문의 및 카탈로그 요청. 도면이나 현장 사진을 보내주시면 빠르게 회신드립니다.",
  alternates: { canonical: "https://sekyungtex.co.kr/ko/contact" },
};

export default function ContactPage({ searchParams }: { searchParams?: { tab?: string } }) {
  return (
    <main className="ko-site bg-white">
      <section className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 pb-20 pt-14 md:grid-cols-2 md:gap-16 md:px-8 md:pb-[120px] md:pt-[120px]">
        <div className="flex flex-col gap-4 md:gap-6">
          <span className="ko-en text-[13px] font-semibold tracking-[6px] text-[#777]">CONTACT</span>
          <h1 className="ko-en m-0 text-[44px] font-extrabold leading-[1.05] tracking-[-2px] md:text-[72px] md:tracking-[-3px]">Get a Quote</h1>
          <p className="m-0 text-[15px] leading-[1.8] text-[#555] md:text-[17px]">
            도면이 있으면 함께 보내주세요.
            <br />
            없으면 현장 사진과 대략적인 규격만 있어도 됩니다.
            <br />
            제품 카탈로그도 요청하실 수 있습니다.
          </p>
          <div className="mt-2 flex flex-col gap-2.5 border-t border-[#111] pt-5 text-[15px] md:mt-6 md:gap-3 md:pt-6 md:text-[16px]">
            <span className="flex">
              <span className="inline-block w-14 shrink-0 text-[#777]">전화</span>
              <a href={`tel:${CONTACT.tel}`}>{CONTACT.tel}</a>
            </span>
            <span className="flex">
              <span className="inline-block w-14 shrink-0 text-[#777]">팩스</span>
              {CONTACT.fax}
            </span>
            <span className="flex">
              <span className="inline-block w-14 shrink-0 text-[#777]">이메일</span>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </span>
            <span className="flex">
              <span className="inline-block w-14 shrink-0 text-[#777]">주소</span>
              {CONTACT.address}
            </span>
          </div>
        </div>
        <ContactForm initialTab={searchParams?.tab === "catalog" ? "catalog" : "quote"} />
      </section>
    </main>
  );
}
