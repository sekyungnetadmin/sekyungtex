"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

/* export const metadata = {
  title: "산업용 안전망 · 추락방지망 · 건설용 보호망 제조 | 세경넷",
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
      "industrial safety net",
    "fall protection net",
    "debris safety net",
    "construction safety net",
    "heavy-duty netting",
    "safety net manufacturer",
    "PE safety net",
   
  ],
}; */


export default function SafetyNetPage() {
  return (
    <div className="font-ko text-[#20262A] bg-white">

      {/* Title */}
      <section className="w-full border-b border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#1F3B5D]">건설 · 산업용 안전망</h1>
          <p className="mt-3 text-[15px] text-gray-600 leading-relaxed">
            건설현장의 <strong>추락 방지, 낙하물 방지, 안전구역 확보</strong>를 위해 사용되는 
            전문 안전망을 제작합니다.  
          </p>
        </div>
      </section>

      {/* Images */}
      <section className="py-12 bg-[#F5F6FA]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            "/assets/products/safety/safety-1.jpg",
            "/assets/products/safety/safety-2.jpg",
            "/assets/products/safety/safety-3.jpg",
          ].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="안전망"
              className="w-full h-[220px] object-cover rounded-lg shadow-sm"
            />
          ))}
        </div>
      </section>
      {/* 특징 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1F3B5D] mb-6">제품 특징</h2>
          <ul className="space-y-3 text-[15px] text-gray-700 leading-relaxed">
            <li>• 고강도 PE 원사로 제작된 강력한 인장강도</li>
            <li>• 고층 현장에 적합한 낙하물 방지 기능</li>
            <li>• 현장 규격에 맞춘 맞춤 제작 가능</li>
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
                <td className="p-3 font-medium">망사 규격</td>
                <td className="p-3">80mm · 100mm </td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">재질</td>
                <td className="p-3">PE</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">색상</td>
                <td className="p-3">그린 · 블랙</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">적용 분야</td>
                <td className="p-3">건설현장 추락방지망, 낙하물 방지막, 산업시설 보호구역</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 시공 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1F3B5D] mb-6">설치 · 시공 방식</h2>
          <ul className="text-[15px] text-gray-700 space-y-3">
            <li>• 고정용 로프 + 철재 와이어 시공</li>
            <li>• 고층 건설현장에 적합한 장력 유지 구조</li>
            <li>• 설치 환경에 따른 맞춤 제작 가능</li>
          </ul>
        </div>
      </section>

 

      {/* CTA */}
      <section className="py-16 bg-[#F5F6FA] text-center">
        <h3 className="text-xl font-bold text-[#1F3B5D]">정확한 안전망 견적이 필요하신가요?</h3>
        <p className="text-[15px] text-gray-600 mb-6">
          현장 위치, 규격, 설치 방식 등을 알려주시면 정확하게 안내해드립니다.
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
