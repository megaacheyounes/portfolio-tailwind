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
import { SKILLS_ICONS } from '@/components/SkillsIcons';
import { cn } from '@/lib/utils';
import ContSwiper from '@/components/ContSwiper';
type Props = any;


export default function SkillsSwiper(props: Props) {
  return (
    <>
      <ContSwiper className='sm:hidden' reversed duration={1000} items={SKILLS_ICONS("36")} itemWidth={120} >
      </ContSwiper>
      <ContSwiper className='hidden sm:block' reversed duration={1000} items={SKILLS_ICONS("50")} itemWidth={120} >
      </ContSwiper>
    </>
  )

}
