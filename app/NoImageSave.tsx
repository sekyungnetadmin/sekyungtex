"use client";
import { useEffect } from "react";

// 사진 우클릭 저장·드래그 막기 (스크린샷까지는 못 막음)
export default function NoImageSave() {
  useEffect(() => {
    const block = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (t && t.closest("img, picture, video, [data-noimgsave]")) e.preventDefault();
    };
    document.addEventListener("contextmenu", block);
    document.addEventListener("dragstart", block);
    return () => {
      document.removeEventListener("contextmenu", block);
      document.removeEventListener("dragstart", block);
    };
  }, []);
  return null;
}
