'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules'

export default function MainSlider() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative h-[600px] w-full">
            <Image
              src="/slider1.png"
              alt="slider-images"
              fill
              priority
              loading='eager'
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover"
            />
            <div className="absolute top-[200px] left-[70px] text-white">
              <h2 className="text-2xl font-bold my-7">Summer Collection</h2>
              <p className="text-lg font-medium my-7">Any details</p>
              <Button className="px-10 my-3 flex items-center gap-2">
                Shop Now <MoveRight />
              </Button>
            </div>
          </div>
        </SwiperSlide>


        
        <SwiperSlide>
          <div className="relative h-[600px] w-full">
            <Image
              src="/slider2.jpg"
              alt="slider-images"
              fill
              priority
              loading='eager'
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover"
            />
            <div className="absolute top-[200px] left-[70px] text-white">
              <h2 className="text-2xl font-bold my-7">Summer Collection</h2>
              <p className="text-lg font-medium my-7">Any details</p>
              <Button className="px-10 my-3 flex items-center gap-2">
                Shop Now <MoveRight />
              </Button>
            </div>
          </div>
        </SwiperSlide>


        
        <SwiperSlide>
          <div className="relative h-[600px] w-full">
            <Image
              src="/slider3.jpg"
              alt="slider-images"
              fill
              priority
              loading='eager'
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover"
            />
            <div className="absolute top-[200px] left-[70px] text-white">
              <h2 className="text-2xl font-bold my-7">Summer Collection</h2>
              <p className="text-lg font-medium my-7">Any details</p>
              <Button className="px-10 my-3 flex items-center gap-2">
                Shop Now <MoveRight />
              </Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
