"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Catagory } from "@/app/types/catagory.model";

export default function CatCard({ catagory }: { catagory: Catagory }) {


  type CatCardProps = {
  catagory: Catagory;
  onClick: (catagoryId: string) => void; // callback
};

  return (
    <div>
      <Card className="relative group overflow-hidden">
        <CardContent>
          <div className="relative w-full h-[300px]">
            <Image
              src={catagory.image}
              alt={catagory.slug}
              fill
              sizes="(max-width-768px) 100vw ,(max-width:1200px) 50vw ,25vw"
            />
          </div>
        </CardContent>
        <CardFooter className="flex-col items-start">
          <CardTitle className="text-center font-bold text-green-500">
            {catagory.name}
          </CardTitle>
        </CardFooter>
      </Card>
    </div>
  );
}
