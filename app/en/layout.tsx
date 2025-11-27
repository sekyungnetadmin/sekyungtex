import "../globals.css";
import TopNav from "@/components/TopNav";
import EnFooter from "@/components/EnFooter";
import { ReactNode } from "react";

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