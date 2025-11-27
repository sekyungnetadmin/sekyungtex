import "./globals.css";
import type { ReactNode } from "react";
import EnFooter from "@/components/EnFooter";   // ★ 추가

export const metadata = {
  title: "Sekyung Net",
  description: "Industrial Netting Manufacturer",
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