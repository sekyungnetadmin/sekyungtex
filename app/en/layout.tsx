import TopNav from "@/components/TopNav";
import EnFooter from "@/components/EnFooter";
import { ReactNode } from "react";

export default function EnLayout({ children }: { children: ReactNode }) {
  return (
    <div className="font-ko bg-white text-[#20262A] min-h-screen flex flex-col">
      <TopNav />
      <main className="flex-1">{children}</main>
      <EnFooter />
    </div>
  );
}