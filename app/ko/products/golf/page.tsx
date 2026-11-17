import ProductPage from "@/components/ko/ProductPage";
import { IMG } from "@/components/ko/site";

export const metadata = {
  title: "골프망 제조 · 판매 | 골프 연습장 안전망 · 보호망 | 세경네트",
  description:
    "세경네트는 골프망, 골프 연습장 안전망, 드라이빙레인지 방호망을 직접 제조합니다. 고강도 PE 무결절 방식, 맞춤 제작 및 설치 지원. 전국 납품 가능.",
  keywords: [
    "골프망",
    "골프망 제조",
    "골프망 판매",
    "골프망 교체",
    "골프망 제작",
    "골프 연습장 안전망",
    "골프 방풍망",
    "골프 외야망",
    "골프 보호망",
    "골프 망 제작",
    "드라이빙레인지 방호망",
    "드라이빙레인지 네트",
    "골프장 네트",
    "골프장 안전망",
    "골프장 보호망",
    "골프장 방풍망",
    "골프장 외야망",
    "골프연습장 시공",
    "골프연습장 네트",
    "골프연습장 안전망",
    "골프연습장 건설",
    "골프망 공사",
    "골프망 부분 교체공사",
    "골프연습장 시공업체",
    "골프장 안전망 시공업체",
    "골프장 보호망 시공업체",
    "파크골프망",
    "산업용 스포츠 안전망",
    "세경네트",
    "golf net",
    "golf driving range net",
    "golf barrier net",
    "golf wind protection net",
    "golf safety netting",
    "golf range netting",
    "golf net manufacturer",
    "golf net installation",
    "golf net construction",
    "golf net replacement",
    "golf net contractor",
    "outfield safety net",
    "sports net manufacturer",
  ],
};

export default function Page() {
  return (
    <>
      <ProductPage
        en="GOLF NET"
        kr="골프망"
        lead={<>골프연습장의 현장에 맞춰<br />재단하고 설치합니다.</>}
        hero={IMG.golfRange}
        heroPos="center 60%"
        heroAlt="골프연습장 골프망 설치 현장"
        install={true}
        features={[
    { title: "무결망", desc: "가볍고, 바람을 덜 받습니다." },
    { title: "UV 처리", desc: "햇빛 아래서도 오래 갑니다." },
    { title: "정밀 가공", desc: "규격 오차 ±1~2% 이내로 맞춥니다." }
        ]}
        specs={[
    { k: "메쉬", v: "20 · 25mm" },
    { k: "원사", v: "HDPE · UHMWPE" },
    { k: "색상", v: "Green · Black · White · Gray · Brown" },
    { k: "크기", v: "현장 맞춤" },
    { k: "적용", v: "골프장 · 실내외 연습장 · 드라이빙레인지 · 파크골프" }
        ]}
        photos={[
    { src: IMG.golfClose, alt: "골프망 클로즈업" },
    { src: IMG.golfMachine, alt: "골프망 제망 설비" },
    { src: IMG.parkGolf, alt: "파크골프장 그물망" }
        ]}
      />
    </>
  );
}
