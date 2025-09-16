import MainSlider from "@/components/slider-comps/MainSlider";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  // const session = await getServerSession(options); 
  // console.log("Session:", session);
  return (
   <div>
    <MainSlider></MainSlider>
   </div>
  );
}
