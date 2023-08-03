'use client';
/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import { cn } from '@/lib/utils';
type Props = {
  className?: string;
  items: any[];
  itemWidth: number;
  reversed?: boolean;
  duration?: number;
} & React.PropsWithChildren;

export default function ContSwiper(props: Props) {
  const { reversed, items, className } = props;
  const count = items.length;
  const offest = 10;
  const displayItems = [
    ...items.slice(count - offest, count),
    ...items,
    ...items.slice(0, offest),
  ];
  const FuckSwiper = Swiper as any;
  const slidesNum = 1000 / props.itemWidth;
  return (
    <div className={cn(' cont-swiper relative overflow-x-clip ', className)}>
      <span
        className={cn(
          'absolute left-0    z-50 h-full w-1 bg-orange-600  py-1      blur',
          reversed && ' bg-cyan-600'
        )}
      />

      <FuckSwiper
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
      </FuckSwiper>
      <span
        className={cn(
          'absolute right-0 top-0 z-50 h-full w-1 bg-cyan-600  py-2  blur ',
          reversed && 'bg-orange-600 '
        )}
      />
    </div>
  );
}
