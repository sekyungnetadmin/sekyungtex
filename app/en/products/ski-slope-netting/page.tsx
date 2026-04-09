import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Ski Slope Netting | Snow Sport Barrier Nets | SekyungNET Korea',
  description: 'Heavy-duty HDPE ski slope safety nets manufactured in Korea. A-net and B-net types available. Custom fabrication for ski resorts and winter sport facilities.',
  keywords: ['ski slope safety net','ski barrier net','snow sport safety net','ski resort netting','winter sport net manufacturer','A net B net ski'],
  alternates: { canonical: 'https://sekyungtex.co.kr/en/products/ski-slope-netting' },
}

const applications = ['Ski slope perimeter barriers','Out-of-bounds containment netting','Ski jump & terrain park safety nets','Snowboard park barriers','Race course protection nets','Chairlift safety enclosures']

const features = [
  'A-net and B-net types available — custom manufactured to order',
  'HDPE construction — durable and weather resistant',
  'High impact energy absorption for collision safety',
  'High-visibility color options for skier awareness',
  'Custom sizes to fit any slope geometry',
  'KS / ISO certified — test reports issued on request',
]

const specs = [
  {label:'Material',value:'HDPE'},
  {label:'Net type',value:'A-net / B-net (custom)'},
  {label:'Mesh size',value:'Custom to application'},
  {label:'Color',value:'Orange, Yellow, Red (high-visibility)'},
  {label:'Size',value:'Custom fabricated to order'},
  {label:'Lead time',value:'1–3 weeks'},
]

const materials = [
  {name:'HDPE (High-Density Polyethylene)',tag:'Standard',tagColor:'bg-[#e8c840] text-[#111]',desc:'HDPE is the standard material for ski slope safety nets. Durable, UV-resistant, and able to withstand the outdoor conditions encountered at ski resorts year-round.',props:['High strength','UV-resistant','Weather resistant','Long service life'],use:'All ski slope barrier applications'},
]

const faqs = [
  {q:'What is the difference between A-net and B-net?',a:'A-net and B-net refer to different ski slope safety net classifications based on impact energy absorption capacity. The appropriate type depends on your slope gradient, speed zone, and safety requirements. Contact us for a recommendation based on your site.'},
  {q:'Can nets be customized for specific slope angles?',a:'Yes. All nets are custom-fabricated based on your slope dimensions and site-specific requirements. Contact us with your specifications.'},
  {q:'What colors are available?',a:'We offer high-visibility options including orange, yellow, and red. Custom colors are also available upon request.'},
]

const otherProducts = [
  {name:'Golf Driving Range Netting',href:'/en/products/golf-driving-range-netting',active:false},
  {name:'Baseball Netting',href:'/en/products/baseball-netting',active:false},
  {name:'Safety Netting',href:'/en/products/safety-netting',active:false},
  {name:'Ski Slope Netting',href:'/en/products/ski-slope-netting',active:true},
  {name:'Fishing Nets',href:'/en/products/fishing-nets',active:false},
]

const whyUs = [{title:'35+ Years Experience',sub:'Proven industrial netting manufacturer'},{title:'In-house Production',sub:'Full control from yarn to finished net'},{title:'Custom Every Order',sub:'Fabricated to your exact slope dimensions'}]

export default function SkiSlopeNettingPage() {
  return (
    <main className="bg-white text-sm">
      <section className="bg-[#1a2332] w-full relative overflow-hidden px-6 py-14" style={{backgroundImage:`linear-gradient(rgba(26,35,50,0.82),rgba(26,35,50,0.82)),url(/assets/products/ski/ski-2_cleanup.jpg)`,backgroundSize:'cover',backgroundPosition:'center'}}>
        
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 md:gap-12 items-center">
          <div>
            <p className="text-[11px] tracking-[0.12em] text-[#e8c840] font-medium mb-3">PRODUCTS · WINTER SPORTS SAFETY</p>
            <h1 className="text-[34px] font-bold text-white leading-tight mb-3">Ski Slope Netting</h1>
            <p className="text-[14px] text-[#8fa3bb] leading-relaxed mb-6 max-w-xl">HDPE safety nets for <strong className="text-white font-medium">ski resorts and winter sport facilities</strong>. A-net and B-net types available — all custom fabricated to your slope dimensions.</p>
            <div className="flex gap-3">
              <a href="/en#contact" className="bg-[#e8c840] text-[#111] px-5 py-2.5 rounded-md text-[13px] font-bold hover:bg-yellow-300 transition-colors">Get a Quote</a>
              <a href="/files/sekyung_specifications.pdf" className="border border-white/25 text-white px-5 py-2.5 rounded-md text-[13px] hover:bg-white/10 transition-colors">Download Specs</a>
            </div>
          </div>
          <div className="hidden md:block bg-white/5 border border-white/10 rounded-xl p-5">
            <p className="text-[10px] text-[#e8c840] tracking-widest font-semibold mb-3">QUICK SPECS</p>
            {[{l:'Material',v:'HDPE'},{l:'Net type',v:'A-net / B-net'},{l:'Lead time',v:'1–3 weeks'},{l:'Certification',v:'KS · ISO'}].map((row)=>(
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
          <span className="text-gray-900">Ski Slope Netting</span>
        </nav>
      </section>
      <section className="bg-white w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px]">
          <div className="border-r-0 lg:border-r border-gray-200">
            <div className="bg-white px-8 py-6 border-b border-gray-100">
              <div className="relative w-full h-80 rounded-lg overflow-hidden">
                <Image src="/assets/sample-ski.jpg" alt="Ski slope safety netting by SekyungNET" fill className="object-cover object-center"/>
              </div>
            </div>
            <div className="bg-white px-8 py-6 border-b border-gray-100">
              <p className="text-[10px] tracking-[0.12em] text-[#e8c840] font-bold uppercase mb-2">Material</p>
           
              {materials.map((mat)=>(<div key={mat.name} className="border border-gray-200 rounded-lg p-4"><div className="flex items-center gap-2.5 mb-2"><span className="text-[14px] font-semibold text-gray-900">{mat.name}</span>{mat.tag&&<span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${mat.tagColor}`}>{mat.tag}</span>}</div><p className="text-[13px] text-gray-500 leading-relaxed mb-3">{mat.desc}</p><div className="flex flex-wrap gap-1.5 mb-2">{mat.props.map((p)=><span key={p} className="text-[11px] bg-[#f8f8f6] border border-[#ebebeb] text-gray-600 px-2.5 py-0.5 rounded-full">{p}</span>)}</div><p className="text-[11px] text-[#e8c840] font-medium">{mat.use}</p></div>))}
            </div>
            <div className="bg-white px-8 py-6 border-b border-gray-100">
              <p className="text-[10px] tracking-[0.12em] text-[#e8c840] font-bold uppercase mb-2">Applications</p>
              <h2 className="text-[16px] font-semibold text-gray-900 mb-4">Where it&apos;s used</h2>
              <div className="grid grid-cols-2 gap-2">{applications.map((app)=>(<div key={app} className="flex items-center gap-2.5 px-3.5 py-3 rounded-md bg-[#f8f8f6] border border-[#ebebeb]"><div className="w-4 h-0.5 bg-[#e8c840] flex-shrink-0 rounded-sm"/><span className="text-[13px] text-gray-700">{app}</span></div>))}</div>
            </div>
            <div className="bg-white px-8 py-6 border-b border-gray-100">
              <p className="text-[10px] tracking-[0.12em] text-[#e8c840] font-bold uppercase mb-2">Features</p>
              <h2 className="text-[16px] font-semibold text-gray-900 mb-4">What sets it apart</h2>
              <div className="flex flex-col gap-1.5">{features.map((feat,i)=>(<div key={i} className="flex items-start gap-3 px-3.5 py-3 rounded-md bg-[#f8f8f6] border border-[#ebebeb]"><div className="min-w-[22px] h-[22px] bg-[#1a2332] text-[#e8c840] rounded flex items-center justify-center text-[11px] font-bold flex-shrink-0">{String(i+1).padStart(2,'0')}</div><span className="text-[13px] text-gray-700 leading-relaxed pt-0.5">{feat}</span></div>))}</div>
            </div>
            <div className="bg-white px-8 py-6 border-b border-gray-100">
              <p className="text-[10px] tracking-[0.12em] text-[#e8c840] font-bold uppercase mb-2">Specifications</p>
              <h2 className="text-[16px] font-semibold text-gray-900 mb-4">Technical details</h2>
              <div className="border border-gray-200 rounded-lg overflow-hidden"><table className="w-full text-[13px]"><thead><tr className="bg-[#1a2332]"><th className="text-left px-4 py-2.5 text-[#8fa3bb] font-medium text-[11px] tracking-wider uppercase">Item</th><th className="text-left px-4 py-2.5 text-[#8fa3bb] font-medium text-[11px] tracking-wider uppercase">Detail</th></tr></thead><tbody>{specs.map((row)=>(<tr key={row.label} className="border-t border-gray-100"><td className="px-4 py-3 text-gray-500 w-[38%]">{row.label}</td><td className="px-4 py-3 text-gray-900 font-medium">{row.value}</td></tr>))}</tbody></table></div>
            </div>
            <div className="bg-white px-8 py-6">
              <p className="text-[10px] tracking-[0.12em] text-[#e8c840] font-bold uppercase mb-2">FAQ</p>
              <h2 className="text-[16px] font-semibold text-gray-900 mb-4">Frequently asked</h2>
              <div className="flex flex-col gap-2.5">{faqs.map((faq)=>(<div key={faq.q} className="border border-gray-200 border-l-[3px] border-l-[#e8c840] rounded-r-lg px-4 py-3.5"><p className="text-[13px] font-semibold text-gray-900 mb-1.5">{faq.q}</p><p className="text-[13px] text-gray-500 leading-relaxed">{faq.a}</p></div>))}</div>
            </div>
          </div>
          <aside className="bg-white">
            <div className="p-4 border-b border-gray-100"><p className="text-[10px] tracking-widest text-[#e8c840] font-bold uppercase mb-3">Get a Quote</p><a href="/en#contact" className="block w-full bg-[#1a2332] text-white text-center py-3 rounded-lg text-[13px] font-medium mb-2 hover:bg-[#243040] transition-colors">Contact Us</a><a href="/files/sekyung_specifications.pdf" className="block w-full border border-gray-200 text-gray-700 text-center py-2.5 rounded-lg text-[13px] hover:bg-gray-50 transition-colors">Download Spec Sheet</a><div className="mt-4 flex flex-col gap-2">{[{l:'TEL',v:'+82-051-262-5631'},{l:'Email',v:'info@sekyungtex.co.kr'},{l:'Chat',v:'WhatsApp available'}].map((r)=>(<div key={r.l} className="flex gap-2"><span className="text-[11px] text-gray-300 min-w-[36px] pt-px">{r.l}</span><span className="text-[12px] text-gray-600">{r.v}</span></div>))}</div></div>
            <div className="p-4 border-b border-gray-100"><p className="text-[10px] tracking-widest text-[#e8c840] font-bold uppercase mb-3">Other Products</p><div className="flex flex-col gap-1.5">{otherProducts.map((p)=>(<a key={p.name} href={p.href} className={`flex items-center justify-between px-3 py-2.5 rounded-md border text-[12px] transition-colors ${p.active?'bg-[#1a2332] border-[#1a2332] text-[#e8c840] font-medium':'bg-[#f8f8f6] border-[#ebebeb] text-gray-600 hover:bg-gray-100'}`}><span>{p.name}</span><span className={p.active?'text-[#e8c840]':'text-gray-300'}>›</span></a>))}</div></div>
            <div className="p-4"><p className="text-[10px] tracking-widests text-[#e8c840] font-bold uppercase mb-3">Why SekyungNET</p><div className="bg-[#1a2332] rounded-lg p-4">{whyUs.map((item)=>(<div key={item.title} className="flex gap-2.5 mb-3 last:mb-0"><div className="w-7 h-7 bg-[#e8c840]/15 rounded flex items-center justify-center flex-shrink-0"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#e8c840" strokeWidth="2"><polyline points="2,7 5,10 12,3"/></svg></div><div><p className="text-[12px] font-medium text-white">{item.title}</p><p className="text-[11px] text-[#7a93ab] leading-snug">{item.sub}</p></div></div>))}</div></div>
          </aside>
        </div>
      </section>
      <section id="contact" className="bg-[#1a2332] w-full px-6 py-10"><div className="max-w-7xl mx-auto flex justify-between items-center"><div><p className="text-[10px] tracking-widest text-[#e8c840] font-medium mb-1.5">READY TO ORDER?</p><h3 className="text-white text-[18px] font-semibold mb-1">Get a custom quote today</h3><p className="text-[#8fa3bb] text-[13px]">Tell us your slope dimensions and we&apos;ll respond within 24 hours.</p></div><a href="/en#contact" className="bg-[#e8c840] text-[#111] px-7 py-3 rounded-md text-[13px] font-bold whitespace-nowrap hover:bg-yellow-300 transition-colors">Contact Us →</a></div></section>
    </main>
  )
}
