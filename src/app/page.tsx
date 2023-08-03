'use client';
import BrandsSwiper from '@/components/BrandsSwiper';
import PageLoader from '@/components/pageLoader/PageLoader';
import SkillsSwiper from '@/components/SkillsSwiper';
import About from '@/container/About';
import Experience3 from '@/container/Experience3';
import Hero from '@/container/Hero';
import Projects from '@/container/Projects';
import Section from '@/container/Section';

import { Suspense, useEffect, useState } from 'react';

export default function Page() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  if (loading) return <PageLoader />;

  return (
    <main>
      <Hero />

      <About />

      <Suspense fallback={<></>}>
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

      <Projects />

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

      <Experience3 />
    </main>
  );
}
