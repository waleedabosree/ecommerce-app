
import React from "react";
import { getBrands } from "../actions/brand.action";
import BrandGridClient from "@/components/brand-comps/brandGridClient";

export default async function BrandPage() {
  const response = await getBrands();
  const brands = response?.data || [];

  return (
    <div className="container mx-auto py-10">
      <BrandGridClient initialBrands={brands} />
    </div>
  );
}


