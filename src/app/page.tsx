'use client';

import BrandsSwiper from '@/components/BrandsSwiper';
import About from '@/container/About';
import Experience from '@/container/Experience';
import Hero from '@/container/Hero';
import Projects from '@/container/Projects';
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

        <div className='py-5 md:py-20 bg-b-light'>
          <h2 className="text-lg text-center text-white font-medium  mt-8   ">Campanies I'm proud to have collaborated with  </h2>
          <div className=" mt-8  ">
            <BrandsSwiper />
          </div>
        </div>


        <div className="bg-b-light h-20 w-full" >  </div>
        <Experience />
      </div>
    </>
  );
}
