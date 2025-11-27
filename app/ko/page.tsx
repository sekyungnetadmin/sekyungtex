"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, Phone, Mail, MapPin, Factory, Award, Globe } from "lucide-react";
import { motion } from "framer-motion";   // 
import emailjs from "@emailjs/browser";
 



export default function KoreaMain() {
  return (
    <div className="font-ko text-[#20262A] bg-white">
 
      <Hero />
      <CompanyIntro />
      <ProductCategories />
      <Facilities />
      
      <ContactSection />
 
    </div>
  );
}

/* -------------------- HEADER -------------------- */

function KoHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO — 영문과 동일 */}
        <Link 
          href="/ko"
          className="flex items-center gap-3 -ml-8 transition-transform duration-300 hover:scale-105 hover:opacity-90"
        >
          <img
            src="/assets/logo-sekyung.png"
            alt="Sekyung"
            className="h-12 md:h-14 w-auto scale-[4.0] origin-left object-contain transition-all duration-500 hover:brightness-110"
          />
        </Link>

        {/* NAVIGATION – 글자만 한국어로 */}
        <nav className="hidden md:flex items-center gap-10 text-body font-medium text-[#20262A]/90 justify-start pl-10">
          <Link href="/ko/company" className="hover:text-brand transition-colors duration-300">회사소개</Link>

          {/* 제품소개 드롭다운 */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-brand transition-colors duration-300">
              제품소개 <span>▼</span>
            </button>

            {open && (
              <div className="absolute left-0 top-8 w-48 bg-white shadow-lg border border-gray-200 rounded-md z-50 animate-dropdown">
                <ul className="text-[14px] text-gray-700 py-2">
                  <li className="px-4 py-2 hover:bg-gray-100"><Link href="/ko/products/golf">골프망</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-100"><Link href="/ko/products/sports">스포츠망</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-100"><Link href="/ko/products/ski">스키장 보호망</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-100"><Link href="/ko/products/safety">안전망</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-100"><Link href="/ko/products/fish">어업용 네트</Link></li>
                </ul>
              </div>
            )}
          </div>

          <Link href="/ko/facilities" className="hover:text-brand transition-colors duration-300">생산설비</Link>
          <Link href="/ko/contact" className="hover:text-brand transition-colors duration-300">견적문의</Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-6 ml-6">
          <Button
            asChild
            className="bg-brand hover:bg-black text-white transition-colors duration-300"
          >
            <a href="/ko/contact">견적 문의</a>
          </Button>

          <div className="flex items-center gap-3 text-body-sm text-slate-600">
            <Link href="/" className="hover:text-brand">EN</Link>
            <span className="opacity-40">|</span>
            <Link href="/ko" className="hover:text-brand">KR</Link>
          </div>
        </div>

      </div>
    </header>
  );
}
/* -------------------- HERO -------------------- */
function Hero() {
  return (
    <section className="relative text-white">
      <div className="absolute inset-0 bg-[url('/assets/hero-factory.jpg')] bg-cover bg-center opacity-30" />
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
      img: "/assets/sample-ski.jpg", // 필요 시 이미지 교체 가능
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
                <img src={item.img} alt={item.title} className="rounded-t-lg w-full h-[160px] object-cover" />
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
              {/* 동그란 단계 표시 */}
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
/* -------------------- PERFORMANCE -------------------- */

function Performance() {
  return (
    <section className="py-16 bg-[#F5F6FA]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#1F3B5D] mb-4">주요 납품실적</h2>
        <ul className="text-[15px] text-gray-700 leading-relaxed space-y-2">
          <li>• ○○시 체육시설관리사업소 골프연습장망 납품</li>
          <li>• ○○군 스포츠센터 야구 보호망 시공</li>
          <li>• ○○건설(주) 건설현장 안전망 공급</li>
          <li>• ○○수협 어망 및 어구 공급</li>
        </ul>
      </div>
    </section>
  );
}

/* -------------------- CONTACT -------------------- */

function ContactSection() {
  const [form, setForm] = React.useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .send(
        "service_3yirg7h",        // EmailJS 서비스 ID
        "template_2c4pmnh",       // EmailJS 템플릿 ID
        {
          name: form.name,
          phone: form.phone,
          message: form.message,
          email: "sekyungnet@gmail.com", // 받는 이메일 주소
        },
        "-w_fPWNLiYzxocvMI"       // Public Key
      )
      .then(
        () => {
          setStatus("문의가 성공적으로 접수되었습니다.");
          setForm({ name: "", phone: "", message: "" });
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
              <p>이메일: sekyungnet@gmail.com</p>
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
              type="text"
              placeholder="연락처"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border p-3 rounded-md text-[15px]"
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

 

/* -------------------- FOOTER -------------------- */

function KoFooter() {
  return (
    <footer className="bg-[#1F3B5D] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 text-sm">
        <p>(주)세경네트 | 부산광역시 사하구 다산로 53번길 6</p>
<p>T. 051-262-5631   F. 051-262-5630   E. sekyungnet@gmail.com</p>
        <p className="mt-2 text-blue-200">© 2025 Sekyung Net. All rights reserved.</p>
      </div>
    </footer>
  );
}