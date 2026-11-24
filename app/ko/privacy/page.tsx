import type { Metadata } from "next";
import { CONTACT } from "@/components/ko/site";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 세경네트",
  alternates: { canonical: "/ko/privacy" },
};

const EFFECTIVE = "2026년 11월 24일";

export default function PrivacyPage() {
  return (
    <main className="ko-site bg-white">
      <article className="ko-prose mx-auto max-w-[820px] px-6 pb-24 pt-14 md:px-8 md:pt-[100px]">
        <h1 className="!mb-6 !text-[36px] !font-black !tracking-[-1.5px] md:!text-[44px]">개인정보처리방침</h1>
        <p>
          주식회사 세경네트(이하 &quot;회사&quot;)는 「개인정보 보호법」에 따라 정보주체의 개인정보를 보호하고 관련 고충을 원활하게
          처리하기 위하여 다음과 같이 개인정보처리방침을 수립 · 공개합니다.
        </p>

        <h2>1. 개인정보의 처리 목적</h2>
        <p>회사는 홈페이지 견적 문의 및 카탈로그 요청에 대한 확인 · 답변 · 자료 발송을 위해서만 개인정보를 처리합니다.</p>

        <h2>2. 처리하는 개인정보 항목</h2>
        <ul>
          <li>견적 문의: 회사명, 연락처, 이메일, 문의 내용, 첨부파일(도면 · 사진 등)</li>
          <li>카탈로그 요청: 회사명, 담당자명, 연락처, 이메일</li>
          <li>자동 수집: 접속 기록, 접속 IP, 브라우저 정보(방문 통계 · 보안 목적)</li>
        </ul>

        <h2>3. 개인정보의 처리 및 보유 기간</h2>
        <p>문의 처리 완료 후 3년간 보관한 뒤 지체 없이 파기합니다. 다른 법령에서 보관을 정한 경우에는 그 기간 동안 보관합니다.</p>

        <h2>4. 개인정보의 제3자 제공</h2>
        <p>회사는 정보주체의 개인정보를 제3자에게 제공하지 않습니다. 다만 법령에 근거가 있는 경우는 예외로 합니다.</p>

        <h2>5. 개인정보 처리의 위탁 및 국외 이전</h2>
        <p>회사는 홈페이지 운영과 문의 메일 발송을 위해 아래 업체에 업무를 위탁하고 있으며, 이 과정에서 개인정보가 국외 서버에 저장 · 전송될 수 있습니다.</p>
        <table>
          <thead>
            <tr><th>수탁업체</th><th>위탁 업무</th><th>이전 국가</th></tr>
          </thead>
          <tbody>
            <tr><td>Vercel Inc.</td><td>홈페이지 호스팅</td><td>미국 등</td></tr>
            <tr><td>Google LLC</td><td>문의 메일 발송(Gmail), 방문 통계(Google Analytics)</td><td>미국 등</td></tr>
          </tbody>
        </table>
        <p>문의 제출 시 위 서버를 통해 즉시 회사 메일로 전송되며, 위탁 업체는 위탁 목적 외로 개인정보를 이용하지 않습니다.</p>

        <h2>6. 개인정보의 파기</h2>
        <p>보유 기간이 지나거나 처리 목적이 달성된 개인정보는 지체 없이 파기합니다. 전자 파일은 복구할 수 없는 방법으로 삭제하고, 출력물은 분쇄합니다.</p>

        <h2>7. 정보주체의 권리</h2>
        <p>정보주체는 언제든지 자신의 개인정보 열람 · 정정 · 삭제 · 처리정지를 요청할 수 있으며, 회사는 지체 없이 조치합니다.</p>

        <h2>8. 개인정보의 안전성 확보 조치</h2>
        <p>회사는 암호화 통신(HTTPS) 사용, 접근 권한 최소화 등 개인정보 보호를 위해 필요한 조치를 하고 있습니다.</p>

        <h2>9. 개인정보 보호책임자</h2>
        <ul>
          <li>책임자: 박지은 (대표)</li>
          <li>연락처: {CONTACT.tel}</li>
          <li>이메일: {CONTACT.email}</li>
        </ul>
        <p>
          개인정보 침해에 대한 신고나 상담은 개인정보침해신고센터(privacy.kisa.or.kr, 국번 없이 118), 개인정보분쟁조정위원회(www.kopico.go.kr,
          1833-6972)에 문의할 수 있습니다.
        </p>

        <h2>10. 개인정보처리방침의 변경</h2>
        <p>이 방침은 {EFFECTIVE}부터 적용됩니다. 내용이 변경되는 경우 홈페이지를 통해 공지합니다.</p>
      </article>
    </main>
  );
}
