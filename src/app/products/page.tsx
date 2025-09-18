
import React from 'react'
import { getProducts } from '../actions/product.action'
import ProductsGridSystem from '@/components/products.comps/ProductsGridSystem'
import { } from '../context/CartContext'

export default async function ProductPage() {
  const response = await getProducts()
  const products = response?.data || []
 
  return (
    <div>
      <ProductsGridSystem products={products} />
    </div>
  )
}

