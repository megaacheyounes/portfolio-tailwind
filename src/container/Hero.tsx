/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import Section from '@/container/Section';
import { SiAndroid, SiCircle, SiCircleci, SiHarmonyos, SiJavascript, SiKotlin, SiNodedotjs, SiReact } from 'react-icons/si';

type Props = any;

export default function Hero(props: Props) {
  return (
    <section className='min-h-500 overflow-x-clip text-white    relative pt-5'>
      <div className='grid grid-cols-1 justify-items-center  mt-5  '>
        <div className='flex flex-col items-center text-center  '>
          <h1 className='title-font  text-2xl  font-medium'>Hello 👋 I'm</h1>
          <h1 className=' mt-4 text-3xl text-lime-500 '>{'< Younes'}</h1>
          <h1 className=' mt-4 text-3xl text-lime-500 '>{'Megaache />'}</h1>
          <h1 className='mt-4 text-xl max-w-md font-normal'>
            A passionate Android and Full Stack Web Developer
          </h1>
        </div>
        <div className='  max-w-lg '>


          <img
            className='rounded object-cover object-center'
            alt='hero'
            src='/me.png'
          />

          <div className=" absolute -translate-y-20 translate-x-10 rounded-full bg-b-dark shadow-lg inline-flex  p-4  text-dark" >
            <SiHarmonyos size={30} />
          </div>

          <div className=" absolute  -translate-y-80   translate-x-80  md:-translate-y-96  md:translate-x-96 rounded-full bg-b-dark shadow-2xl inline-flex  p-4 md:p-6 text-purple-600" >
            <SiKotlin className='w-10 h-10 md:w-18 md:h-18' />
          </div>


          <div className=" absolute -translate-y-80 translate-x-16 rounded-full bg-b-dark shadow-xl inline-flex p-4 md:p-6  text-green-600" >
            <SiAndroid className='w-10 h-10 md:w-18 md:h-18' />
          </div>

          <div className=" absolute -translate-y-48 translate-x-0 rounded-full bg-b-dark inline-flex  p-6  text-blue-600" >
            <SiReact size={40} />
          </div>

          <div className=" absolute  shadow-xl  -translate-y-44 translate-x-96 rounded-full bg-b-dark inline-flex  p-8  text-green-600" >
            <SiNodedotjs size={50} />
          </div>

          {/* <div className=" absolute  shadow-xl  -translate-y-52 -translate-x-96 rounded-full bg-b-dark inline-flex  p-4  text-green-600" >
            <SiJavascript size={20} />
          </div> */}

        </div>
      </div>
    </section>
  );
}
