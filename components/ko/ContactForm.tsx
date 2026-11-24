"use client";

import { useRef, useState, type FormEvent } from "react";

const PRODUCTS = ["골프망", "야구망", "안전망 · 축구망", "스키장 안전망", "어망 · 양식망", "기타"];
const MAX_FILES = 5;
const MAX_TOTAL = 4 * 1024 * 1024;

const input =
  "w-full border-0 border-b border-[#BDBDBD] bg-transparent py-3 text-[16px] text-[#111] outline-none focus:border-[#111]";
const label = "flex flex-col gap-1 text-[14px] text-[#777]";

function ProductChips({ multiple, selected }: { multiple: boolean; selected?: string }) {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="mb-3 text-[14px] text-[#777]">{multiple ? "관심 제품 (여러 개 선택 가능)" : "제품"}</legend>
      <div className="flex flex-wrap gap-2">
        {PRODUCTS.map((p) => (
          <label key={p} className="cursor-pointer">
            <input type={multiple ? "checkbox" : "radio"} name="product" value={p} defaultChecked={p === selected} className="peer sr-only" />
            <span className="inline-flex min-h-[44px] items-center border border-[#BDBDBD] px-4 text-[14px] text-[#555] peer-checked:border-[#111] peer-checked:bg-[#111] peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2">
              {p}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function ContactForm({
  initialTab = "quote",
  initialProduct,
  initialMessage,
}: {
  initialTab?: "quote" | "catalog";
  initialProduct?: string;
  initialMessage?: string;
}) {
  const [tab, setTab] = useState<"quote" | "catalog">(initialTab);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const onFiles = (list: FileList | null) => {
    const next = [...files, ...Array.from(list || [])].slice(0, MAX_FILES);
    const total = next.reduce((s, f) => s + f.size, 0);
    if (total > MAX_TOTAL) {
      setStatus({ ok: false, msg: "첨부 파일은 합쳐서 4MB 이하로 올려주세요. 큰 도면은 이메일로 보내주세요." });
      return;
    }
    setStatus(null);
    setFiles(next);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    const fd = new FormData(e.currentTarget);
    fd.set("kind", tab);
    fd.delete("files");
    files.forEach((f) => fd.append("files", f));
    try {
      const res = await fetch("/api/inquiry", { method: "POST", body: fd });
      const data = await res.json();
      if (data.ok) {
        setStatus({
          ok: true,
          msg: tab === "catalog" ? "카탈로그 요청이 접수되었습니다. 이메일로 보내드리겠습니다." : "문의가 접수되었습니다. 빠르게 회신드리겠습니다.",
        });
        formRef.current?.reset();
        setFiles([]);
      } else {
        setStatus({ ok: false, msg: data.error || "전송에 실패했습니다." });
      }
    } catch {
      setStatus({ ok: false, msg: "전송에 실패했습니다. 전화나 이메일로 연락 부탁드립니다." });
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-8">
      <div role="tablist" aria-label="문의 종류" className="flex gap-8 border-b border-[#E0E0E0]">
        {(
          [
            ["quote", "견적 문의"],
            ["catalog", "카탈로그 요청"],
          ] as const
        ).map(([k, t]) => (
          <button
            key={k}
            type="button"
            role="tab"
            aria-selected={tab === k}
            onClick={() => {
              setTab(k);
              setStatus(null);
            }}
            className={`-mb-px min-h-[44px] border-b-2 pb-3 text-[16px] ${
              tab === k ? "border-[#FFC107] font-bold text-[#111]" : "border-transparent text-[#777]"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <form key={tab} ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* 스팸 방지 (사람에게는 안 보임) */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

        {tab === "quote" ? (
          <>
            <label className={label}>
              회사명 / 성함 *
              <input name="company" required className={input} />
            </label>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <label className={label}>
                연락처 *
                <input name="phone" type="tel" required className={input} placeholder="010-0000-0000" />
              </label>
              <label className={label}>
                이메일 *
                <input name="email" type="email" required className={input} />
              </label>
            </div>
            <ProductChips multiple={false} selected={initialProduct} />
            <label className={label}>
              문의 내용
              <textarea name="message" rows={5} defaultValue={initialMessage} className={`${input} resize-none`} placeholder="대략 규격, 수량, 지역을 적어주세요." />
            </label>

            <div className="flex flex-col gap-3">
              <span className="text-[14px] text-[#777]">도면 · 현장 사진 첨부 (최대 5개, 합계 4MB)</span>
              <label className="flex min-h-[88px] cursor-pointer flex-col items-center justify-center gap-1 border border-dashed border-[#BDBDBD] px-4 text-center text-[14px] text-[#555] hover:border-[#111]">
                <span className="font-bold text-[#111]">파일 선택</span>
                <span>도면(PDF, DWG) 또는 사진(JPG, PNG)</span>
                <input
                  type="file"
                  multiple
                  accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png,.heic,.webp"
                  className="sr-only"
                  onChange={(e) => {
                    onFiles(e.target.files);
                    e.target.value = "";
                  }}
                />
              </label>
              {files.length > 0 && (
                <ul className="flex flex-col gap-1">
                  {files.map((f, i) => (
                    <li key={f.name + i} className="flex items-center justify-between gap-4 border-b border-[#EEE] py-2 text-[14px]">
                      <span className="truncate">{f.name}</span>
                      <button
                        type="button"
                        className="min-h-[32px] px-2 text-[#777] hover:text-[#111]"
                        aria-label={`${f.name} 삭제`}
                        onClick={() => setFiles(files.filter((_, j) => j !== i))}
                      >
                        삭제
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </>
        ) : (
          <>
            <p className="m-0 text-[15px] leading-[1.8] text-[#555]">회사 정보를 남겨주시면 제품 카탈로그(PDF)를 이메일로 보내드립니다.</p>
            <label className={label}>
              회사명 *
              <input name="company" required className={input} />
            </label>
            <label className={label}>
              담당자
              <input name="name" className={input} />
            </label>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <label className={label}>
                연락처 *
                <input name="phone" type="tel" required className={input} placeholder="010-0000-0000" />
              </label>
              <label className={label}>
                이메일 *
                <input name="email" type="email" required className={input} />
              </label>
            </div>
            <ProductChips multiple />
          </>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-2 inline-flex min-h-[52px] w-full items-center justify-center sm:w-auto sm:self-start bg-[#111] px-8 text-[16px] font-bold text-white disabled:opacity-60"
        >
          {loading ? "전송 중..." : tab === "catalog" ? "카탈로그 요청하기" : "문의 보내기"}
        </button>
        <p className="m-0 text-[12px] text-[#999]">
          문의 내용은 답변을 위해서만 사용되며, <a href="/ko/privacy" target="_blank" className="underline">개인정보처리방침</a>에 따라 처리됩니다.
        </p>
        {status && (
          <p role="status" className={`text-[14px] ${status.ok ? "text-[#111]" : "text-[#B91C1C]"}`}>
            {status.msg}
          </p>
        )}
      </form>
    </div>
  );
}
