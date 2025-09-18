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
import { Catagory } from "@/app/types/catagory.model";

export default function SubCatCard({ catagory }: { catagory: Catagory }) {
  return (
    <div>
      <Card className="relative group overflow-hidden">
        <CardContent className="text-center font-bold text-green-500">
           {catagory.name}
        </CardContent>
        <CardFooter className="flex-col items-start">
        </CardFooter>
      </Card>
    </div>
  );
}
