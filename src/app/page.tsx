import CatSlider from "@/components/slider-comps/CatSlider";
import MainSlider from "@/components/slider-comps/MainSlider";
import Image from "next/image";

export default function Home() {
  console.log("CatSlider:", CatSlider);
  console.log("MainSlider:", MainSlider);
  return (
   <div>
    <MainSlider/>
    <CatSlider/>
   </div>
  );
}
