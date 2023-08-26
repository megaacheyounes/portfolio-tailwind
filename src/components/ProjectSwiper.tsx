/* eslint-disable @next/next/no-img-element */
import {
  LiaLongArrowAltLeftSolid,
  LiaLongArrowAltRightSolid,
} from 'react-icons/lia';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import ProjectCard from '@/components/ProjectCard';
import { PROJECTS_HIGHLIGHT } from '@/data/projects';
type Props = any;

export default function ProjectSwiper(props: Props) {
  const skillSize = 30;
  const SwiperFuck = Swiper as any;
  const swiperC = useSwiper();
  return (
    <div>
      <SwiperFuck
        modules={[Navigation, Pagination, Autoplay]}
        allowTouchMove={true}
        loop={true}
        breakpoints={{
          //item widht=360pxs
          320: {
            slidesPerView: 1,
          },
          650: {
            slidesPerView: 2,
          },
          990: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {PROJECTS_HIGHLIGHT.map((project) => (
          <SwiperSlide key={project.name}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </SwiperFuck>
      <div className=' flex w-full flex-row place-items-end justify-center gap-5 text-gray-300'>
        <a className='inline-flex w-auto cursor-pointer   hover:scale-110 '>
          <LiaLongArrowAltLeftSolid size={30} />
        </a>
        <a
          onClick={() => !swiperC && swiperC.slideNext()}
          className='inline-flex w-auto cursor-pointer   hover:scale-110'
        >
          <LiaLongArrowAltRightSolid size={30} />
        </a>
      </div>
    </div>
  );
}
