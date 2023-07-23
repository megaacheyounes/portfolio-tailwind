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
  width: number
  reversed?: boolean
  duration?: number
} & React.PropsWithChildren


export default function ContSwiper(props: Props) {

  const items = props.items
  const count = items.length;
  const offest = 10;
  const displayItems = [...items.slice(count - offest, count), ...items, ...items.slice(0, offest)]
  const FuckSwiper = Swiper as any;
  const slidesNum = 1000 / props.width
  return (
    <div className='my-5 cont-swiper'>
      <FuckSwiper
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: props.reversed || false
        }}
        speed={props.duration || 1000}
        modules={[Navigation, Pagination, Autoplay]}
        allowTouchMove={true}
        loop={true}
        slidesPerView={slidesNum}
        spaceBetween={20}
      >
        {displayItems.map((el, index) =>
          <SwiperSlide key={'ii_tt_' + index} >
            <li key={'ii_tt_' + index} className={`w-[${props.width}]  `}>
              {el}
            </li>
          </SwiperSlide >)
        }
      </FuckSwiper >

    </div>

  )

}
