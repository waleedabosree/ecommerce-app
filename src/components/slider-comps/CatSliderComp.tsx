"use client"
  import React from 'react'
  import { Catagories } from '@/app/types/catagory.model'
  import { Swiper, SwiperSlide } from 'swiper/react'
  
  // Import Swiper styles
  import 'swiper/css'
  import 'swiper/css/effect-fade'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'
  
  import Image from 'next/image'
  import {Navigation,Pagination } from 'swiper/modules'
export default function CatSliderComp({category}: {category:Catagories[]}) {

  return (
    <div className='container mx-auto'>
      <h2 className='text-start text-3xl my-5'>Catagory slider</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={3}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[ Navigation, Pagination]}
        className="mySwiper"
      >
        {category.map((cat)=><>
           <SwiperSlide key={cat._id}>
          <div className="relative h-[250px] w-full">
            <Image
              src={cat.image}
              alt="slider-images"
              fill
              priority
              loading='eager'
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
           <p className='text-center text-2xl'>{cat.name}</p>
        </SwiperSlide>

        </>)}
     


      
      </Swiper>
      <div>
      
    </div></div>
  )
}
