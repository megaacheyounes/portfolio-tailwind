'use client';

import BrandsSwiper from '@/components/BrandsSwiper';
import About from '@/container/About';
import Experience from '@/container/Experience';
import Experience2 from '@/container/Experience2';
import Experience3 from '@/container/Experience3';
import Hero from '@/container/Hero';
import Projects from '@/container/Projects';
import Section from '@/container/Section';
import Testimonials from '@/container/Testimonials';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    // @ts-ignore
    import('preline')
  }, [])

  return (
    <  >
      <Hero />
      <div className='px-4 md:px-16' >

        <About />
        <Projects />
        {/* <Testimonials /> */}


        <Section contentClassName=' px-0 md:px-0 mx-0 md:mx-0' elevated={true} className="   mx-auto">

          <div className=' mt-5 block relative  w-full '>
            <h2 className="text-md text-center   text-white font-medium   mb-10 ">Campanies I'm proud to have collaborated with  </h2>
            <BrandsSwiper />
          </div>

        </Section>

        <div className=" bg-b-light h-20 w-full" >  </div>

        <Experience3 />
      </div>
    </>
  );
}


