
import React from 'react'
import { getProducts } from '../actions/product.action'
import ProductsGridSystem from '@/components/products.comps/ProductsGridSystem'

export default async function ProductPage() {
  const response = await getProducts()
  const products = response?.data || []
  debugger;
  return (
    <div>
      <ProductsGridSystem products={products} />
    </div>
  )
}

