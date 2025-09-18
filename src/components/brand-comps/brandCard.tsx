"use client";
import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Brand } from "@/app/types/productDetails.model";

type Props = {
  brand: Brand;
  onClick: (brandId: string) => void;
};

export default function BrandCard({ brand, onClick }: Props) {
  return (
    <Card className="cursor-pointer" onClick={() => onClick(brand._id)}>
      <CardContent className="relative w-full h-[300px]">
        <Image src={brand.image} alt={brand.name} fill sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw" />
      </CardContent>
      <CardFooter>
        <CardTitle className="text-center font-bold text-green-500">{brand.name}</CardTitle>
      </CardFooter>
    </Card>
  );
}

