// app/ko/products/sports/page.tsx

import Link from "next/link";
import { Button } from "@/components/ui/button";

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

// ✅ 이미지별 alt 개별 지정 — 구글 이미지 검색 최적화
const galleryImages = [
  {
    src: "/assets/products/sports/sports-1.jpg",
    alt: "야구망 무결망 — 고강도 HDPE 원사",
  },
  {
    src: "/assets/products/sports/sports-2.jpg",
    alt: "야구망 원단 롤 — 세경네트 자체 생산",
  },
  {
    src: "/assets/products/sports/sports-3.PNG",
    alt: "야구장 비구방지망 설치 완료 현장",
  },
  // 👇 사진 추가 시 여기에 계속 추가하면 됨
  // {
  //   src: "/assets/products/sports/sports-4.jpg",
  //   alt: "배팅케이지 야구망 시공 사례",
  // },
  // {
  //   src: "/assets/products/sports/sports-5.jpg",
  //   alt: "파울망 설치 — 관중석 보호용 야구 방호망",
  // },
];

export default function BaseballNetPage() {
  return (
    <div className="font-ko text-[#20262A] bg-white">

      {/* Title */}
      <section className="w-full border-b border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#1F3B5D]">야구망 · 비구방지망</h1>
<p className="mt-3 text-[15px] text-gray-600 leading-relaxed">
  야구장·테니스장 방호망, 배팅케이지망, 파울망, 외야망, 학교 운동장 휀스 등{" "}
  <strong>야구 안전망·비구방지망·그물망 휀스</strong>를 전문 제작합니다.{" "}
  <strong>비구방지용 휀스</strong>는 울타리 휀스 설치부터 비구방지망 설치공사까지
  현장 맞춤으로 진행합니다.{" "}
  <strong>흰색(화이트), 검정, 녹색</strong> 등 다양한 색상으로 경기장 환경에 맞출 수 있으며,
  주문량에 따라 <strong>커스텀 색상도 가능</strong>합니다.{" "}
  <strong>고강도 PE 원사와 UV 안료</strong>로 야외 환경에서 오래 사용할 수 있으며,
  무결편직 구조로 충격 흡수력과 내구성이 우수합니다.{" "}
  야구 스타디움, 공공 야구장, 테니스장, 학교 운동장 등 다양한 체육시설에서 사용되고 있습니다.
</p>
        </div>
      </section>

      {/* ✅ 가로 스크롤 이미지 갤러리 */}
      <section className="py-12 bg-[#F5F6FA]">
        <div className="max-w-6xl mx-auto px-4">
          <div
            className="flex gap-4 overflow-x-auto pb-3"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#1F3B5D #e5e7eb" }}
          >
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-72 h-52 rounded-lg overflow-hidden shadow-sm"
              >
                <img
                  src={img.src}
                  alt={img.alt}          // ✅ 이미지마다 다른 alt
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading={idx === 0 ? "eager" : "lazy"}   // ✅ 첫 이미지만 즉시 로드
                />
              </div>
            ))}
          </div>
          {/* 스크롤 힌트 — 이미지 3장 이상일 때 자연스럽게 보임 */}
          {galleryImages.length > 2 && (
            <p className="mt-2 text-xs text-gray-400 text-right">
              ← 옆으로 스크롤하여 더 보기
            </p>
          )}
        </div>
      </section>

      {/* 나머지 섹션은 동일 */}
      {/* 적용 분야 */}
      <section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* 적용 분야 */}
      <div>
        <h2 className="text-2xl font-bold text-[#1F3B5D] mb-6">야구망 적용 분야</h2>
        <ul className="space-y-3 text-[15px] text-gray-700">
          <li>• <strong>외야 방호망</strong> — 외야 펜스 상단 보호망</li>
          <li>• <strong>파울망</strong> — 파울라인 외곽 관중석 보호망</li>
          <li>• <strong>배팅케이지망</strong> — 실내외 타격 연습장 케이지 전용망</li>
          <li>• <strong>투수 연습 보호망</strong> — 투수 훈련용 L자형 보호망</li>
          <li>• <strong>스타디움 비구방지망</strong> — 경기장 전체 관중 보호 시스템</li>
            <li>• <strong>테니스장 그물망 휀스</strong> — 테니스장 외곽 비구방지용 휀스</li>  {/* ✅ 추가 */}
  <li>• <strong>학교 운동장 휀스</strong> — 초·중·고 운동장 울타리 휀스 설치</li>  {/* ✅ 추가 */}
        </ul>
      </div>

      {/* 제품 특징 */}
      <div>
        <h2 className="text-2xl font-bold text-[#1F3B5D] mb-6">제품 특징</h2>
        <ul className="space-y-3 text-[15px] text-gray-700">
          <li>• 야구공 고속 충격에 최적화된 <strong>무결(Knotless) 편직 구조</strong></li>
          <li>• 고강도 HDPE 원사 적용 — 끊김·마모에 강함</li>
          <li>• <strong>UV 처리</strong>로 실외 장기 사용에도 변형 없음</li>
          <li>• <strong>야구망 흰색(화이트), 백색 야구망</strong> 포함 다양한 색상 선택 가능</li>
          <li>• 경기장·훈련장 환경 맞춤형 규격 제작 가능</li>
        </ul>
      </div>

    </div>
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
                <td className="p-3">40mm · 60mm · 80mm</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium bg-gray-50">재질</td>
                <td className="p-3">HDPE (고밀도 폴리에틸렌)</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium bg-gray-50">편직 방식</td>
                <td className="p-3">무결편직 (Knotless)</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium bg-gray-50">색상</td>
                <td className="p-3">블랙 · 그린 · 백색</td>
              </tr>
              <tr>
                <td className="p-3 font-medium bg-gray-50">납품 실적</td>
                <td className="p-3">야구장, 배팅연습장, 학교 운동장 등</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 시공 */}
      <section className="py-16 ">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1F3B5D] mb-6">설치 · 시공 방식</h2>
          <ul className="text-[15px] text-gray-700 space-y-3">
            <li>• 외야 펜스 상부 방호망 설치</li>
            <li>• 파울라인 외곽 관중석 보호망 시공</li>
             <li>• 테니스장 · 야구장 울타리 휀스 설치공사</li>  {/* ✅ 추가 */}
  <li>• 학교 운동장 · 체육시설 비구방지용 휀스 시공</li>  {/* ✅ 추가 */}
            <li>• 야구장 휀스 시공 - 철재 기둥 + 와이어 고정 방식 가능</li>
          </ul>

          <p className="mt-6 text-[15px] text-gray-600 italic">
            ※ 체육시설 휀스 시공 전문 — 현장 환경에 맞춰 정밀하게 설치합니다.<br>
            </br>설치 견적은 <strong>도면(구조/규격 정보)</strong>을 함께 제공해 주시면
            보다 정확하고 빠르게 안내 가능합니다.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16  text-center bg-[#F5F6FA] ">
        <h3 className="text-xl font-bold text-[#1F3B5D]">야구망 · 비구방지망 견적이 필요하신가요?</h3>
        <p className="text-[15px] text-gray-600 mb-6">
           야구장·테니스장·학교 운동장 그물망 휀스, 울타리 휀스 설치까지 — 도면·사진을 보내주시면 정확한 상담이 가능합니다.
        </p>
        <Button asChild className="bg-[#1F3B5D] text-white px-8 py-4">
          <Link href="/ko#contact">견적 문의하기</Link>
        </Button>
      </section>
    </div>
  );
}