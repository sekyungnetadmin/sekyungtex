import "./globals.css";
import type { ReactNode } from "react";

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
   other: {
    "naver-site-verification": "a724d3c7a5089923521507a7f2a7dac0e8171d84",
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