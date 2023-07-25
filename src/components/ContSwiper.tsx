/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
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
import { SKILLS_ICONS } from '@/components/SkillsIcons';
import { cn } from '@/lib/utils';
import { TbH1 } from 'react-icons/tb';
type Props = {
  items: any[]
  itemWidth: number
  reversed?: boolean
  duration?: number
} & React.PropsWithChildren


export default function ContSwiper(props: Props) {

  const { reversed, items } = props
  const count = items.length;
  const offest = 10;
  const displayItems = [...items.slice(count - offest, count), ...items, ...items.slice(0, offest)]
  const FuckSwiper = Swiper as any;
  const slidesNum = 1000 / props.itemWidth
  return (
    <div className=' overflow-x-clip cont-swiper relative '>
      <span className={cn("absolute py-1    z-50 left-0 h-full blur  w-1      bg-orange-600", reversed && " bg-cyan-600")} />

      <FuckSwiper
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: reversed || false
        }}
        speed={props.duration || 20000}
        modules={[Navigation, Pagination, Autoplay]}
        allowTouchMove={true}
        loop={true}
        slidesPerView={slidesNum}
        spaceBetween={20}

      >
        {displayItems.map((el, index) =>
          <SwiperSlide key={'ii_tt_' + index} >
            <li key={'ii_tt_' + index} className={` w-[${props.itemWidth}px]  `}>
              {el}
            </li>
          </SwiperSlide >)
        }

      </FuckSwiper >
      <span className={cn("absolute blur py-2  top-0 z-50 right-0 h-full  w-1    bg-cyan-600 ", reversed && "bg-orange-600 ")} />

    </div >
  )

}
