//"use client";



import Link from "next/link";
import { Button } from "@/components/ui/button";


  export const metadata = {
   title: "산업용 안전망 · 축구망 · 비구방지망 휀스 |Safety Net Manufacturer | 세경네트",
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
    "세경네트",
    "210합 안전망",
      "비구방지망 휀스",
  "축구장 휀스",
  "축구 비구방지용 그물망",
  "비구방지망 설치",
  "그물망 울타리",
  "그물망 휀스 설치",
  "그물망 휀스 시공",
      "industrial safety net",
    "fall protection net",
    "debris safety net",
    "construction safety net",
    "heavy-duty netting",
    "safety net manufacturer",
    "PE safety net",
    "축구망",
    "풋살망",
    "비구망",
    "sports safety net",
    "futsal net",
    "soccer net",
    "sports facility netting",
    "그물망 교체공사", 
    "net replacement service",
    "net installation service",
    "net construction service",
  ],
};

 
 


export default function SafetyNetPage() {
  return (
    <div className="font-ko text-[#20262A] bg-white">

      {/* Title */}
      <section className="w-full border-b border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#1F3B5D]">산업용 안전망 · 축구망</h1>
<p className="mt-3 text-[15px] text-gray-600 leading-relaxed">
  건설현장의 <strong>추락 방지, 낙하물 방지, 안전구역 확보</strong>를 위한 전문 안전망을 제작합니다.{" "}
  뿐만 아니라 <strong>축구망, 축구골대망, 풋살망, 축구 비구방지용 그물망</strong> 등 체육시설용 안전망도 전문 제조하고 있습니다.{" "}
  <strong>축구장 휀스, 비구방지망 휀스, 그물망 울타리</strong> 설치부터{" "}
  <strong>그물망 휀스 설치 시공</strong>까지 현장 맞춤으로 진행합니다.{" "}
  <strong>비구방지망 설치</strong> 및 야외 풋살망부터 실내 시설까지 환경에 맞춘 맞춤형 제작이 가능하며,{" "}
  풋살망공사 및 설치 서비스까지 제공합니다.
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
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="border border-gray-300 rounded-lg p-4 bg-white">
    <h3 className="font-bold text-[#1F3B5D] mb-2">고강도 PE 원사</h3>
    <p className="text-[14px] text-gray-700">직접 생산으로 품질 관리 및 빠른 납기 가능</p>
  </div>
  
  <div className="border border-gray-300 rounded-lg p-4 bg-white">
    <h3 className="font-bold text-[#1F3B5D] mb-2">UV 처리</h3>
    <p className="text-[14px] text-gray-700">야외 장기 사용에도 변형·변색 없음</p>
  </div>

  <div className="border border-gray-300 rounded-lg p-4 bg-white">
    <h3 className="font-bold text-[#1F3B5D] mb-2">방염 기능</h3>
    <p className="text-[14px] text-gray-700">안전 기준에 맞춘 맞춤 제작 가능</p>
  </div>

  <div className="border border-gray-300 rounded-lg p-4 bg-white">
    <h3 className="font-bold text-[#1F3B5D] mb-2">맞춤 제작</h3>
    <p className="text-[14px] text-gray-700">현장 규격 및 색상에 맞춘 제작 가능</p>
  </div>

  <div className="border border-gray-300 rounded-lg p-4 bg-white">
    <h3 className="font-bold text-[#1F3B5D] mb-2">비구방지망 휀스 설치</h3>
    <p className="text-[14px] text-gray-700"> 축구장 휀스, 체육시설 휀스, 그물망 울타리, 비구방지망 설치 — 축구 비구방지용 그물망 시공 가능</p>
  </div>

  <div className="border border-gray-300 rounded-lg p-4 bg-white">
    <h3 className="font-bold text-[#1F3B5D] mb-2">부분 보수</h3>
    <p className="text-[14px] text-gray-700">손상된 부분만 신속하게 교체 및 수리</p>
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
                <td className="p-3 font-medium">망사 규격</td>
                <td className="p-3">80mm · 100mm </td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">재질</td>
                <td className="p-3">HDPE</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">색상</td>
                <td className="p-3">그린 · 블랙</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">적용 분야</td>
                <td className="p-3">건설현장 추락방지망, 낙하물 방지막, 산업시설 보호구역, 체육시설 비구방지망, 축구장, 풋살장</td>
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
  <li>• 고정용 로프 + 철재 와이어 시공으로 안정적인 구조 확보</li>
  <li>• 고층 건설현장에 적합한 장력 유지 구조</li>
  <li>• 설치 환경에 따른 맞춤 제작 가능</li>
  <li>• 현장 도면 기반 정밀한 맞춤 설계 및 시공</li>
<li>• <strong>축구장 휀스 · 비구방지망 휀스 설치</strong> — 그물망 울타리, 축구 비구방지용 그물망 시공</li>
<li>• <strong>그물망 휀스 설치 시공</strong> — 비구방지망 설치, 풋살장·학교 운동장 등 다양한 시설 대응</li>
  <li>• 신속한 설치로 공사 기간 단축</li>
  <li>• <strong>부분 보수 서비스</strong> — 손상된 부분만 교체하여 유지비 절감</li>
  <li>• 사후관리 및 AS 지원</li>
</ul>
        </div>
      </section>

 

      {/* CTA */}
      <section className="py-16 bg-[#F5F6FA] text-center">
        <h3 className="text-xl font-bold text-[#1F3B5D]">정확한 풋살망 · 안전망 견적이 필요하신가요?</h3>
        <p className="text-[15px] text-gray-600 mb-6">
          축구장 휀스, 비구방지망 설치, 그물망 휀스 시공 등 — 현장 위치, 규격, 설치 방식 등을 알려주시면 정확하게 안내해드립니다.
        </p>
        <Link href="/ko/contact">
          <Button className="bg-[#1F3B5D] text-white px-8 py-4">
            <Link href="/ko#contact">견적 문의하기</Link>
          </Button>
        </Link>
      </section>

    </div>
  );
}
