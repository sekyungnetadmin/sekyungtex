import ProductPage, { Note } from "@/components/ko/ProductPage";
import { IMG } from "@/components/ko/site";

export const metadata = {
  title: "스키장 안전망 · 슬로프 보호망 제조 | Ski Slope Safety Net | 세경네트",
  description:
    "스키장 슬로프 보호 안전망, 스키 펜스, 충돌 완화 네트 제조 설치. 고강도 PE 재질 및 UV 코팅 적용.",
  keywords: [
    "스키장 안전망", "슬로프 보호망", "스키 펜스", "안전 펜스",
    "충돌 완화 네트", "스키장 네트", "세경네트", "스키 안전망",
    "스키장 보호망", "스키 슬로프 안전망", "충돌 방지망", "스키 네트 제작",
    "ski safety net", "ski slope net", "ski resort protection netting",
    "impact protection net", "ski barrier net", "sports safety net",
    "custom ski net", "곤지암 스키장 네트", "휘닉스파크 스키장 네트",
    "알펜시아 스키장 네트", "용평 스키장 네트",
  ],
};

// 구글 동영상 색인용 JSON-LD 스키마
const videoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "세경네트 스키장 안전 보호망 시공 영상",
  "description": "스키장 슬로프에 설치되는 고강도 HDPE 충격흡수 안전망 시공 현장 영상. 저온 환경에서도 우수한 내구성.",
  "thumbnailUrl": "https://sekyungtex.co.kr/assets/products/ski/ski-2.jpg", // ← ski-2.jpg를 썸네일로 사용
  "uploadDate": "2025-01-01",   // ← 실제 촬영/업로드 날짜로 수정
  "contentUrl": "https://sekyungtex.co.kr/assets/products/ski/ski-1.mp4",
  "publisher": {
    "@type": "Organization",
    "name": "세경네트",
    "url": "https://sekyungtex.co.kr"
  }
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }} />
      <ProductPage
        en="SKI NET"
        kr="스키장 안전망"
        sub="스키장 슬로프 안전 보호망 제조"
        lead={<>스키장 슬로프와 리프트 주변,<br />현장에 맞춰 제작합니다.</>}
        hero={IMG.skiSlope}
        heroPos="center 40%"
        heroAlt="스키장 슬로프 안전망 설치 현장"
        install={false}
        records="스키장 안전망"
        features={[
    { title: "브레이드 결망", desc: "슬로프 펜스용으로 짠 결망입니다." },
    { title: "UV 처리", desc: "눈에 반사되는 햇빛에도 오래 갑니다." },
    { title: "슬로프 맞춤 제작", desc: "높이와 길이를 현장에 맞춰 만듭니다." }
        ]}
        specs={[
    { k: "메쉬", v: "50 · 60mm" },
    { k: "굵기", v: <>망사 Φ4mm · 테두리 Φ6mm<Note>(커스텀 가능)</Note></> },
    { k: "구조", v: "브레이드 결망" },
    { k: "원사", v: <>HDPE<Note>(커스텀 가능)</Note></> },
    { k: "색상", v: "빨강 · 파랑" },
    { k: "적용", v: "슬로프 · 리프트 주변 · 안전구역" }
        ]}
        keywords={["스키장 안전망", "스키 보호망", "슬로프 안전 펜스", "리프트 주변 보호망", "스키망"]}
        photos={[
    { src: IMG.skiNet, alt: "스키장 안전망 원단" },
    { src: IMG.skiRoll, alt: "스키망 원단" },
    { src: IMG.skiSlopeSite, alt: "스키장 슬로프 펜스" }
        ]}
      />
    </>
  );
}
