import { getCatagories } from '@/app/actions/catagories.action'
import React from 'react'
import CatSliderComp from './CatSliderComp'

export default async function CatSlider() {
  debugger
    const response = await getCatagories()
    console.log(response?.data,"slider")
  return (
    <div><CatSliderComp catagory={response?.data}/> </div>
  )
}
