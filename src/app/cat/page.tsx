
import React from 'react'
import { getCatagories } from '../actions/catagories.action'
import CatGridSystem from '@/components/cat.comps/catGridSystem'
import SubCatGridSystem from '@/components/cat.comps/subCatGridSystem'

export default async function CatPage() {
  const response = await getCatagories()
  const catagories = response?.data || []
  
  return (
    <div>
      <CatGridSystem catagories={catagories} />

      <div className='row gap-5'>
      <SubCatGridSystem catagories={catagories} />
      </div>


    </div>
  )
}

