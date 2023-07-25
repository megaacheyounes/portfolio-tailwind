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
    <ContSwiper reversed duration={1000} items={SKILLS_ICONS} itemWidth={150} >
    </ContSwiper>
  )

}
