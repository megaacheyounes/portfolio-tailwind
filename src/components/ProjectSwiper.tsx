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
  const SwiperFuck = Swiper as any;
  return (
    <div>
      <SwiperFuck
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        allowTouchMove={true}
        loop={true}
      >
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <SwiperSlide key={num + ''}>
            <ProjectCard title={'demo  ' + num} />
          </SwiperSlide>
        ))}
      </SwiperFuck>
      <div className=' flex w-full flex-row place-items-end justify-center gap-5 text-gray-300'>
        <a className='inline-flex w-auto cursor-pointer   hover:scale-110 '>
          <LiaLongArrowAltLeftSolid size={30} />
        </a>
        <a className='inline-flex w-auto cursor-pointer   hover:scale-110'>
          <LiaLongArrowAltRightSolid size={30} />
        </a>
      </div>
    </div>
  );
}
