import "../globals.css";
import TopNav from "@/components/TopNav";
import EnFooter from "@/components/EnFooter";
import { ReactNode } from "react";
 

export const metadata = {
  verification: {
    naver: "a724d3c7a5089923521507a7f2a7dac0e8171d84",
  },
};




export default function EnLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-ko bg-white text-[#20262A]">
        <TopNav />
        <main>{children}</main>
        <EnFooter />
      </body>
    </html>
  );
}