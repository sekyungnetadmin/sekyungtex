"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Factory,
  Award,
  Globe,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function SekyungnetManufacturingKo() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#20262A]">
      <TopNav />
      <Hero />
      <About />
      <Manufacturing />
      <Technology />
      <Products />
      <Facilities />
      <Sustainability />
      <Contact />
    </div>
  );
}

/* -------------------- NAV -------------------- */
function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-3 -ml-4 transition-transform hover:scale-105"
        >
          <img
            src="/assets/logo-sekyung.png"
            alt="Sekyung"
            className="h-12 md:h-14 w-auto scale-[4.0] origin-left object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-10 text-body font-medium text-[#20262A]/90">
          <a href="#manufacturing" className="hover:text-brand">회사소개</a>
          <a href="#products" className="hover:text-brand">제품소개</a>
          <a href="#facilities" className="hover:text-brand">보유설비</a>
          <a href="#contact" className="hover:text-brand">문의하기</a>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <Button
            asChild
            className="bg-brand hover:bg-black text-white transition-colors"
          >
            <a href="#contact">견적 문의</a>
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
      <div className="absolute inset-0 bg-[url('/assets/hero-factory.jpg')] bg-cover bg-center opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E28]/90 via-[#0F2D3A]/85 to-[#0F2D3A]/40" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="uppercase tracking-[0.22em] text-label text-accent">
            MADE IN KOREA
          </p>

          <h1 className="text-hero mt-4 font-semibold">
            자체 생산 기반의 산업용 네트 전문 제조기업
          </h1>

          <p className="mt-5 text-body-lg text-gray-200 leading-relaxed">
            세경네트는 산업·스포츠·해양 등 다양한 분야에 맞는 고강도 산업용 네트를
            자체 설계·제작하여 안정적인 품질과 납기를 제공합니다.
          </p>

          <div className="mt-8 flex gap-3">
            <Button asChild size="lg" className="bg-accent hover:bg-[#ffb93a] text-white">
              <a href="#products">제품 보기 <ChevronRight className="ml-1 h-4 w-4" /></a>
            </Button>

            <Button asChild size="lg" className="bg-white text-brand hover:bg-gray-200">
              <a href="#contact">견적 문의 <ChevronRight className="ml-1 h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- ABOUT -------------------- */
function About() {
  return (
    <section id="about" className="py-24 bg-[#F9FAFB] border-b border-black/5 text-center">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-h2 text-brand mb-6">About SekyungNET</h2>

        <p className="text-body max-w-3xl mx-auto leading-relaxed">
          세경네트는 산업 현장과 시설을 보호하기 위한 고강도 섬유 솔루션을 제공하는
          산업용 네트 전문 제조 브랜드입니다. 골프장, 어장, 산업현장 등 다양한 환경에 맞춘
          맞춤 제작 및 정밀한 규격 재단을 제공합니다.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <div className="px-5 py-2 rounded-full border bg-white shadow-sm text-body-sm">
            35년 이상의 제조 경험
          </div>
          <div className="px-5 py-2 rounded-full border bg-white shadow-sm text-body-sm">
            100% 국내 자체 생산
          </div>
          <div className="px-5 py-2 rounded-full border bg-white shadow-sm text-body-sm">
            고강도 산업용 섬유 소재
          </div>
        </div>

        <p className="text-brand mt-8 font-medium italic text-body">
          “Engineered Fiber for Safer World”
        </p>
      </div>
    </section>
  );
}

/* -------------------- MANUFACTURING -------------------- */
function Manufacturing() {
  const stats = [
    { icon: <Factory className="h-7 w-7 text-brand" />, label: "연간 생산량", value: "10,000+ 세트/년" },
    { icon: <Award className="h-7 w-7 text-brand" />, label: "기술력", value: "35년 이상 경험" },
    { icon: <Globe className="h-7 w-7 text-brand" />, label: "납기", value: "정확하고 신속한 공급" },
  ];

  return (
    <section id="manufacturing" className="py-24 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-h2 text-brand">제조 및 품질관리</h2>

          <p className="mt-5 text-body text-slate-600">
            세경네트의 모든 제품은 국내 공장에서 직접 생산되어 품질, 납기, 규격을
            철저하게 관리합니다.
          </p>

          <p className="mt-4 text-body text-slate-600">
            자동화 설비와 숙련된 기술 인력이 정확한 규격과 안정된 품질을 보장합니다.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-black/10 shadow-sm">
          <img
            src="/assets/sports3.jpg"
            alt="제조시설"
            className="w-full h-[420px] object-cover"
          />
        </div>
      </div>

      <div className="mt-20 grid sm:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
        {stats.map((s, i) => (
          <div key={i} className="rounded-2xl border bg-[#F9FAFB] p-6 text-center shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-center mb-3">{s.icon}</div>
            <div className="text-body-lg font-bold text-brand">{s.value}</div>
            <div className="text-body-sm text-slate-600 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- TECHNOLOGY -------------------- */
function Technology() {
  return (
    <section id="technology" className="py-20 bg-white border-b border-black/5 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-h2 text-brand mb-6">기술력 및 품질</h2>

        <p className="text-body max-w-3xl mx-auto mb-16 text-slate-600 leading-relaxed">
          세경네트는 <strong>무결속(무켓츠) 네트 기술</strong>,  
          <strong>정밀 규격 재단</strong>,  
          <strong>CAD 기반 맞춤 제작</strong> 등의 고도화된 공정을 적용합니다.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Feature title="자동화 생산">
            자동 결속기 및 권취 설비로 생산 정확도와 효율성을 향상합니다.
          </Feature>

          <Feature title="소재 기술">
            HDPE, UHMWPE 등 고강도 섬유를 활용해 내구성과 성능을 극대화합니다.
          </Feature>

          <Feature title="정밀 CAD 재단">
            CAD 도면 기반 정밀 규격 재단으로 골프타워·산업 구조물에 최적화됩니다.
          </Feature>

          <Feature title="인증 및 시험성적서">
            KS·ISO·UV 내구성·인장강도 등 다양한 시험성적서 발급이 가능합니다.
          </Feature>
        </div>
      </div>
    </section>
  );
}

const Feature = ({ title, children }) => (
  <div className="p-6 bg-[#FAFAFA] rounded-2xl shadow-sm border">
    <h3 className="text-h3 mb-2">{title}</h3>
    <p className="text-body-sm text-slate-600">{children}</p>
  </div>
);

/* -------------------- PRODUCTS -------------------- */
function Products() {
  const sportsImages = ["/assets/sports1.jpg", "/assets/sports2.jpg", "/assets/sports3.jpg"];
  const fishingImages = ["/assets/fishing1.jpg", "/assets/fishing2.jpg", "/assets/fishing3.jpg"];
  const safetyImages = ["/assets/safety1.jpg", "/assets/safety2.jpg", "/assets/safety3.jpg"];

  const [current, setCurrent] = useState({ sports: 0, fishing: 0, safety: 0 });

  const click = (t) =>
    setCurrent((prev) => ({
      ...prev,
      [t]:
        (prev[t] + 1) %
        (t === "sports"
          ? sportsImages.length
          : t === "fishing"
          ? fishingImages.length
          : safetyImages.length),
    }));

  const data = [
    {
      title: "스포츠 네트",
      desc: "골프장, 야구장, 축구장 등 스포츠 시설에 최적화된 고강도 네트",
      img: sportsImages[current.sports],
      type: "sports",
    },
    {
      title: "어망 / 해양용 네트",
      desc: "내염성·내구성이 뛰어난 어업 및 해양 산업용 네트",
      img: fishingImages[current.fishing],
      type: "fishing",
    },
    {
      title: "안전망 / 방호망",
      desc: "건설·산업현장용 고강도 안전망",
      img: safetyImages[current.safety],
      type: "safety",
    },
  ];

  return (
    <section id="products" className="pt-24 pb-16 bg-[#F4F6F8]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-h2 text-brand">주요 제품</h2>
        <div className="h-[2px] w-20 bg-brand/30 mt-3 mb-10" />

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((p, i) => (
            <Card
              key={i}
              onClick={() => click(p.type)}
              className="rounded-2xl overflow-hidden bg-white border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
            >
              <motion.img
                key={p.img}
                src={p.img}
                alt={p.title}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
                className="w-full h-64 object-cover"
              />
              <CardHeader className="pb-1 pt-5 px-6">
                <CardTitle className="text-h3 text-brand">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-body-sm text-slate-600 px-6 pb-6">
                {p.desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- FACILITIES -------------------- */
function Facilities() {
  const facilitiesData = [
    {
      title: "무결속(무켓츠) 네트 설비",
      description: "정밀한 무결속 공정으로 안정된 네트 품질을 제공합니다.",
      image: "/assets/equip1.png",
    },
    {
      title: "품질관리 생산 환경",
      description: "청결하고 관리된 환경에서 균일한 품질로 생산됩니다.",
      image: "/assets/facilities2.png",
    },
    {
      title: "숙련된 기술 인력",
      description: "숙련된 인력이 정밀 설비를 운용하여 고품질을 유지합니다.",
      image: "/assets/facilities1.jpg",
    },
    {
      title: "도면 기반 맞춤 제작",
      description: "골프 타워·산업 구조물에 맞춘 CAD 기반 규격 재단 제공.",
      image: "/assets/drawing1.jpg",
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-h2 text-brand">보유 설비</h2>
        <div className="h-[2px] w-20 bg-gray-300 mt-3 mb-10" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilitiesData.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden bg-white border shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative w-full h-56">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-h3 text-brand mb-2">{item.title}</h3>
                <p className="text-body-sm text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- SUSTAINABILITY -------------------- */
function Sustainability() {
  return (
    <section id="sustainability" className="py-24 bg-[#F4F6F8] text-center border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-h2 text-brand mb-6">지속가능경영</h2>

        <p className="text-body max-w-3xl mx-auto text-slate-600 leading-relaxed">
          세경네트는 친환경 생산, 재활용 소재 활용, 효율적인 에너지 시스템 등
          지속 가능한 생산체계를 구축하고 있습니다.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-10">
          <SItem title="친환경 소재">
            UV·내구성 소재 및 재활용 섬유 적용.
          </SItem>

          <SItem title="친환경 생산 공정">
            저배출 염색 시스템 및 에너지 효율 설비 운영.
          </SItem>

          <SItem title="지속가능한 가치">
            재활용 포장재 및 산업 폐기물 최소화.
          </SItem>
        </div>
      </div>
    </section>
  );
}

const SItem = ({ title, children }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition">
    <h3 className="text-h3 text-accent mb-2">{title}</h3>
    <p className="text-body-sm text-slate-600">{children}</p>
  </div>
);

/* -------------------- CONTACT -------------------- */
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .send(
        "service_3yirg7h",
        "template_2c4pmnh",
        form,
        "-w_fPWNLiYzxocvMI"
      )
      .then(
        () => {
          setStatus("메시지가 전송되었습니다.");
          setForm({ name: "", email: "", phone: "", message: "" });
          setLoading(false);
        },
        () => {
          setStatus("전송 실패. 다시 시도해주세요.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="w-full py-24 bg-[#0C2230] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-h2 text-white mb-2">문의하기</h2>
        <p className="text-body text-slate-200">
          프로젝트 개요를 남겨주시면 빠르게 회신드리겠습니다.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <Card className="rounded-2xl border-white/10 bg-white/10 backdrop-blur-md shadow-lg">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="이름"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="bg-white/20 text-white placeholder:text-gray-300"
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="이메일"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="bg-white/20 text-white placeholder:text-gray-300"
                    />
                  </div>

                  <Input
                    name="phone"
                    placeholder="연락처 (선택)"
                    value={form.phone}
                    onChange={handleChange}
                    className="bg-white/20 text-white placeholder:text-gray-300"
                  />

                  <Textarea
                    name="message"
                    rows={6}
                    placeholder="문의 내용을 입력해주세요."
                    value={form.message}
                    onChange={handleChange}
                    className="bg-white/20 text-white placeholder:text-gray-300"
                  />

                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-accent text-[#0C2230] hover:bg-[#ffb93a] font-medium"
                  >
                    {loading ? "전송 중..." : "보내기"}
                  </Button>

                  {status && (
                    <p className="text-body-sm text-center text-slate-100">
                      {status}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          <Card className="rounded-2xl border-white/10 bg-white/10 backdrop-blur-md shadow-lg p-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-h3 text-white">
                Contact Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-body-sm text-slate-200">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> TEL +82-051-262-5631
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 rotate-90" /> FAX +82-051-262-5630
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> info@sekyungnet.com
              </p>
              <p className="flex items-start gap-2 leading-relaxed">
                <MapPin className="h-4 w-4 mt-[2px]" />
                부산광역시 사하구 다산로53번길 6
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}