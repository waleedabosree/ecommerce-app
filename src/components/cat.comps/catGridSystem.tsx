import React from 'react'
import { Catagory } from '@/app/types/catagory.model'
import CatCard from './catCard'

export default function CatGridSystem({ catagories }: { catagories: Catagory[] }) {
  
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl text-start tracking-tighter font-extrabold my-7">catagories?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {catagories.map((catagory) => (
          <CatCard key={catagory._id} catagory={catagory} />
        ))}
      </div>
    </div>







  )
}
