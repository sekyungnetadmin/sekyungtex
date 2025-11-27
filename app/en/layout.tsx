import "../globals.css";
import TopNav from "@/components/TopNav";
import EnFooter from "@/components/EnFooter";

export default function EnLayout({ children }) {
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