"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import type { FormEvent } from "react";
 



export default function MainKo() {
  return (
  <>
      <Hero />
      <SeoHiddenKo />   
      <CompanyIntro />
      <ProductCategories />
      <Facilities />
      
      <ContactSection />
 
    </>
  );
}


/* -------------------- HERO -------------------- */
function Hero() {
  return (
    <section className="relative text-white">
      <div className="absolute inset-0 bg-[url('/assets_webp/hero-factory_결과.webp')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D3A] via-[#0F2D3A]/70 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="uppercase tracking-[0.22em] text-xs text-[#E4E6E7]/80">
            INDUSTRIAL NET MANUFACTURING
          </p>

          <h1 className="mt-4 text-4xl md:text-[48px] leading-[1.15] font-semibold">
           고품질 산업용 네트 전문 제조
          </h1>

          <p className="mt-4 text-[#E4E6E7]/90 text-[17px] leading-relaxed">
            30년 기술력으로 고품질 산업용 네트를 제공합니다.<br />
            골프장 · 야구장 · 축구장 · 안전망 등 맞춤 제작
          </p>

          <p className="mt-5 font-semibold text-[15px] text-[#E4E6E7] flex flex-wrap gap-2">
            30년 제조 경험 <span>|</span> 자체 생산 설비 <span>|</span> 커스텀 제작 <span>|</span> 빠른 납기
          </p>

          <div className="mt-8 flex gap-3">
            <Button asChild size="lg" className="bg-white text-[#0F2D3A] hover:bg-[#E4E6E7]">
              <a href="#products">제품 보기</a>
            </Button>

            <Button asChild size="lg" className="bg-white text-[#0F2D3A] hover:bg-[#E4E6E7]">
              <a href="#contact">견적 문의</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------- SEO HIDDEN CONTENT (Korean) -------------------- */
function SeoHiddenKo() {
  return (
    <section className="hidden" aria-hidden="true">
      <h2>산업용 스포츠 안전망 및 해양 양식장 그물 제조</h2>
      <p>
        세경넷은 골프 연습장 안전망, 야구 배팅케이지망, 산업용 추락방지망, 건설 현장 낙하물 방지망,
        해양 양식장 어망, 바람막이 방풍망, 선박·어획용 네트 등 다양한 산업용 네트 제품을 제조하고 있습니다.
        모든 제품은 한국 본사 공장에서 직접 생산하며 고강도 PE 원사를 기반으로 제작됩니다.
      </p>

      <h3>제품 분야</h3>
      <p>
        골프장 안전망, 골프 드라이빙 레인지 그물, 야구 방망이버튼 케이지 보호망, 해상 양식장 그물망,
        산업안전 추락방지망, 건설 현장 안전망, 낙하물 방지망, 공장 및 물류 보호망, 맞춤 제작 네트 시스템.
      </p>
    </section>
  );
}

/* -------------------- COMPANY INTRO -------------------- */

function CompanyIntro() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#1F3B5D] mb-4">
          ABOUT US
        </h2>
        <p className="text-[#555] text-[15px] leading-relaxed w-full md:w-3/4">
          세경네트는 골프연습장망, 스포츠 보호망, 산업용 안전망, 어업용 어구 등
          다양한 산업용 네트 제품을 직접 생산·제작·시공하는 전문 제조업체입니다.
          다년간 쌓아온 공정 기술과 설비 운영 노하우를 바탕으로, 고객이 원하는
          규격과 품질을 정확하게 제공합니다.
        </p>

        {/* 핵심 수치 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {[
            { label: "설립", value: "2000년대" },
            { label: "연간 생산능력", value: "300톤" },
            { label: "주요 납품처", value: "전국 지자체·골프장" },
            { label: "품목", value: "골프망/스포츠망/스키망/" },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-[#F5F6FA] rounded-lg">
              <div className="text-xl font-bold text-[#1F3B5D]">
                {item.value}
              </div>
              <div className="text-sm text-gray-600 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- PRODUCT CATEGORIES -------------------- */

function ProductCategories() {
  const list = [
    {
      title: "골프장 · 연습장망",
      desc: "주 경기장, 연습장, 타석 주변 보호망 및 천정망 제작·시공",
      link: "/ko/products/golf",
      img: "/assets/sample-golf.png",
    },
 {
      title: "스키장 보호망 · 스키망",
      desc: "슬로프 주변 보호망/안전 펜스/완충망 설계·제작·시공",
      link: "/ko/products/ski",
      img: "/assets/sample-ski.jpg",
    },
    {
      title: "스포츠 보호망",
      desc: "야구·축구·테니스 등 다양한 실외 스포츠용 보호망 제작",
      link: "/ko/products/sports",
      img: "/assets/sample-sports.jpg",
    },
   
    {
      title: "산업용 안전망",
      desc: "건설현장 추락방지망/납품·규격 제작 가능",
      link: "/ko/products/safety",
      img: "/assets/sample-safety.jpg",
    },
    {
      title: "어업용 네트",
      desc: "어구/어망 설계, 제작 및 맞춤형 공급",
      link: "/ko/products/fishery",
      img: "/assets/sample-fishery.jpg",
    },
  ];

  return (
    <section id="products" className="py-16 bg-[#F5F6FA]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#1F3B5D] mb-8">주요 제품 카테고리</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {list.map((item, idx) => (
            <Link key={idx} href={item.link}>
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition cursor-pointer h-[380px] flex flex-col">
                <Image src={item.img} alt={item.title} width={400} height={160} className="rounded-t-lg w-full h-[160px] object-cover" />
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-[#1F3B5D]">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 flex-1">{item.desc}</p>
                  <div className="text-sm text-[#2D4F75] font-medium mt-2">자세히 보기 →</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
/* -------------------- FACILITIES -------------------- */

function Facilities() {
  const processes = [
    { title: "원사 준비", desc: "원사 입고, 보관 및 사용 전 컨디션 관리" },
    { title: "와인더", desc: "권취(와인딩) 공정으로 작업 적합한 상태로 준비" },
    { title: "편직", desc: "자동 편직 설비로 규격에 맞는 네트 생산" },
    { title: "재단", desc: "현장 도면에 맞춘 규격 재단 및 가공" },
    { title: "검수 및 포장", desc: "규격·외관 검수 후 포장 및 출하" },
  ];

  return (
    <section id="facilities" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#1F3B5D] mb-4">생산 공정</h2>
        <p className="text-[15px] text-gray-600 mb-6">
          세경네트는 원사 준비 → 와인더 → 편직 → 재단 → 검수·포장까지
          모든 공정을 자체 운영하고 있습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          {processes.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-start bg-[#F5F6FA] rounded-lg px-4 py-5 shadow-sm"
            >
              <div className="w-7 h-7 rounded-full bg-[#1F3B5D] text-white text-xs flex items-center justify-center mb-3">
                {i + 1}
              </div>
              <div className="text-[15px] font-semibold text-[#1F3B5D] mb-1">
                {item.title}
              </div>
              <p className="text-[13px] text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
/* -------------------- CONTACT -------------------- */

function ContactSection() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setStatus("문의가 성공적으로 접수되었습니다.");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        () => {
          setStatus("전송에 실패했습니다. 다시 시도해주세요.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-[#F5F6FA]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#1F3B5D] mb-6">
          견적 및 상담문의
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Info */}
          <div>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
              문의하시면 담당자가 빠르게 답변드리겠습니다.<br />
              도면/사진이 있으면 보다 정확한 견적 안내가 가능합니다.
            </p>

            <div className="space-y-2 text-[15px] text-gray-800">
              <p>대표전화: 051-262-5631</p>
              <p>팩스: 051-262-5630</p>
              <p>이메일: info@sekyungtex.co.kr</p>
            </div>
          </div>

          {/* Right Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="성함 / 업체명"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border p-3 rounded-md text-[15px]"
              required
            />

            <input
              type="email"
              placeholder="이메일 주소"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border p-3 rounded-md text-[15px]"
              required
            />

            <textarea
              placeholder="문의 내용"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border p-3 rounded-md h-[120px] text-[15px]"
              required
            />

            <Button
              type="submit"
              disabled={loading}
              className="bg-[#1F3B5D] text-white font-medium px-6 py-3"
            >
              {loading ? "전송 중..." : "문의 접수하기"}
            </Button>

            {status && (
              <p className="text-[14px] text-center text-gray-700 mt-1">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
