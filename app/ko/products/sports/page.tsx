import ProductPage, { Note } from "@/components/ko/ProductPage";
import { IMG } from "@/components/ko/site";

export const metadata = {
  title: "야구망 · 야구장 안전망 · 비구방지망 전문 제조 | 세경네트",
  description:
    "야구장 그물망, 그물망휀스, 비구방지망 휀스, 스포츠시설 휀스 전문 제조. 고강도 PE 무결편직 구조로 내구성 우수. 현장 맞춤 제작 및 납품.",
  keywords: [
    "야구망",
    "야구장 안전망",
    "비구방지망",
    "배팅케이지망",
    "파울망",
    "외야망",
    "야구 보호망",
    "야구 네트",
    "야구 네트 제작",
    "고강도 PE 야구망",
    "야구망 제조",
    "야구망 납품", 
      "야구장 그물망",
    "스포츠 네트 제조",
    "안전휀스",
    "체육시설 휀스",
    "sports netting",
    "baseball netting",
    "baseball barrier net",
    "batting cage net",
    "backstop net",
    "sports net supplier",
  ],
};

export default function Page() {
  return (
    <>
      <ProductPage
        en="BASEBALL NET"
        kr="야구망"
        lead={<>야구장 비구방지망,<br />현장 규격에 맞춰 제작합니다.</>}
        hero={IMG.baseballHero}
        heroAlt="야구장 비구방지망 설치 현장"
        install={true}
        features={[
    { title: "무결망 · 결망", desc: "현장에 맞춰 두 가지 모두 제작합니다." },
    { title: "고강도 PE", desc: "HDPE 또는 UHMWPE" },
    { title: "UV 처리", desc: "야외에서 오래 버팁니다." }
        ]}
        specs={[
    { k: "메쉬", v: <>40 · 45mm<Note>(그 외 규격 문의)</Note></> },
    { k: "원사", v: <>HDPE · UHMWPE<Note>(그 외 소재 문의)</Note></> },
    { k: "구조", v: "무결망 · 결망" },
    { k: "색상", v: "검정 · 녹색 · 흰색" },
    { k: "적용", v: "야구장 · 배팅연습장 · 학교 운동장 · 테니스장 · 게이트볼장 · 파크골프장" }
        ]}
        photos={[
    { src: IMG.baseballEdge, alt: "야구망 테두리 마감" },
    { src: IMG.sportsRoll, alt: "야구망 원단 롤 — 세경네트 자체 생산" },
    { src: IMG.baseballCurtainTop, alt: "실내 야구장 커튼망 설치 현장" }
        ]}
      />
    </>
  );
}
