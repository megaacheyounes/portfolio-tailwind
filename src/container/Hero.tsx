/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import Section from '@/container/Section';

type Props = any;

export default function Hero(props: Props) {
  return (
    <Section className='mt-0  pt-0'>
      <div className='grid grid-cols-1 justify-items-center gap-10    '>
        <div className='max-w-md '>
          <img
            className='rounded object-cover object-center'
            alt='hero'
            src='/hero.png'
          />
        </div>
        <div className=' mb-16 flex flex-col items-center text-center  '>
          <h1 className='title-font  text-4xl  font-medium'>Hello 👋 I'm</h1>
          <h1 className=' mt-7 text-4xl text-lime-500 '>{'< Younes'}</h1>
          <h1 className=' mt-4 text-4xl text-lime-500 '>{'Megaache />'}</h1>
          <h1 className='mt-7 text-3xl font-normal'>
            A passionate Android and Full Stack Web Developer
          </h1>
        </div>
      </div>
    </Section>
  );
}
