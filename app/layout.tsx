import "./globals.css";
import type { ReactNode } from "react";
import { Analytics } from '@vercel/analytics/react';
import GoogleAnalytics from './GoogleAnalytics';

export const metadata = {
  title: "SekyungNET - Industrial Sports Netting Manufacturer",
  description:
    "SekyungNET manufactures golf barrier nets, baseball netting, industrial safety and sports netting solutions in Korea.",
  verification: {
    naver: "a724d3c7a5089923521507a7f2a7dac0e8171d84",
  },
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



export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        {children}
        <Analytics /> {/* Vercel */}
      </body>
    </html>
  );
}