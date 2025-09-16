"use client"
import React from 'react'
  import { Catagories } from '@/app/types/catagory.modle'
export default function CatSliderComp({catagory}: {catagory:Catagories[]}) {
  console.log(catagory[0])
  return (
    <div>CatSliderComp</div>
  )
}
