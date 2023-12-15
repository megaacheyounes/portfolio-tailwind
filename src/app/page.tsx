'use client';
import { Suspense, useEffect } from 'react';

import RevealWrapper from '@/components/animation/RevealAnimationWrapper';
import BrandsSwiper from '@/components/BrandsSwiper';
import SkillsSwiper from '@/components/TechnologiesSwiper';
import About from '@/containers/About';
import ExperienceCard from '@/containers/ExperienceCard';
import Hero from '@/containers/Hero';
import Projects from '@/containers/Projects';
import Section from '@/containers/Section';

import Loading from '@/app/loading';
import {
  ENABLE_SESSION_TRACKING,
  HOTJAR_SITE_ID,
  HOTJAR_VERSION,
} from '@/utils/env';
import Hotjar from '@hotjar/browser';

export default function Page() {
  useEffect(() => {
    if (ENABLE_SESSION_TRACKING) Hotjar.init(HOTJAR_SITE_ID, HOTJAR_VERSION);
  });

  return (
    <main>
      <Hero />

      <About />

      <Suspense fallback={<Loading></Loading>}>
        <Section
          className='mt-10'
          contentClassName='animate-in fade-in px-0 mx-0 md:px-0 mx-0 md:mx-0'
          elevated={false}
        >
          <div className=' relative mt-5 block w-full py-1  md:py-2 '>
            <h2 className='mb-10 text-center text-sm   font-medium text-white   md:text-lg '>
              Companies I'm proud to have collaborated with
            </h2>
            <BrandsSwiper />
          </div>
        </Section>
      </Suspense>

      <RevealWrapper delay={250}>
        <Projects />
      </RevealWrapper>

      <Suspense fallback={<></>}>
        <Section
          className=' mt-5'
          contentClassName=' px-0 mx-0 md:px-0 mx-0 md:mx-0'
          elevated={false}
        >
          <div className=' relative mt-5 block w-full py-1  md:py-2 '>
            <h2 className='mb-10 text-center text-sm   font-medium text-white   md:text-lg '>
              Technologies I have used
            </h2>
            <SkillsSwiper />
          </div>
        </Section>
      </Suspense>

      <ExperienceCard />
    </main>
  );
}
