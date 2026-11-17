// 견적 문의 · 카탈로그 요청 메일 발송
// Vercel 환경변수 필요:
//   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS  (메일 보내는 계정)
//   INQUIRY_TO  (받는 주소, 없으면 info@sekyungtex.co.kr)
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_FILES = 5;
const MAX_TOTAL = 4 * 1024 * 1024; // Vercel 요청 한도(4.5MB) 안쪽으로

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>");
}

export async function POST(req: Request) {
  try {
    const fd = await req.formData();

    // 스팸 방지용 숨김 칸 — 사람은 비워둡니다
    if (String(fd.get("website") || "")) return NextResponse.json({ ok: true });

    const kind = fd.get("kind") === "catalog" ? "catalog" : "quote";
    const get = (k: string) => String(fd.get(k) || "").trim().slice(0, 2000);

    const company = get("company");
    const name = get("name");
    const phone = get("phone");
    const email = get("email");
    const product = fd.getAll("product").map(String).join(", ");
    const message = get("message");

    if (!company || !phone || !email) {
      return NextResponse.json({ ok: false, error: "필수 항목을 입력해주세요." }, { status: 400 });
    }

    const files = fd.getAll("files").filter((f): f is File => f instanceof File && f.size > 0);
    if (files.length > MAX_FILES) {
      return NextResponse.json({ ok: false, error: `첨부는 ${MAX_FILES}개까지 가능합니다.` }, { status: 400 });
    }
    const total = files.reduce((s, f) => s + f.size, 0);
    if (total > MAX_TOTAL) {
      return NextResponse.json({ ok: false, error: "첨부 파일은 합쳐서 4MB 이하로 올려주세요." }, { status: 400 });
    }
    const attachments = await Promise.all(
      files.map(async (f) => ({ filename: f.name, content: Buffer.from(await f.arrayBuffer()) }))
    );

    const rows: [string, string][] =
      kind === "catalog"
        ? [["회사명", company], ["담당자", name], ["연락처", phone], ["이메일", email], ["관심 제품", product]]
        : [["회사명 / 성함", company], ["연락처", phone], ["이메일", email], ["제품", product], ["문의 내용", message]];

    const html = `<table style="border-collapse:collapse;font-size:14px">${rows
      .map(([k, v]) => `<tr><td style="padding:6px 16px 6px 0;color:#777;vertical-align:top">${k}</td><td style="padding:6px 0">${esc(v || "-")}</td></tr>`)
      .join("")}</table>${attachments.length ? `<p style="color:#777;font-size:13px">첨부 ${attachments.length}개</p>` : ""}`;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: Number(process.env.SMTP_PORT || 465) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"세경네트 홈페이지" <${process.env.SMTP_USER}>`,
      to: process.env.INQUIRY_TO || "info@sekyungtex.co.kr",
      replyTo: email,
      subject: kind === "catalog" ? `[카탈로그 요청] ${company}` : `[견적 문의] ${company}${product ? ` · ${product}` : ""}`,
      html,
      attachments,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("inquiry error", e);
    return NextResponse.json({ ok: false, error: "전송에 실패했습니다. 전화나 이메일로 연락 부탁드립니다." }, { status: 500 });
  }
}
