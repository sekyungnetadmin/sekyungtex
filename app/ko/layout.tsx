import "../globals.css";
import KrTopNav from "./KrTopNav";
import KoFooter from "./KoFooter";

export const metadata = {
  title: "세경네트 - 한국어",
};

export default function KoLayout({ children }) {
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