import { getProductsDetails } from '@/app/actions/product.action';
import ProductDetailsComp from '@/components/products.comps/ProductDetailsComp';
import React from 'react'

export default async function ProductDetails({params}:{params:{id:string}}) {
    const {id}= await params;
    console.log(id,"details")
    const {data:ProductDetails} = await getProductsDetails(id) || {};
    console.log(ProductDetails,"details")

  return (
    <div className='container mx-auto py-10'>
        <ProductDetailsComp productDetails={ProductDetails}/>
        </div>
  )
}



