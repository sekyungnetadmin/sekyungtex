import "../globals.css";
import KrTopNav from "./KrTopNav";
import KoFooter from "./KoFooter";
import { ReactNode } from "react";

export const metadata = {
  title: "골프 연습장 안전망 및 스포츠 네트 제조업체 | 세경네트",
  description:
    "골프장 안전망, 야구 배팅케이지망, 산업용 안전망 제조 전문 기업.",
};

export default function Page() {
  return <main><h1>산업용 스포츠 네트 제조업체</h1></main>;
}


export default function KoLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="font-ko">
        <KrTopNav />
        <main>{children}</main>
        <KoFooter />
      </body>
    </html>
  );
}