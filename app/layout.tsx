import "./globals.css";
import type { ReactNode } from "react";
import EnFooter from "@/components/EnFooter";   // ★ 추가

export const metadata = {
  title: "SekyungNET - Industrial Sports Netting Manufacturer",
  description:
    "SekyungNET manufactures golf barrier nets, baseball netting, industrial safety and sports netting solutions in Korea.",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://sekyungtex.co.kr/",
    languages: {
      en: "https://sekyungtex.co.kr/en",
      ko: "https://sekyungtex.co.kr/ko",
      "x-default": "https://sekyungtex.co.kr/",
    },
  },
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body >
        {children}
       
      </body>
    </html>
  );
}