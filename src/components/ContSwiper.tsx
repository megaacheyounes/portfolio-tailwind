'use client';
/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
// Import Swiper React components
// Import Swiper styles
import 'swiper/css';

import { cn } from '@/lib/utils';
type Props = {
  className?: string;
  reversed?: boolean;
  children: React.ReactNode[];
} & React.PropsWithChildren;

export default function ContSwiper(props: Props) {
  const { reversed, className } = props;
  // const count = items.length;
  const offest = 10;
  // const displayItems = [
  //   ...items.slice(count - offest, count),
  //   ...items,
  //   ...items.slice(0, offest),
  // ];

  return (
    <div className={cn(' cont-swiper relative overflow-x-clip', className)}>
      <span
        className={
          'via-bg-light absolute left-0  top-0  z-50 h-full  w-10 bg-gradient-to-r  from-lime-500 to-transparent  py-1'
        }
      />

      <div className='animate-swiper  flex  flex-row    '>
        {/* {displayItems.map((el, index) => (
          <div key={'ii_tt_' + index} className={` w-20 `}>
            {el}
          </div>
        ))} */}
        {props.children}
      </div>

      {/* <FuckSwiper
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: reversed || false,
        }}
        speed={props.duration || 20000}
        modules={[Navigation, Autoplay]}
        allowTouchMove={true}
        loop={true}
        slidesPerView={slidesNum}
        spaceBetween={20}
      >
        {displayItems.map((el, index) => (
          <SwiperSlide key={'ii_tt_' + index}>
            <li
              key={'ii_tt_' + index}
              className={`mx-auto w-[${props.itemWidth} px]  `}
            >
              {el}
            </li>
          </SwiperSlide>
        ))}
      </FuckSwiper> */}
      <span
        className={
          'via-bg-light absolute right-0   top-0  z-50   h-full w-10 bg-gradient-to-l from-lime-500 to-transparent   '
        }
      />
    </div>
  );
}
