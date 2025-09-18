"use client";
import React from "react";
import CatCard from "../../components/cat.comps/catCard";
import { Brand } from "@/app/types/productDetails.model";
import BrandCard from "./brandCard";

type Props = {
  brands: Brand[];
  onBrandClick: (brandId: string) => void;
};

export default function BrandGridSystem({ brands, onBrandClick }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {brands.map((brand) => (
        <BrandCard key={brand._id} brand={brand} onClick={onBrandClick} />
      ))}
    </div>
  );
}
