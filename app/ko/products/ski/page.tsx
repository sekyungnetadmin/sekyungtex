import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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

// ✅ 구글 동영상 색인용 JSON-LD 스키마
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

const mediaItems = [
  {
    type: "video",
    src: "/assets/products/ski/ski-1.mp4",
    // 썸네일은 JSON-LD의 thumbnailUrl과 동일하게
  },
  {
    type: "image",
    src: "/assets/products/ski/ski-2.jpg",
    alt: "스키장 슬로프 안전망 설치 현장 — 세경네트",
  },
  {
    type: "image",
    src: "/assets/products/ski/ski-3.jpg",
    alt: "스키장 충돌 방지 보호망 — HDPE 고강도 재질",
  },
];

export default function SkiNetPage() {
  return (
    <div className="font-ko text-[#20262A] bg-white">

      {/* ✅ JSON-LD 삽입 — 구글 동영상 색인 핵심 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />

      {/* Title */}
      <section className="w-full border-b border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#1F3B5D]">스키장 안전 보호망</h1>
          <p className="mt-3 text-[15px] text-gray-600 leading-relaxed">
            스키장 슬로프 및 리프트 주변에 설치되는
            <strong> 충격 흡수형 스키장 안전 보호망</strong>을 제작합니다.
            고강도 원사와 이중 편직 구조로 겨울철 저온 환경에서도 높은 내구성을 유지합니다.
          </p>
        </div>
      </section>

      {/* ✅ 이미지/영상 가로 스크롤 갤러리 */}
      <section className="py-12 bg-[#F5F6FA]">
        <div className="max-w-6xl mx-auto px-4">
          <div
            className="flex gap-4 overflow-x-auto pb-3"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#1F3B5D #e5e7eb" }}
          >
            {mediaItems.map((item, idx) =>
              item.type === "video" ? (
                <div key={idx} className="flex-shrink-0 w-72 h-52 rounded-lg overflow-hidden shadow-sm">
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div key={idx} className="flex-shrink-0 w-72 h-52 rounded-lg overflow-hidden shadow-sm">
                  <img
                    src={item.src}
                    alt={item.alt}   // ✅ 개별 alt
                    loading={idx === 0 ? "eager" : "lazy"}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )
            )}
          </div>
          {mediaItems.length > 2 && (
            <p className="mt-2 text-xs text-gray-400 text-right">← 옆으로 스크롤하여 더 보기</p>
          )}
        </div>
      </section>

      {/* 특징 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1F3B5D] mb-6">제품 특징</h2>
          <ul className="space-y-3 text-[15px] text-gray-700">
            <li>• 강풍·저온 환경에서도 안정적인 PE Braided</li>
            <li>• 스키어 충돌을 고려한 충격 흡수 구조</li>
            <li>• 눈 적재 및 결빙 환경에서도 처짐 최소화</li>
            <li>• 스키장 슬로프/펜스 높이에 맞춘 맞춤 제작 가능</li>
          </ul>
        </div>
      </section>

      {/* 스펙 */}
      <section className="py-16 bg-[#F5F6FA]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1F3B5D] mb-6">규격 · 스펙</h2>
          <table className="w-full border border-gray-300 text-[15px]">
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-medium bg-gray-50">망사 규격</td>
                <td className="p-3">Mesh: 50mm · 60mm, Plait size: Φ4mm, Edge size: Φ6mm</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium bg-gray-50">재질</td>
                <td className="p-3">HDPE</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium bg-gray-50">색상</td>
                <td className="p-3">레드, 블루</td>
              </tr>
              <tr>
                <td className="p-3 font-medium bg-gray-50">적용 분야</td>
                <td className="p-3">스키장 슬로프, 리프트 주변, 안전구역 보호용</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16  text-center">
        <h3 className="text-xl font-bold text-[#1F3B5D]">견적이 필요하신가요?</h3>
        <p className="text-[15px] text-gray-600 mb-6">
          스키장 환경에 맞춘 정확한 규격 상담을 도와드립니다.
        </p>
        <Button asChild className="bg-[#1F3B5D] text-white px-8 py-4">
          <Link href="/ko#contact">견적 문의하기</Link>
        </Button>
      </section>
    </div>
  );
}