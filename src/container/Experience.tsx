import React from 'react';
import { MdWork } from 'react-icons/md';

import ArrowLink from '@/components/ArrowLink';
import Section from '@/container/Section';

export default function Experience() {
  return (
    <Section title='Experience'>
      <ol className='relative max-w-md border-l border-gray-600'>
        {[1, 2].map((exp, index) => (
          <li key={'exp' + index} className='mb-10 ml-6'>
            <span className=' absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full  bg-gray-400 ring-4 ring-gray-600 '>
              <MdWork className='text-dark text-md' />
            </span>
            <span className='text-md font-bold'> HUAWEI Technologies </span>
            <h3 className='mb-1 flex items-center text-xl font-semibold text-gray-900 dark:text-white'>
              Full Stack Software Developer
              {index == 0 && (
                <span className='text-primary-500 ml-3 mr-2 rounded bg-gray-800 px-2.5 py-0.5 text-sm font-medium '>
                  Present
                </span>
              )}
            </h3>
            <time className='mb-2 block  text-sm font-normal leading-none text-gray-400 '>
              Jan 2020 — present (3 yrs 6 mos){' '}
              <span className='font-bold'> Dubai, UAE</span>
            </time>
            <p className='text-md mb-4 text-justify text-base font-normal text-gray-300 '>
              I developed many android apps like AppFinder, Youtube Vanced
              manager, FMT monitoring tool. I collaborated with Tawasal,
              Emirates Airlines, Steppi and Dubai Sports to develop and publish
              their smartwatch apps. I played a crucial role in integrating
              Huawei Mobile services in large-scale apps like Dubai police,
              carrefour and Virgin mobile. Additionally, I developed a web
              newsletter, admin dashboard, payment microservice and more.
            </p>
          </li>
        ))}
      </ol>
      <ArrowLink href='/resume' title='Full Résumé' />
    </Section>
  );
}
