"use client"
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Products } from '@/app/types/product.model'
import Image from 'next/image'
import StarRating from '../ui/StarRating'
import { Heart, ShoppingCart, ZoomIn } from 'lucide-react'
import Zoom from 'next-auth/providers/zoom'
import Link from 'next/link'

export default function ProductCard({product}:{product:Products[]} ) {
  return (
    <div>
  <Card className="relative group overflow-hidden">
    <div className='absolute z-1 flex flex-col gap-3 top-[150px] right-[-100] group-hover:right-0 transition-all duration-500'> 
        <button className='px-2 py-2 bg-slate-200 text-black hover:text-blue-700 cursor-pointer'>
            <ShoppingCart/>
            </button>
        <button className='px-2 py-2 bg-slate-200 text-black hover:text-blue-700 cursor-pointer'>
            <Heart/>
            </button>
        <button className='px-2 py-2 bg-slate-200 text-black hover:text-blue-700 cursor-pointer'>
             <Link href={"/products/${product._id}"} >
                <ZoomIn/>
             </Link>
            </button>
    </div>
  <CardHeader>
    <CardTitle>{product.title.split(" ").slice(0,2).join(" ")}</CardTitle>
    <CardDescription>{product.description.split(" ").slice(0,4).join(" ")}</CardDescription>
    
  </CardHeader>
  <CardContent>
    <div className='relative w-full h-[300px]'>
        <Image src={product.imageCover} alt={product.title} fill sizes='(max-width-768px) 100vw ,(max-width:1200px) 50vw ,25vw'/>
    </div>
  </CardContent>
  <CardFooter className="flex-col items-start">
  <h2 className='text-lg font-bold' >Price <span>{product.price}</span>EGP</h2>
  <StarRating initialRating={Math.floor(product.ratingsAverage)} dimension={5}/> 
  </CardFooter>
</Card>
    </div>
  )
}
