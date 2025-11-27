"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SportsNetPage() {
  return (
    <div className="font-ko text-[#20262A] bg-white">

      {/* Title */}
      <section className="w-full border-b border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#1F3B5D]">스포츠 보호망</h1>
          <p className="mt-3 text-[15px] text-gray-600 leading-relaxed">
            야구·축구·테니스 등 실외·실내 스포츠 시설에 사용되는 
            <strong> 볼 안전 보호망 / 펜스망</strong>을 전문 제작합니다.
            PE 고강도 원사 적용으로 충격 흡수력과 내구성이 우수합니다.
          </p>
        </div>
      </section>

      {/* Images */}
      <section className="py-12 bg-[#F5F6FA]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            "/assets/products/sports/sports-1.jpg",
            "/assets/products/sports/sports-2.jpg",
            "/assets/products/sports/sports-3.png",
          ].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="스포츠망"
              className="w-full h-[220px] object-cover rounded-lg shadow-sm"
            />
          ))}
        </div>
      </section>

      {/* 특징 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1F3B5D] mb-6">제품 특징</h2>
          <ul className="space-y-3 text-[15px] text-gray-700">
            <li>• 강한 충격을 견디는 고강도 PE 재질</li>
            <li>• 야구공, 축구공 충격에 최적화된 편직 구조</li>
            <li>• UV 코팅 적용으로 실외 환경에 강함</li>
            <li>• 경기장 환경 맞춤형 제작 가능</li>
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
                <td className="p-3">결망 40mm · 60mm · 80mm</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">재질</td>
                <td className="p-3">PE</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">색상</td>
                <td className="p-3">그린 · 블랙 · 화이트</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">적용 분야</td>
                <td className="p-3">야구장, 축구장, 테니스장, 학교 운동장 등</td>
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
            <li>• 펜스 상부 보호망 설치</li>
            <li>• 외곽 주변 보호망 시공</li>
            <li>• 실내 체육관 천정 보호망 설치</li>
            <li>• 철재 기둥 + 와이어 고정 방식 가능</li>
          </ul>

<p className="mt-6 text-[15px] text-gray-600 italic">
      ※ 설치 견적은 <strong>도면(구조/규격 정보)</strong>을 함께 제공해 주시면 보다 정확하고 빠르게 안내 가능합니다.
    </p>

        </div>
      </section>

 
      {/* CTA */}
      <section className="py-16 bg-[#F5F6FA] text-center">
        <h3 className="text-xl font-bold text-[#1F3B5D]">견적이 필요하신가요?</h3>
        <p className="text-[15px] text-gray-600 mb-6">도면/사진을 보내주시면 정확한 상담이 가능합니다.</p>
        <Link href="/ko/contact">
          <Button className="bg-[#1F3B5D] text-white px-8 py-4">
            견적 문의하기
          </Button>
        </Link>
      </section>
    </div>
  );
}