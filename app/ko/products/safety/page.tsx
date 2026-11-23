import ProductPage, { Note } from "@/components/ko/ProductPage";
import { IMG } from "@/components/ko/site";

export const metadata = {
   title: "산업용 안전망 · 축구망 · 비구방지망 휀스 |Safety Net Manufacturer | 세경네트",
  description:
    "건설 현장 사망 사고 예방을 위한 추락방지망, 비계망, 낙하물 방지망, 산업용 보호망 전문 생산. KS/ISO 인증, 맞춤 제작 가능.",
  keywords: [
    "산업용 안전망",
    "추락방지망",
    "건설 안전망",
    "비계망",
    "낙하물 방지망",
    "공사용 보호망",
    "세경넷",
    "세경네트",
    "210합 안전망",
      "비구방지망 휀스",
  "축구장 휀스",
  "축구 비구방지용 그물망",
  "비구방지망 설치",
  "그물망 울타리",
  "그물망 휀스 설치",
  "그물망 휀스 시공",
      "industrial safety net",
    "fall protection net",
    "debris safety net",
    "construction safety net",
    "heavy-duty netting",
    "safety net manufacturer",
    "PE safety net",
    "축구망",
    "풋살망",
    "비구망",
    "sports safety net",
    "futsal net",
    "soccer net",
    "sports facility netting",
    "그물망 교체공사", 
    "net replacement service",
    "net installation service",
    "net construction service",
  ],
};

export default function Page() {
  return (
    <>
      <ProductPage
        en="SAFETY NET"
        kr="안전망 · 축구망"
        lead={<>축구장·풋살장 비구방지망,<br />건설 현장 추락·낙하물 방지망.</>}
        hero={IMG.safetyFlat}
        heroAlt="안전망 원단"
        install={true}
        features={[
    { title: "고강도 PE", desc: "축구망, 안전망으로 사용합니다." },
    { title: "UV 처리", desc: "야외에서 오래 써도 변형이 적습니다." },
    { title: "현장 맞춤", desc: "안전 기준과 현장 규격에 맞춰 만듭니다." }
        ]}
        specs={[
    { k: "메쉬", v: <>100mm<Note>(그 외 규격 주문 제작)</Note></> },
    { k: "굵기 · 합수", v: "주문 제작 (문의)" },
    { k: "구조", v: "무결망 · 결망" },
    { k: "원사", v: "HDPE" },
    { k: "색상", v: "녹색 · 검정 · 흰색(무결)" },
    { k: "적용", v: "추락방지망 · 낙하물 방지망 · 축구장 · 풋살장" }
        ]}
        keywords={["축구망", "축구골대망", "풋살망", "비구방지망 휀스", "그물망 울타리", "건설현장 추락방지망", "낙하물 방지망"]}
        photos={[
    { src: IMG.safetyRoll, alt: "안전망 출고 준비" },
    { src: IMG.safetyGreen, alt: "그린 안전망 원단" },
    { src: IMG.soccerNet, alt: "축구망 클로즈업" }
        ]}
      />
    </>
  );
}
