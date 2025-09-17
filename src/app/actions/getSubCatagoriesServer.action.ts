// app/actions/catagories.server.ts
"use server";
import axios from "axios";
import { Catagory } from "@/app/types/catagory.model";

export async function getSubCatagoriesServer(catId: string): Promise<Catagory[]> {
  try {
    const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${catId}/subcategories`);
    return response.data.data; // ✅ only return the JSON array
  } catch (error) {
    console.error(error);
    return []; // fallback
  }
}
