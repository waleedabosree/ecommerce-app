import CatSlider from "@/components/slider-comps/CatSlider";
import MainSlider from "@/components/slider-comps/MainSlider";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/route";

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
