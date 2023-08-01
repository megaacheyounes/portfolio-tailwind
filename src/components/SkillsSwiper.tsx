/* eslint-disable @next/next/no-img-element */
// Import Swiper React components
// Import Swiper styles
import 'swiper/css';

import ContSwiper from '@/components/ContSwiper';
import { SKILLS_ICONS } from '@/components/SkillsIcons';
type Props = any;

export default function SkillsSwiper(props: Props) {
  return (
    <>
      <ContSwiper
        className='sm:hidden'
        reversed
        duration={1000}
        items={SKILLS_ICONS('36')}
        itemWidth={140}
      ></ContSwiper>
      <ContSwiper
        className='hidden sm:block'
        reversed
        duration={1000}
        items={SKILLS_ICONS('50')}
        itemWidth={120}
      ></ContSwiper>
    </>
  );
}
