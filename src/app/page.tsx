// import CatSliderComp from "@/components/slider-comps/CatSlider";
import MainSlider from "@/components/slider-comps/MainSlider";
import CatSliderComp from "@/components/slider-comps/CatSliderComp";
import { getCatagories } from "./actions/catagories.action";
import { getProducts } from "./actions/product.action";
import ProductsGridSystem from "@/components/products.comps/ProductsGridSystem";

export default  async function Home() {
  const response = await getCatagories();
  const data = response?.data;
  const productsResult = await getProducts();
  const products = productsResult ? productsResult.data : [];
   
  return (
   <div>
    <MainSlider/>
    {/* <CatSlider/> */}
     <div className='my-5'>
      <CatSliderComp category={data}/>
       </div>
       
       <ProductsGridSystem products={products}/>
   </div>
  );
}
