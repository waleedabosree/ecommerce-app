import { getCatagories } from '@/app/actions/catagories.action'
import React from 'react'
import CatSliderComp from './CatSliderComp'

export default async function CatSlider() {
    const response = await getCatagories()
    console.log(response?.data,"slider")
  return (
    <div className='my-5'>
      
      <CatSliderComp catagory={response?.data}/>
       </div>
  )
}
