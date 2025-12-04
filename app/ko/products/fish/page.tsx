"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FisheryNetPage() {
  return (
    <div className="font-ko text-[#20262A] bg-white">

      {/* Title */}
      <section className="w-full border-b border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#1F3B5D]">어업용 네트 · 어망</h1>
          <p className="mt-3 text-[15px] text-gray-600 leading-relaxed">
            선망, 정치망, 소형 어망 등 다양한 어업 환경에 맞춘  
            <strong> 전문 어업용 네트(어망)</strong>를 제작합니다.  
            해수 환경에 적합한 PE/PP 재질과 방오처리로 내구성이 우수합니다.
          </p>
        </div>
      </section>

      {/* Images */}
      <section className="py-12 bg-[#F5F6FA]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            "/assets/products/fishery/fishing1.jpg",
            "/assets/products/fishery/fishing2.PNG",
            "/assets/products/fishery/fishing3.jpg",
          ].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="어망"
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
            <li>• 파도, 조류, 장시간 사용에도 견디는 PE/PP 고강도 원사</li>
            <li>• 사용 목적(선망/정치망/양식장)에 따른 맞춤 규격 제작 가능</li>
            <li>• 어종에 따라 망사 크기 및 두께 조절 가능</li>
            <li>• 로프, 부자, 추 등 부속 장비도 함께 제작 가능</li>
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
                <td className="p-3">15mm ~ 150mm 이상 주문 제작 가능</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">재질</td>
                <td className="p-3">PE / PP </td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">색상</td>
                <td className="p-3">그린 · 블랙</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">적용 분야</td>
                <td className="p-3">
                  선망 · 정치망 · 양식장 보호망 · 어업용 구조물
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>



      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <h3 className="text-xl font-bold text-[#1F3B5D]">
          정확한 어망 규격이 필요하신가요?
        </h3>
        <p className="text-[15px] text-gray-600 mb-6">
          어종·수심·환경 조건을 알려주시면 최적의 규격으로 제작해드립니다.
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