"use client"
import { addProductToCart } from '@/app/actions/cart.action'
import { useCart } from '@/app/context/CartContext'
import { ProductDetails } from '@/app/types/productDetails.model'
import React from 'react'
import { StarRating } from 'react-flexible-star-rating'
import toast from 'react-hot-toast'

export default function ProductDetailsComp({productDetails}:{productDetails:ProductDetails }) {
      const {getCartDetails} = useCart()
  async function handleAddToCart (ProductId:string) {
    debugger;        
    const response = await addProductToCart(ProductId);
     toast.success(response?.message)
     await getCartDetails()
  }

  return (
    <div className='flex justify-between items-center'>
       <div className='w-full md:w-1/2'>
        <img src={productDetails.imageCover} alt={productDetails.title} className='w-full h-auto object-cover'/>
       </div>
       <div className='w-full md:w-1/2'>  
           <h2 className='text-3xl font-bold tracking-tighter'>{productDetails.title}</h2>
           <p className='text-slate-500 text-2xl tracking-tighter my-7'>{productDetails.description}</p> 
           <div className='flex justify-between items-center'>
            <div className='catPrice'>

                <p className='text-lg my-4' >
                    {productDetails.category.name} EGP
                </p>
                <p className='text-lg my-4'>
                    {productDetails.price} EGP
                </p>

            </div>
            <div className='flex items-center gap-2'>
                <StarRating initialRating={Math.floor(productDetails.ratingsAverage)} dimension={5}/>
                <span>
                    {productDetails.ratingsAverage}
                </span>
            </div>
            </div> 
            <button onClick={()=>handleAddToCart(productDetails._id)} className='px-5 py-3 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-all duration-300 cursor-pointer' >
                 + Add To Cart
                </button>    
       </div>
        
    </div>
  )
}
