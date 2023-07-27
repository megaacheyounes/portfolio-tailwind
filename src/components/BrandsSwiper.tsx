/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import {
  LiaLongArrowAltLeftSolid,
  LiaLongArrowAltRightSolid,
} from 'react-icons/lia';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import ProjectCard from '@/components/ProjectCard';
import ContSwiper from '@/components/ContSwiper';
type Props = any;

const BRANDS = [
  "/brands/huawei.png",
  "/brands/algebratec.png",
  "/brands/tawasal.png",
  "/brands/carrefour.png",
  "/brands/dubai-police.png",
  "/brands/reel-cinemas.png",
  "/brands/dubai-sports.jpg",
  "/brands/emirates.png",
  "/brands/steppi.png",
  "/brands/visit-abudhabi.png"
]

export default function BrandsSwiper(props: Props) {
  const skillSize = 30;
  const SwiperFuck = Swiper as any;
  const count = BRANDS.length;
  const offest = 3;
  const displayBrands = [...BRANDS.slice(count - offest, count), ...BRANDS, ...BRANDS.slice(0, offest)]
  const items = BRANDS.map(brand => <img className="   h-10 w-full   md:h-10 object-center object-contain  " src={brand} />)

  return (
    <>
      <div className='relative '>

        <ContSwiper duration={2000} itemWidth={300} items={items}  >

        </ContSwiper>

      </div>
    </>
  )


}
