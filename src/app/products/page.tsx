import React from 'react'
import { getProducts } from '../actions/products.action'
export default async function ProductPage() {
  const productsResult = await getProducts();
  return (
    <div>
        <ProductsGridSystem products={products}/>
    </div>
  );
}