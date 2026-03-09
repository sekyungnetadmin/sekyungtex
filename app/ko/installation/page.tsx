import Link from "next/link";

export const metadata = {
  title: "설치 서비스 | 세경네트",
  description:
    "세경네트 설치 서비스 안내. 제작부터 설치까지 현장 여건에 맞춘 시공과 깔끔한 마감 품질을 제공합니다.",
};

export default function InstallationPage() {
  return (
    <div className="font-ko text-[#20262A] bg-white">
      {/* HERO */}
      <section className="bg-[#0F1C2B] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-14">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Installation Service
          </h1>
          <p className="mt-3 text-[15px] text-gray-300 leading-relaxed max-w-2xl">
            제작을 이해하는 시공이 결과를 만듭니다. 세경네트는 망 제작부터 현장 설치까지
            직접 수행하며, 시설 환경에 맞춘 설치 방식과 균형 잡힌 장력 조정, 깔끔한 마감을 제공합니다.
          </p>

          {/* Mini highlights */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
            {[
              { t: "현장 맞춤 시공", d: "환경·구조에 맞춰 설치 방식 제안" },
              { t: "정리된 마감", d: "코너·연결부 디테일까지 깔끔하게" },
              { t: "교체·보수 대응", d: "운영 중 시설도 일정 협의 가능" },
            ].map((x, i) => (
              <div
                key={i}
                className="rounded-lg border border-white/15 bg-white/5 px-4 py-3"
              >
                <p className="text-sm font-semibold">{x.t}</p>
                <p className="mt-1 text-[13px] text-gray-300">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 대상/적용 범위 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1F3B5D] mb-6">
            이런 현장에 적합합니다
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-[15px] text-gray-700 leading-relaxed">
            <div className="rounded-lg border border-gray-200 p-6 hover:shadow-md transition">
              <p className="font-semibold text-[#1F3B5D]">골프연습장 보호망 · 야구장 · 풋살장 등</p>
              <p className="mt-2 text-gray-600">
                실외 연습장 외곽/후면/측면 보호망 설치 및 교체
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 hover:shadow-md transition">
              <p className="font-semibold text-[#1F3B5D]">인도어 시설</p>
              <p className="mt-2 text-gray-600">
                타석 구간 보호망, 내부 낙구 방지망, 구간 분리망 등
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 hover:shadow-md transition">
              <p className="font-semibold text-[#1F3B5D]">노후망 교체/부분 보수</p>
              <p className="mt-2 text-gray-600">
                마모 구간 교체, 연결부 보강, 손상 구간 부분 수리
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 hover:shadow-md transition">
              <p className="font-semibold text-[#1F3B5D]">신규/리뉴얼 공사</p>
              <p className="mt-2 text-gray-600">
                신규 시설 설치 또는 리뉴얼 일정에 맞춘 시공 협의
              </p>
            </div>
          </div>
        </div>
      </section>

 




{/* COVERAGE */}
<section className="py-16 bg-[#F5F6FA]">
  <div className="max-w-6xl mx-auto px-4">

    <p className="text-sm tracking-[0.2em] text-[#1F3B5D]/70 font-semibold mb-3">
      COVERAGE
    </p>

    <h2 className="text-2xl font-bold text-[#1F3B5D] mb-6">
      Supply & Installation
    </h2>

    <p className="text-[15px] text-gray-600 mb-12">
      세경네트는 전국의 골프연습장 및 다양한 스포츠 시설에 보호망을 공급해왔으며,
  일부 지역에서는 현장 설치 서비스까지 함께 제공하고 있습니다.
    </p>


    

    {/* 리드타임 + 설치 */}
    <div className="grid md:grid-cols-2 gap-12 mb-14">

      <div>
        <p className="font-semibold text-[#1F3B5D] mb-2">
          납품 리드타임
        </p>
        <p className="text-gray-700 text-[15px] leading-relaxed">
          5,000㎡ 미만(사각) 물량은 보통 1–2일 내 납품이 가능합니다.
          (재고 및 제작 일정에 따라 변동될 수 있습니다.)
        </p>
      </div>

      <div>
        <p className="font-semibold text-[#1F3B5D] mb-2">
          전국 설치 대응
        </p>
        <p className="text-gray-700 text-[15px] leading-relaxed">
          전국 현장 설치가 가능하며, 일정 협의 후 출장 시공을 진행합니다.
          운영 중 시설도 일정 조율이 가능합니다.
        </p>
      </div>

    </div>


    {/* 숫자 카드 */}
    <div className="grid md:grid-cols-3 gap-6 text-center">

      <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition">
        <p className="text-4xl font-bold text-[#1F3B5D]">120+</p>
        <p className="text-gray-600 text-sm mt-2">Projects Completed</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition">
        <p className="text-4xl font-bold text-[#1F3B5D]">35+</p>
        <p className="text-gray-600 text-sm mt-2">Golf Driving Ranges</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition">
        <p className="text-4xl font-bold text-[#1F3B5D]">15+</p>
        <p className="text-gray-600 text-sm mt-2">Cities Delivered</p>
      </div>

    </div>

  </div>
</section>

{/* SERVICE SCOPE */}
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4">

    <p className="text-sm tracking-[0.2em] text-[#1F3B5D]/70 font-semibold mb-3">
      SERVICE SCOPE
    </p>

    <h2 className="text-2xl font-bold text-[#1F3B5D] mb-8">
      설치 서비스 포함 범위
    </h2>

    <div className="grid md:grid-cols-2 gap-8 text-[15px] text-gray-700 leading-relaxed">

      <div>
        <p className="font-semibold text-[#1F3B5D] mb-2">
          01. 현장 조건 확인
        </p>
        <p>
          구조물 상태, 기존 와이어 상태, 장력 조건 등을 확인하고
          현장 환경에 맞는 시공 방식을 결정합니다.
        </p>
      </div>

      <div>
        <p className="font-semibold text-[#1F3B5D] mb-2">
          02. 맞춤 제작 및 자재 준비
        </p>
        <p>
          규격에 맞춘 망 제작 및 와이어, 부자재를 사전 준비하여
          현장 작업 시간을 최소화합니다.
        </p>
      </div>

      <div>
        <p className="font-semibold text-[#1F3B5D] mb-2">
          03. 현장 설치 및 장력 조정
        </p>
        <p>
          안전 기준에 맞춰 망을 설치하고 균일한 장력 유지 및
          고정 상태를 점검합니다.
        </p>
      </div>

      <div>
        <p className="font-semibold text-[#1F3B5D] mb-2">
          04. 마감 및 최종 점검
        </p>
        <p>
          연결부, 마감 상태를 확인하고 현장 정리 후
          최종 검수를 진행합니다.
        </p>
      </div>

    </div>

  </div>
</section>
    
{/* QUICK QUOTE GUIDE */}
<section className="py-14 bg-[#F5F6FA]">
  <div className="max-w-6xl mx-auto px-4">
    <p className="text-sm tracking-[0.2em] text-[#1F3B5D]/70 font-semibold mb-3">
      QUICK QUOTE GUIDE
    </p>

    <h2 className="text-2xl font-bold text-[#1F3B5D] mb-6">
      빠른 견적을 위해 아래 정보를 보내주세요
    </h2>

    <div className="mt-6 grid md:grid-cols-2 gap-4 text-[15px] text-gray-700">
      {[
        { n: 1, t: "현장 사진", d: "전체 1장 + 설치 구간 근접 1장" },
        { n: 2, t: "대략 규격", d: "높이 · 폭 · 길이(가능한 범위)" },
        { n: 3, t: "현장 상태", d: "신규 / 교체 / 부분 보수" },
        { n: 4, t: "지역/일정", d: "지역 + 희망 작업 날짜" },
      ].map((item) => (
        <div key={item.n} className="flex gap-3">
          <span className="mt-[2px] inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#1F3B5D] text-white text-xs font-semibold">
            {item.n}
          </span>
          <div>
            <p className="font-semibold">{item.t}</p>
            <p className="text-gray-600">{item.d}</p>
          </div>
        </div>
      ))}
    </div>

    <p className="mt-6 text-[14px] text-gray-500">
      * 사진과 규격을 함께 보내주시면 보다 정확한 견적 안내가 가능합니다.
    </p>

 
  </div>
</section>

{/* CTA */}
<section className="bg-[#0F1C2B] text-white">
  <div className="max-w-6xl mx-auto px-4 py-10 md:py-12 text-center">

    <h2 className="text-lg md:text-xl font-semibold">
      사진/규격을 보내주시면 빠르게 안내드립니다
    </h2>

    <p className="mt-2 text-[14px] text-white/70 leading-relaxed">
      현장 조건에 맞춰 작업 범위 · 일정 · 필요한 옵션을 정리해 드립니다.
    </p>

    <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
      <Link href="/ko#contact">
        <button className="bg-white text-[#0E2A47] px-6 py-2.5 rounded-md font-medium hover:bg-gray-100 transition">
          견적 문의하기
        </button>
      </Link>

     
    </div>

    <p className="mt-4 text-[12px] text-white/60">
      051-262-5631 · info@sekyungtex.co.kr
    </p>

  </div>
</section>
  
    </div>
  );
}