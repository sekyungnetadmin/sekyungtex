import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title:
    "Industrial Sports Netting & Golf Barrier Net Manufacturer | SekyungNET",
  description:
    "High-durability golf driving range barriers, baseball netting, fishery nets, and customized industrial net solutions.",
};


export default function Home() {
  // 브라우저 언어가 한국어면 /ko, 그 외는 /en
  const lang = (headers().get("accept-language") || "").toLowerCase();
  const hasKo = lang.split(",").some((l) => l.trim().startsWith("ko"));
  redirect(hasKo ? "/ko" : "/en");
}