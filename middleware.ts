import { NextResponse, type NextRequest } from "next/server";

// 중국(CN)에서 오는 접속 차단. Vercel이 넣어주는 접속 국가 정보를 사용.
const BLOCKED = new Set(["CN"]);

export function middleware(req: NextRequest) {
  const country = req.headers.get("x-vercel-ip-country") || "";
  if (BLOCKED.has(country.toUpperCase())) {
    const html =
      "<html><head><title>503 Service Temporarily Unavailable</title></head>" +
      '<body><center><h1>503 Service Temporarily Unavailable</h1></center><hr><center>nginx</center></body></html>';
    return new NextResponse(html, {
      status: 503,
      headers: { "content-type": "text/html; charset=utf-8", "retry-after": "3600", "cache-control": "no-store" },
    });
  }
  return NextResponse.next();
}

export const config = {
  // 이미지·정적 파일 포함 전체 차단. API도 포함.
  matcher: ["/((?!_next/static|favicon.ico).*)"],
};
