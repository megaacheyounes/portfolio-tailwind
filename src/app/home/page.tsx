'use client';
import BrandsSwiper from '@/components/BrandsSwiper';
import SkillsSwiper from '@/components/SkillsSwiper';
import About from '@/container/About';
import Experience3 from '@/container/Experience3';
import Hero from '@/container/Hero';
import PageWrapper from '@/container/PageWrapper';
import Projects from '@/container/Projects';
import Section from '@/container/Section';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <PageWrapper>
        <Hero />
        <About />

        <Section
          className=' mt-10'
          contentClassName=' px-0 mx-0 md:px-0 mx-0 md:mx-0'
          elevated={false}
        >
          <div className=' relative mt-5 block w-full py-1  md:py-2 '>
            <h2 className='md:text-md mb-10 text-center   text-sm font-medium   text-white '>
              Technologies I have used{' '}
            </h2>
            <SkillsSwiper />
          </div>
        </Section>

        <Projects />

        <Section
          className='mt-10'
          contentClassName=' px-0 mx-0 md:px-0 mx-0 md:mx-0'
          elevated={false}
        >
          <div className=' relative mt-5 block w-full py-1  md:py-2 '>
            <h2 className='md:text-md mb-10 text-center   text-sm font-medium   text-white '>
              Campanies I'm proud to have collaborated with{' '}
            </h2>
            <BrandsSwiper />
          </div>
        </Section>

        <Experience3 />
      </PageWrapper>
    </>
  );
}
