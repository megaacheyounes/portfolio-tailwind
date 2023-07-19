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
type Props = any;

export default function ProjectSwiper(props: Props) {
  const skillSize = 30;
  return (
    <div>
      <div className=' flex w-full flex-row  place-items-end justify-end'>
        <a className='inline-flex w-auto cursor-pointer   hover:scale-110 '>
          <LiaLongArrowAltLeftSolid size={30} />
        </a>
        <a className='inline-flex w-auto cursor-pointer   hover:scale-110'>
          <LiaLongArrowAltRightSolid size={30} />
        </a>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        allowTouchMove={true}
        loop={true}
        autoPlay={true}
        autoplay={true}
      >
        <SwiperSlide>
          <ProjectCard title='demo 1' />
        </SwiperSlide>

        <SwiperSlide>
          <ProjectCard title='demo 2' />
        </SwiperSlide>

        <SwiperSlide>
          <ProjectCard title='demo3' />
        </SwiperSlide>

        <SwiperSlide>
          <ProjectCard title='demo4' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
