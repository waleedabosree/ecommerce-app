
"use client";
import React, { useState } from "react";
import { getBrandDetail } from "@/app/actions/brand.action";
import BrandGridSystem from "./brandGridSystem";
import BrandDetail from "./brandDetail";
import { Brand } from "@/app/types/brand.model";

type Props = {
  initialBrands: Brand[];
};

export default function BrandGridClient({ initialBrands }: Props) {
  const [brand, setBrand] = useState<Brand>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBrandClick = async (brandId: string) => {
    const data = await getBrandDetail(brandId) ;
      if (!data) {
    // Optionally show a message or toast
      console.error("Brand data not found");
      return; // do not open modal
    }
    setBrand(data);
    setIsModalOpen(true); // open modal
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <BrandGridSystem brands={initialBrands} onBrandClick={handleBrandClick} />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-4/5 max-w-3xl relative">
            <button
              className="absolute top-2 right-2 text-xl font-bold"
              onClick={closeModal}
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4">Brand Details</h2>
            {brand !=null ? (
              <BrandDetail brand={brand} />
            ) : (
              <p>No Data found.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
