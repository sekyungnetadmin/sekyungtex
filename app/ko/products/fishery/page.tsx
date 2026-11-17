import ProductPage, { Note } from "@/components/ko/ProductPage";
import { IMG } from "@/components/ko/site";

export const metadata = {
  title: "양식장 그물망 · 어업용 그물 제조 | PE 내염성 어망 | 세경넷",
  description:
    "내염성과 내구성이 뛰어난 양식장 그물망, 해양 어업용 그물, 해상 가두리 망 제작. 바닷물 부식 방지 PE 소재, 맞춤 생산 및 빠른 납기.",
  keywords: [
    "양식장 그물망",
    "어업용 그물",
    "가두리망",
    "해양 어망",
    "내염성 PE 망",
    "수산업 그물",
    "세경네트",
    "어망",
        "fish farm net",
    "aquaculture net",
    "marine cage net",
    "fishing net manufacturer",
    "PE fish net",
    "aqua cage",
    "marine farming net",

  ], 
 };

export default function Page() {
  return (
    <ProductPage
      en="FISHING NET"
      kr="어망 · 양식망"
      lead={<>요구사항에 따라<br />그물 원단을 제작합니다.</>}
      hero={IMG.fishFarm}
      heroAlt="해상 양식장"
      install={false}
      features={[
        { title: "HDPE · UHMWPE", desc: "그 외 소재도 주문 제작합니다." },
        { title: "규격 맞춤", desc: "메쉬 크기와 굵기를 조절합니다." },
        { title: "무결망 · 결망", desc: "용도에 맞게 제작합니다." },
      ]}
      specs={[
        { k: "메쉬", v: "15 ~ 200mm" },
        { k: "원사", v: <>HDPE · UHMWPE<Note>(그 외 소재 주문 제작)</Note></> },
        { k: "색상", v: "Green · Black · White" },
      ]}
      photos={[
        { src: IMG.fishNet, alt: "어망 원단" },
        { src: IMG.fishCage, alt: "양식장 가두리" },
        { src: IMG.shipping, alt: "출고 준비된 그물 원단" },
      ]}
    />
  );
}
