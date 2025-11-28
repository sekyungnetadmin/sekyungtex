import "../globals.css";
import KrTopNav from "./KrTopNav";
import KoFooter from "./KoFooter";
import { ReactNode } from "react";

export const metadata = {
  title: "세경네트",
};
export default function KoLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="font-ko">
        <KrTopNav />
        <main>{children}</main>
        <KoFooter />
      </body>
    </html>
  );
}