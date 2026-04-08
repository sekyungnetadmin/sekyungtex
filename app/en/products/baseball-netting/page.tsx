import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Baseball Netting | Batting Cage Nets Korea | SekyungNET',
  description: 'Custom knotless baseball batting cage nets manufactured in Korea. HDPE & Dyneema options. Lightweight, durable, KS/ISO certified.',
  keywords: ['baseball netting','batting cage net','knotless baseball net','HDPE baseball net','dyneema baseball net','netting manufacturer korea'],
  alternates: { canonical: 'https://sekyungtex.co.kr/en/products/baseball-netting' },
}

const applications = ['Baseball & softball batting cages','Professional baseball stadiums','Training & practice facilities','Backstop & outfield netting','Indoor training facilities','Multi-sport enclosures']

const features = ['Knotless construction — smooth surface, reduced ball wear','UV-stabilized yarn — long outdoor lifespan','CAD-based square-cut fabrication','Custom mesh size and net dimensions available','KS / ISO certified — test reports issued on request']

const specs = [
  {label:'Material',value:'HDPE / Dyneema'},
  {label:'Construction',value:'Knotless'},
  {label:'Mesh size',value:'80 – 200mm (custom)'},
  {label:'Color',value:'Green, Black, White, Brown, Grey'},
  {label:'Size',value:'Custom cut to order'},
  {label:'Lead time',value:'1–3 weeks'},
]

const materials = [
  {name:'HDPE (High-Density Polyethylene)',tag:'Most Popular',tagColor:'bg-[#e8c840] text-[#111]',desc:'The standard choice for baseball batting cages and practice facilities across Asia. Lightweight, UV-resistant, and ideal for everyday heavy use.',props:['Lightweight','UV-resistant','High impact resistance',],use:'Batting cages · Practice facilities · Training centers'},
  {name:'Dyneema (UHMWPE)',tag:'',tagColor:'',desc:'Ultra-high-strength fiber preferred by professional baseball stadiums. 15× stronger than steel by weight with an ultra-thin diameter — near-invisible from the stands.',props:['Extreme tensile strength','Ultra-thin diameter','Near-transparent','Long service life'],use:'Professional stadiums · High-impact applications'},
]

const faqs = [
  {q:'Can you manufacture custom sizes?',a:'Yes. All nets are custom-fabricated based on your facility dimensions and drawings.'},
  {q:'What is the lead time?',a:'Standard orders are fulfilled within 1–3 weeks. Large custom orders may vary.'},
  {q:'Which material is used in professional stadiums?',a:'Professional baseball stadiums across Asia primarily use Dyneema knotless nets for their ultra-thin diameter and near-invisible appearance from the stands.'},
]

const otherProducts = [
  {name:'Golf Driving Range Netting',href:'/en/products/golf-netting',active:false},
  {name:'Baseball Netting',href:'/en/products/baseball-netting',active:true},
  {name:'Safety Netting',href:'/en/products/safety-netting',active:false},
  {name:'Ski Slope Netting',href:'/en/products/ski-slope-netting',active:false},
  {name:'Fishing Nets',href:'/en/products/fishing-nets',active:false},
]

const whyUs = [{title:'35+ Years Experience',sub:'Proven industrial netting manufacturer'},{title:'In-house Production',sub:'Full control from yarn to finished net'},{title:'Custom Every Order',sub:'CAD-based cut to your exact spec'}]

export default function BaseballNettingPage() {
  return (
    <main className="bg-white text-sm">
      <section className="bg-[#1a2332] w-full relative overflow-hidden px-6 py-14" style={{backgroundImage:`linear-gradient(rgba(26,35,50,0.82),rgba(26,35,50,0.82)),url(/assets/products/sports/sports-3.webp)`,backgroundSize:'cover',backgroundPosition:'center'}}>
        
        <div className="relative max-w-7xl mx-auto grid grid-cols-[1fr_300px] gap-12 items-center">
          <div>
            <p className="text-[11px] tracking-[0.12em] text-[#e8c840] font-medium mb-3">PRODUCTS · SPORTS NETTING</p>
            <h1 className="text-[34px] font-bold text-white leading-tight mb-3">Baseball Netting</h1>
            <p className="text-[14px] text-[#8fa3bb] leading-relaxed mb-6 max-w-xl">High-tensile <strong className="text-white font-medium">knotless</strong> baseball nets manufactured in Korea. HDPE and Dyneema options — lightweight, durable, and built for repeated ball impact.</p>
            <div className="flex gap-3">
              <a href="/en#contact" className="bg-[#e8c840] text-[#111] px-5 py-2.5 rounded-md text-[13px] font-bold hover:bg-yellow-300 transition-colors">Get a Quote</a>
              <a href="/files/sekyung_specifications.pdf" className="border border-white/25 text-white px-5 py-2.5 rounded-md text-[13px] hover:bg-white/10 transition-colors">Download Specs</a>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <p className="text-[10px] text-[#e8c840] tracking-widest font-semibold mb-3">QUICK SPECS</p>
            {[{l:'Construction',v:'Knotless'},{l:'Material',v:'HDPE / Dyneema'},{l:'Lead time',v:'1–3 weeks'},{l:'Certification',v:'KS · ISO'}].map((row)=>(
              <div key={row.l} className="flex justify-between py-2 border-b border-white/[0.07] last:border-0">
                <span className="text-[12px] text-[#8fa3bb]">{row.l}</span><span className="text-[12px] font-semibold text-white">{row.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white w-full border-b border-gray-200 px-6 py-2.5">
        <nav className="max-w-7xl mx-auto flex gap-1.5 text-[12px] text-gray-400">
          <a href="/en" className="text-gray-500 hover:text-gray-700">Home</a><span>›</span>
          <a href="/en#products" className="text-gray-500 hover:text-gray-700">Products</a><span>›</span>
          <span className="text-gray-900">Baseball Netting</span>
        </nav>
      </section>
      <section className="bg-white w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-[1fr_300px]">
          <div className="border-r border-gray-200">
            <div className="bg-[#1a2332] px-8 py-7 border-b border-[#243040]">
              <p className="text-[10px] tracking-[0.12em] text-[#e8c840] font-bold uppercase mb-2">About Our Nets</p>
              <h2 className="text-[17px] font-bold text-white mb-3">Why we use knotless construction</h2>
              <p className="text-[13px] text-[#8fa3bb] leading-relaxed mb-5">Knotless nets are the industry standard for baseball facilities across Asia — from batting cages to professional stadiums. The smooth, even surface reduces wear on balls and the net itself, while the lighter weight puts less strain on poles and structures.</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3"><div className="w-2 h-2 rounded-full bg-[#e8c840]"/><span className="text-[12px] font-semibold text-[#e8c840]">Knotless Construction</span></div>
                  {['Smooth surface — less ball wear','Lighter weight, less wind load','No weak points at knots','Longer service life','Standard for Asian pro baseball'].map((t)=>(
                    <div key={t} className="flex items-start gap-2 mb-1.5 last:mb-0"><span className="text-[#e8c840] text-[11px] mt-0.5">✓</span><span className="text-[12px] text-[#c8dce8]">{t}</span></div>
                  ))}
                </div>
                <div className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3"><div className="w-2 h-2 rounded-full bg-gray-500"/><span className="text-[12px] font-semibold text-gray-400">Knotted Construction</span></div>
                  {['Rough surface from knots','Heavier — higher wind load','Knots wear from friction','Shorter lifespan at knot points','Less uniform appearance'].map((t)=>(
                    <div key={t} className="flex items-start gap-2 mb-1.5 last:mb-0"><span className="text-gray-500 text-[11px] mt-0.5">–</span><span className="text-[12px] text-gray-500">{t}</span></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white px-8 py-6 border-b border-gray-100">
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <Image src="/assets/baseball-hero.jpg" alt="Baseball netting by SekyungNET" fill sizes="(max-width: 768px) 100vw, 700px" quality={90} priority className="object-cover object-[center_20%]"/>
              </div>
            </div>
            <div className="bg-white px-8 py-6 border-b border-gray-100">
              <p className="text-[10px] tracking-[0.12em] text-[#e8c840] font-bold uppercase mb-2">Materials</p>
              <h2 className="text-[16px] font-semibold text-gray-900 mb-4">Choose your material</h2>
              <div className="flex flex-col gap-3">
                {materials.map((mat)=>(
                  <div key={mat.name} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="text-[14px] font-semibold text-gray-900">{mat.name}</span>
                      {mat.tag&&<span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${mat.tagColor}`}>{mat.tag}</span>}
                    </div>
                    <p className="text-[13px] text-gray-500 leading-relaxed mb-3">{mat.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-2">{mat.props.map((p)=><span key={p} className="text-[11px] bg-[#f8f8f6] border border-[#ebebeb] text-gray-600 px-2.5 py-0.5 rounded-full">{p}</span>)}</div>
                    <p className="text-[11px] text-[#e8c840] font-medium">{mat.use}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white px-8 py-6 border-b border-gray-100">
              <p className="text-[10px] tracking-[0.12em] text-[#e8c840] font-bold uppercase mb-2">Applications</p>
              <h2 className="text-[16px] font-semibold text-gray-900 mb-4">Where it&apos;s used</h2>
              <div className="grid grid-cols-2 gap-2">
                {applications.map((app)=>(
                  <div key={app} className="flex items-center gap-2.5 px-3.5 py-3 rounded-md bg-[#f8f8f6] border border-[#ebebeb]">
                    <div className="w-4 h-0.5 bg-[#e8c840] flex-shrink-0 rounded-sm"/><span className="text-[13px] text-gray-700">{app}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white px-8 py-6 border-b border-gray-100">
              <p className="text-[10px] tracking-[0.12em] text-[#e8c840] font-bold uppercase mb-2">Features</p>
              <h2 className="text-[16px] font-semibold text-gray-900 mb-4">What sets it apart</h2>
              <div className="flex flex-col gap-1.5">
                {features.map((feat,i)=>(
                  <div key={i} className="flex items-start gap-3 px-3.5 py-3 rounded-md bg-[#f8f8f6] border border-[#ebebeb]">
                    <div className="min-w-[22px] h-[22px] bg-[#1a2332] text-[#e8c840] rounded flex items-center justify-center text-[11px] font-bold flex-shrink-0">{String(i+1).padStart(2,'0')}</div>
                    <span className="text-[13px] text-gray-700 leading-relaxed pt-0.5">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white px-8 py-6 border-b border-gray-100">
              <p className="text-[10px] tracking-[0.12em] text-[#e8c840] font-bold uppercase mb-2">Specifications</p>
              <h2 className="text-[16px] font-semibold text-gray-900 mb-4">Technical details</h2>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full text-[13px]">
                  <thead><tr className="bg-[#1a2332]"><th className="text-left px-4 py-2.5 text-[#8fa3bb] font-medium text-[11px] tracking-wider uppercase">Item</th><th className="text-left px-4 py-2.5 text-[#8fa3bb] font-medium text-[11px] tracking-wider uppercase">Detail</th></tr></thead>
                  <tbody>{specs.map((row)=>(<tr key={row.label} className="border-t border-gray-100"><td className="px-4 py-3 text-gray-500 w-[38%]">{row.label}</td><td className="px-4 py-3 text-gray-900 font-medium">{row.value}</td></tr>))}</tbody>
                </table>
              </div>
            </div>
            <div className="bg-white px-8 py-6">
              <p className="text-[10px] tracking-[0.12em] text-[#e8c840] font-bold uppercase mb-2">FAQ</p>
              <h2 className="text-[16px] font-semibold text-gray-900 mb-4">Frequently asked</h2>
              <div className="flex flex-col gap-2.5">
                {faqs.map((faq)=>(
                  <div key={faq.q} className="border border-gray-200 border-l-[3px] border-l-[#e8c840] rounded-r-lg px-4 py-3.5">
                    <p className="text-[13px] font-semibold text-gray-900 mb-1.5">{faq.q}</p>
                    <p className="text-[13px] text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <aside className="bg-white">
            <div className="p-4 border-b border-gray-100">
              <p className="text-[10px] tracking-widest text-[#e8c840] font-bold uppercase mb-3">Get a Quote</p>
              <a href="/en#contact" className="block w-full bg-[#1a2332] text-white text-center py-3 rounded-lg text-[13px] font-medium mb-2 hover:bg-[#243040] transition-colors">Contact Us</a>
              <a href="/files/sekyung_specifications.pdf" className="block w-full border border-gray-200 text-gray-700 text-center py-2.5 rounded-lg text-[13px] hover:bg-gray-50 transition-colors">Download Spec Sheet</a>
              <div className="mt-4 flex flex-col gap-2">
                {[{l:'TEL',v:'+82-051-262-5631'},{l:'Email',v:'info@sekyungtex.co.kr'},{l:'Chat',v:'WhatsApp available'}].map((r)=>(<div key={r.l} className="flex gap-2"><span className="text-[11px] text-gray-300 min-w-[36px] pt-px">{r.l}</span><span className="text-[12px] text-gray-600">{r.v}</span></div>))}
              </div>
            </div>
            <div className="p-4 border-b border-gray-100">
              <p className="text-[10px] tracking-widest text-[#e8c840] font-bold uppercase mb-3">Other Products</p>
              <div className="flex flex-col gap-1.5">
                {otherProducts.map((p)=>(<a key={p.name} href={p.href} className={`flex items-center justify-between px-3 py-2.5 rounded-md border text-[12px] transition-colors ${p.active?'bg-[#1a2332] border-[#1a2332] text-[#e8c840] font-medium':'bg-[#f8f8f6] border-[#ebebeb] text-gray-600 hover:bg-gray-100'}`}><span>{p.name}</span><span className={p.active?'text-[#e8c840]':'text-gray-300'}>›</span></a>))}
              </div>
            </div>
            <div className="p-4">
              <p className="text-[10px] tracking-widest text-[#e8c840] font-bold uppercase mb-3">Why SekyungNET</p>
              <div className="bg-[#1a2332] rounded-lg p-4">
                {whyUs.map((item)=>(<div key={item.title} className="flex gap-2.5 mb-3 last:mb-0"><div className="w-7 h-7 bg-[#e8c840]/15 rounded flex items-center justify-center flex-shrink-0"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#e8c840" strokeWidth="2"><polyline points="2,7 5,10 12,3"/></svg></div><div><p className="text-[12px] font-medium text-white">{item.title}</p><p className="text-[11px] text-[#7a93ab] leading-snug">{item.sub}</p></div></div>))}
              </div>
            </div>
          </aside>
        </div>
      </section>
      <section id="contact" className="bg-[#1a2332] w-full px-6 py-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <p className="text-[10px] tracking-widest text-[#e8c840] font-medium mb-1.5">READY TO ORDER?</p>
            <h3 className="text-white text-[18px] font-semibold mb-1">Get a custom quote today</h3>
            <p className="text-[#8fa3bb] text-[13px]">Tell us your dimensions and we&apos;ll respond within 24 hours.</p>
          </div>
          <a href="/en#contact"
          className="bg-[#e8c840] text-[#111] px-7 py-3 
          rounded-md text-[13px] font-bold whitespace-nowrap
          hover:bg-yellow-300 transition-colors">Contact Us →</a>
        </div>
      </section>
    </main>
  )
}
