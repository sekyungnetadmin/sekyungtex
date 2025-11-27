"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GolfNetPage() {
  const photos = [
    "/assets/products/golf/golf-1.jpg",
    "/assets/products/golf/golf-2.jpg",
    "/assets/products/golf/golf-3.jpg",
  ];

  return (
    <div className="font-ko text-[#20262A] bg-white">
      {/* Title */}
      <section className="w-full border-b border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#1F3B5D]">
            골프장 · 연습장 보호망
          </h1>
          <p className="mt-3 text-[15px] text-gray-600 leading-relaxed">
            전국 골프장 및 실내·야외 연습장에 사용되는
            <strong> 골프 주변 보호망, 천정망, 타석망</strong>을 전문적으로 제작합니다.
            고강도 PE 원사와 편직 기술을 바탕으로
            <strong> 내구성·안전성·규격 정확도</strong>를 모두 충족합니다.
          </p>
        </div>
      </section>

      {/* 사진 */}
      <section className="py-12 bg-[#F5F6FA]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {photos.map((img, i) => (
            <div key={i} className="w-full h-[220px] relative">
              <Image
                src={img}
                alt="골프망"
                fill
                className="object-cover rounded-lg shadow-sm"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 특징 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1F3B5D] mb-6">
            제품 특징
          </h2>
          <ul className="space-y-3 text-[15px] text-gray-700 leading-relaxed">
            <li>• 고강도 PE / PP 원사를 사용한 내구성 높은 무결 구조</li>
            <li>• 실외 환경(비·바람·자외선)에 강한 UV 코팅</li>
            <li>• 규격 오차 ±1~2% 이내의 정밀 가공</li>
            <li>• 타석망, 측면망, 천정망 등 다양한 규격 주문 제작</li>
            <li>• 골프장, 탑볼연습장 등 설치 환경에 따른 맞춤 제작 가능</li>
          </ul>
        </div>
      </section>

      {/* 스펙 */}
      <section className="py-16 bg-[#F5F6FA]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1F3B5D] mb-6">
            규격 · 스펙
          </h2>

          <table className="w-full border border-gray-300 text-[15px]">
            <thead className="bg-white">
              <tr className="border-b border-gray-300 text-left">
                <th className="p-3">항목</th>
                <th className="p-3">내용</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="p-3 font-medium">망사 규격</td>
                <td className="p-3">20mm · 25mm · 30mm · 35mm 등</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-3 font-medium">사용 원사</td>
                <td className="p-3">고강도 PE, UHMWPE</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-3 font-medium">색상</td>
                <td className="p-3">그린 · 블랙 · 화이트 · 그레이 · 브라운 </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-3 font-medium">규격</td>
                <td className="p-3">고객 요청 사이즈 주문 제작</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">적용 분야</td>
                <td className="p-3">골프장, 실내외 골프연습장, 파크골프 등</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

{/* 설치 · 시공 방식 */}
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-2xl font-bold text-[#1F3B5D] mb-6">
      설치 · 시공 방식
    </h2>

    <ul className="text-[15px] text-gray-700 space-y-3 leading-relaxed">
      <li>• <strong>와이어 로프 + 턴버클 장력 조절</strong> 방식으로 네트 처짐을 최소화하고 안정적인 긴장도를 유지합니다.</li>
      <li>• <strong>기둥 고정 브라켓/클램프</strong> 사용으로 구조물 손상 없이 견고하게 설치됩니다.</li>
      <li>• <strong>네트 상·하단 와이어 고정</strong>을 통해 바람 및 충격 환경에서도 흔들림 없이 유지됩니다.</li>
      <li>• <strong>현장 도면 기반 맞춤 제작</strong>으로 설치 환경에 최적화된 시공이 가능합니다.</li>
      <li>• 로프커버 및 보호캡 마감 처리로 완성도가 높고 안전합니다.</li>
    </ul>

    <p className="mt-6 text-[15px] text-gray-600 italic">
      ※ 설치 견적은 <strong>도면(구조/규격 정보)</strong>을 함께 제공해 주시면 보다 정확하고 빠르게 안내 가능합니다.
    </p>
  </div>
</section>



      {/* CTA */}
      <section className="py-16 bg-[#F5F6FA] text-center">
        <h3 className="text-xl font-bold text-[#1F3B5D] mb-4">
          정확한 견적이 필요하신가요?
        </h3>
        <p className="text-[15px] text-gray-600 mb-6">
          도면/사진을 함께 보내주시면 더욱 빠르고 정확하게 안내해 드립니다.
        </p>

        <Link href="/ko/contact">
          <Button className="bg-[#1F3B5D] text-white text-[15px] px-8 py-5">
            견적 문의하기
          </Button>
        </Link>
      </section>
    </div>
  );
}
