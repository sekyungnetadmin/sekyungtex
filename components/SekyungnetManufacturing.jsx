"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, Phone, Mail, MapPin, Factory, Award, Globe } from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function SekyungnetManufacturing() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#20262A]">
 
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

        {/* LOGO */}
        <a href="#" className="flex items-center gap-3 -ml-8 transition-transform duration-300 hover:scale-105 hover:opacity-90">
          <img
            src="/assets/logo-sekyung.png"
            alt="Sekyung"
            className="h-12 md:h-14 w-auto scale-[4.0] origin-left object-contain transition-all duration-500 hover:brightness-110"
          />
        </a>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-10 text-body font-medium text-[#20262A]/90 justify-start pl-10">
          <a href="#manufacturing" className="hover:text-brand transition-colors duration-300">Company</a>
          <a href="#products" className="hover:text-brand transition-colors duration-300">Products</a>
          <a href="#facilities" className="hover:text-brand transition-colors duration-300">Facilities</a>
          <a href="#contact" className="hover:text-brand transition-colors duration-300">Contact</a>
        </nav>

        {/* RIGHT BUTTONS */}
        <div className="hidden md:flex items-center gap-6 ml-6">
          <Button asChild className="bg-brand hover:bg-black text-white transition-colors duration-300">
            <a href="#contact">Get a Quote</a>
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
      <div className="absolute inset-0 backdrop-blur-[1px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-2xl">

          <p className="uppercase tracking-[0.22em] text-label text-accent">
            DESIGN · MANUFACTURING · INSTALLATION
          </p>

          <h1 className="text-hero mt-4 font-semibold leading-[1.15]">
            Industrial Netting Engineered<br />for Performance
          </h1>

          <p className="mt-5 text-body-lg text-gray-200 leading-relaxed">
            High-strength industrial nets manufactured in-house with advanced knotless loom systems.
            SKN delivers certified netting solutions trusted across industrial, marine, and sports facilities.
          </p>

          <div className="mt-8 flex gap-3">
            <Button asChild size="lg" className="bg-accent hover:bg-[#ffb93a] text-white">
              <a href="#products">View Products <ChevronRight className="ml-1 h-4 w-4" /></a>
            </Button>

            <Button asChild size="lg" className="bg-white text-brand hover:bg-gray-200">
              <a href="#contact">Get a Quote <ChevronRight className="ml-1 h-4 w-4" /></a>
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
          SKN is the industrial textile brand delivering engineered fiber solutions
          that protect lives, sites, and industries. We provide custom sizing and professional square cutting for golf ranges, fishery nets, and industrial structures.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <div className="px-5 py-2 rounded-full border bg-white shadow-sm text-body-sm">
            35+ Years of Manufacturing Experience
          </div>
          <div className="px-5 py-2 rounded-full border bg-white shadow-sm text-body-sm">
            In-house Production in Korea
          </div>
          <div className="px-5 py-2 rounded-full border bg-white shadow-sm text-body-sm">
            High-Strength Industrial Fiber
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
    { icon: <Factory className="h-7 w-7 text-brand" />, label: "Production Capacity", value: "10,000+ units/year" },
    { icon: <Award className="h-7 w-7 text-brand" />, label: "Engineering Expertise", value: "35+ Years Experience" },
    { icon: <Globe className="h-7 w-7 text-brand" />, label: "Fast Delivery", value: "Reliable Lead Times" },
  ];

  return (
    <section id="manufacturing" className="py-24 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-h2 text-brand">Manufacturing & Quality</h2>

          <p className="mt-5 text-body text-slate-600">
            All SKN products are manufactured in-house in Korea, ensuring production quality,
            reliable lead times, material consistency, and custom specifications.
          </p>

          <p className="mt-4 text-body text-slate-600">
            With automated machinery and trained technicians, we deliver industrial-grade performance
            across all netting solutions.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-black/10 shadow-sm">
          <img
            src="/assets/sports3.jpg"
            alt="Manufacturing Facility"
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

        <h2 className="text-h2 text-brand mb-6">Technology & Quality</h2>

        <p className="text-body max-w-3xl mx-auto mb-16 text-slate-600 leading-relaxed">
          SKN applies advanced engineering techniques including
          <strong> twisted knotless net (muketsu)</strong>,
          <strong> square-cut custom fabrication</strong>,
          and <strong>CAD-based precision cutting</strong>.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <Feature title="Automation">
            Automated cutting and winding systems improve accuracy and production stability.
          </Feature>

          <Feature title="Material Innovation">
            HDPE, UHMWPE and composite yarns engineered for strength and long-term durability.
          </Feature>

          <Feature title="CAD-Based Custom Cutting">
            Net fabrication based on CAD ensures perfect square-cut sizing for golf towers and structures.
          </Feature>

          <Feature title="Certification">
            KS · ISO · UV resistance · tensile test certifications available.  
            Official performance test reports can be issued upon request.
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
  const fishingImages = ["/assets/fishing1.PNG", "/assets/fishing2.jpg", "/assets/fishing3.jpg"];
  const safetyImages = ["/assets/safety1.jpg", "/assets/safety2.jpg", "/assets/safety3.jpg"];

  const [current, setCurrent] = useState({ sports: 0, fishing: 0, safety: 0 });

  const click = (t) => setCurrent((prev) => ({
    ...prev,
    [t]: (prev[t] + 1) % (t === "sports" ? sportsImages.length : t === "fishing" ? fishingImages.length : safetyImages.length)
  }));

  const data = [
    { title: "Sports Netting", desc: "High-tensile netting engineered for golf, baseball, and sports facilities.", img: sportsImages[current.sports], type: "sports" },
    { title: "Fishing Nets", desc: "Saltwater-resistant PE nets for marine environments.", img: fishingImages[current.fishing], type: "fishing" },
    { title: "Safety Netting", desc: "Industrial-grade nets for construction and fall-protection systems.", img: safetyImages[current.safety], type: "safety" },
  ];

  return (
    <section id="products" className="pt-24 pb-16 bg-light">
      <div className="max-w-7xl mx-auto px-6">
<div className="flex items-center gap-6 mb-2">
        <h2 className="text-h2 text-brand">Main Products</h2>
  <a
    href="files/spec.pdf"
    download
    className="text-sm font-semibold hover:opacity-70 transition"
  >
    <span className="text-red-600">Download Available Specifications </span>
    <span className="text-black ml-1">(PDF)</span>
  </a>
</div>
<div className="h-[2px] w-20 bg-brand/30 mt-3 mb-10" />

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((p, i) => (
            <Card key={i} onClick={() => click(p.type)}
              className="rounded-2xl overflow-hidden bg-white border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
              
              <motion.img key={p.img} src={p.img} alt={p.title}
                initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }} className="w-full h-64 object-cover" />

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
      title: "Knotless Net Machinery",
      description: "In-house knotless (muketsu) machinery ensures precise weaving and fabrication.",
      image: "/assets/equip1.png",
    },
    {
      title: "Quality-Controlled Production",
      description: "Clean facilities ensure stable, reliable quality for all batches.",
      image: "/assets/facilities2.png",
    },
    {
      title: "Skilled Technicians",
      description: "Experienced technicians operate advanced machinery for consistent performance.",
      image: "/assets/facilities1.jpg",
    },
    {
      title: "Engineering & CAD Support",
      description: "We fabricate square-cut nets based on tower drawings and CAD layouts.",
      image: "/assets/drawing1.jpg",
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-h2 text-brand">Facilities & Equipment</h2>
        <div className="h-[2px] w-20 bg-gray-300 mt-3 mb-10" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilitiesData.map((item, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden bg-white border shadow-sm hover:shadow-md transition-all">

              <div className="relative w-full h-56">
                <img src={item.image} alt={item.title}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105" />
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

        <h2 className="text-h2 text-brand mb-6">Sustainability</h2>

        <p className="text-body max-w-3xl mx-auto text-slate-600 leading-relaxed">
          SKN integrates eco-friendly production, recycled materials, and energy-efficient systems
          to protect people and the environment.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-10">

          <SustainItem title="Eco Materials">
            Recycled & UV-resistant fibers designed for long-term durability.
          </SustainItem>

          <SustainItem title="Green Production">
            Low-emission dyeing and energy-efficient facilities.
          </SustainItem>

          <SustainItem title="Sustainable Impact">
            Reusable packaging and recycling initiatives minimize waste.
          </SustainItem>

        </div>
      </div>
    </section>
  );
}

const SustainItem = ({ title, children }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition">
    <h3 className="text-h3 text-accent mb-2">{title}</h3>
    <p className="text-body-sm text-slate-600">{children}</p>
  </div>
);

/* -------------------- CONTACT -------------------- */
function Contact() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
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
      .send("service_cho1qym", 
	"template_jqjigqg",
	form, 
	"MbilfGOlyaYDfBgoc")
      .then(
        () => {
          setStatus("Message sent successfully!");
          setForm({ name: "", email: "", phone: "", message: "" });
          setLoading(false);
        },
        () => {
          setStatus("Failed to send. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full py-24 bg-[#0C2230] text-white !text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-h2 text-white !text-white mb-2">Contact</h2>
        <p className="text-body text-slate-200 !text-white">
          Leave a brief project overview and we’ll get back to you shortly.
        </p>

        {/* Layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

          {/* LEFT — FORM */}
          <div className="lg:col-span-2">
            <Card className="rounded-2xl border-white/10 bg-white/10 backdrop-blur-md shadow-lg !text-white">
              <CardContent className="pt-6 !text-white">
                <form onSubmit={handleSubmit} className="grid gap-4 !text-white">

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="bg-white/20 text-white placeholder:text-gray-300 text-body !text-white"
                      required
                    />

                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="bg-white/20 text-white placeholder:text-gray-300 text-body !text-white"
                      required
                    />
                  </div>

                  <Input
                    name="phone"
                    placeholder="Phone (optional)"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="bg-white/20 text-white placeholder:text-gray-300 text-body !text-white"
                  />

                  <Textarea
                    name="message"
                    placeholder="Please provide project/site details and required specifications."
                    rows={6}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="bg-white/20 text-white placeholder:text-gray-300 text-body !text-white"
                  />

                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-accent text-[#0C2230] hover:bg-[#ffb93a] font-medium"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>

                  {status && (
                    <p className="text-body-sm text-center text-slate-100 !text-white">
                      {status}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT — CONTACT DETAILS */}
          <Card className="rounded-2xl border-white/10 bg-white/10 backdrop-blur-md shadow-lg p-6 !text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-h3 text-white !text-white">
                Contact Details
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3 text-body-sm text-slate-200 !text-white">
              <p className="flex items-center gap-2 !text-white">
                <Phone className="h-4 w-4" /> TEL +82-051-262-5631
              </p>
              <p className="flex items-center gap-2 !text-white">
                <Phone className="h-4 w-4 rotate-90" /> FAX +82-051-262-5630
              </p>
              <p className="flex items-center gap-2 !text-white">
                <Mail className="h-4 w-4" /> info@sekyungtex.co.kr
              </p>
              <p className="flex items-start gap-2 leading-relaxed !text-white">
                <MapPin className="h-4 w-4 mt-[2px]" />
                6 Dasan-ro 53 beon-gil, Saha-gu,<br />
                Busan, Republic of Korea
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}