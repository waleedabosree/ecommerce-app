import React from 'react'
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Brand } from '@/app/types/brand.model';

export default function BrandDetail({ brand }: { brand: Brand }) {
  return (
    <div className="container mx-auto">
      {/* {
       <h2 className="text-4xl text-start tracking-tighter font-extrabold my-7">catagories?</h2> }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {catagories.map((catagory) => (
          <SubCatCard key={catagory._id} catagory={catagory} />
        ))}
      </div> */}

      <Card className="cursor-pointer" >
      <CardContent className="relative w-full h-[300px]">
        <Image src={brand.image} alt={brand.name} fill sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw" />
      </CardContent>
      <CardFooter>
        <CardTitle className="text-center font-bold text-green-500">{brand.name}</CardTitle>
      </CardFooter>
    </Card>
    </div>
  )
}
