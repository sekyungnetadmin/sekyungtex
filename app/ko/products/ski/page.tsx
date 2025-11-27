"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SkiNetPage() {
  return (
    <div className="font-ko text-[#20262A] bg-white">

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

      {/* Images */}
      <section className="py-12 bg-[#F5F6FA]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
         {[
  "/assets/products/ski/ski-1.mp4",
  "/assets/products/ski/ski-2.jpg",
  "/assets/products/ski/ski-3.jpg",
].map((src, idx) => (
src.endsWith(".mp4") ? (
    <video
      key={idx}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      controls
      className="w-full h-[220px] object-cover rounded-lg shadow-sm"
    />
  ) : (
    <img
      key={idx}
      src={src}
      alt="스키장망"
      className="w-full h-[220px] object-cover rounded-lg shadow-sm"
    />
  )
))}
        </div>
      </section>

      {/* 특징 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1F3B5D] mb-6">
            제품 특징
          </h2>
          <ul className="space-y-3 text-[15px] text-gray-700">
            <li>• 강풍·저온 환경에서도 안정적인 PE Braided </li>
            <li>• 스키어 충돌을 고려한 충격 흡수 구조</li>
            <li>• 눈 적재 및 결빙 환경에서도 처짐 최소화</li>
            <li>• 스키장 슬로프/펜스 높이에 맞춘 맞춤 제작 가능</li>
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
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-medium">망사 규격</td>
                <td className="p-3"> Mesh: 50mm · 60mm, Plait size:  Φ4mm, Edge size:  Φ6mm</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">재질</td>
                <td className="p-3">PE Braided</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">색상</td>
                <td className="p-3">레드, 블루 </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">적용 분야</td>
                <td className="p-3">스키장 슬로프, 리프트 주변, 안전구역 보호용</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 시공 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1F3B5D] mb-6">
            설치 · 시공 방식
          </h2>
          <ul className="text-[15px] text-gray-700 space-y-3">
            
          </ul>
        </div>
      </section>

   

      {/* CTA */}
      <section className="py-16 bg-[#F5F6FA] text-center">
        <h3 className="text-xl font-bold text-[#1F3B5D]">견적이 필요하신가요?</h3>
        <p className="text-[15px] text-gray-600 mb-6">
          스키장 환경에 맞춘 정확한 규격 상담을 도와드립니다.
        </p>
        <Link href="/ko/contact">
          <Button className="bg-[#1F3B5D] text-white px-8 py-4">
            견적 문의하기
          </Button>
        </Link>
      </section>
    </div>
  );
}