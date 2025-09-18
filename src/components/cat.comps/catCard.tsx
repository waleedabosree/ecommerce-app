"use client";
import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Catagory } from "@/app/types/catagory.model";

type Props = {
  catagory: Catagory;
  onClick: (catId: string) => void;
};

export default function CatCard({ catagory, onClick }: Props) {
  return (
    <Card className="cursor-pointer" onClick={() => onClick(catagory._id)}>
      <CardContent className="relative w-full h-[300px]">
        <Image src={catagory.image} alt={catagory.name} fill sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw" />
      </CardContent>
      <CardFooter>
        <CardTitle className="text-center font-bold text-green-500">{catagory.name}</CardTitle>
      </CardFooter>
    </Card>
  );
}

