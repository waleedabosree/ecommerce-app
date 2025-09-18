import { Product } from '@/app/types/product.model'
import React from 'react'
import ProductCard from './ProductCard'


export default  function ProductsGridSystem({ products }: { products: Product[] }) {
  console.log(products, "Grid products")
  
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl text-start tracking-tighter font-extrabold my-7">Products?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}
