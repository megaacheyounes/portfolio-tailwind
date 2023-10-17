'use client';
/* eslint-disable @next/next/no-img-element */

import {
  SiAndroid,
  SiHarmonyos,
  SiKotlin,
  SiNodedotjs,
  SiReact,
} from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';

type Props = any;
const TYPING_DELAY = 1600;

import DataProvider from '@/data/DataProvider';
import { containerVariants, itemVariants } from '@/utils/animation';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero(props: Props) {
  const { titlePrefix, titles, firstName, lastName } = new DataProvider()
    .personalInfo;
  const sequence = titles.reduce(
    (arr, title) => [...arr, title, TYPING_DELAY, 500],
    [] as any
  );
  return (
    <section className='min-h-500 relative mx-0  overflow-x-clip px-0 pt-5 text-white'>
      <div className='mt-5 grid grid-cols-1  justify-items-center  '>
        <div className='flex flex-col items-center text-center  '>
          <h1 className='title-font  text-2xl  font-medium'>Hello 👋 I'm</h1>
          <h1 className=' mt-4 text-4xl  text-lime-400 '>{`<${firstName}`}</h1>
          <h1 className=' mt-4 text-4xl text-lime-400 '>{`${lastName}/>`}</h1>
          <h1 className='mt-4  max-w-md  text-xl font-normal sm:text-2xl'>
            <br /> {titlePrefix}{' '}
            <TypeAnimation
              sequence={sequence}
              wrapper='span'
              cursor={true}
              repeat={Infinity}
            />
          </h1>
        </div>
        <div className='   max-w-lg '>
          <Image
            height={547}
            width={511}
            quality={80}
            className='rounded object-cover  object-center'
            alt='hero'
            blurDataURL='me_b.png'
            placeholder={'blur'}
            src='/me.png'
          />
          <motion.ul
            variants={containerVariants(0)}
            initial='hidden'
            animate='show'
            transition={{ delay: 0.3 }}
          >
            <motion.li variants={itemVariants}>
              <div className=' bg-b-dark text-dark absolute inline-flex -translate-y-20 translate-x-10 rounded-full  p-4  shadow-lg'>
                <SiHarmonyos size={30} />
              </div>
            </motion.li>

            <motion.li variants={itemVariants}>
              <div className=' bg-b-dark  absolute   inline-flex  -translate-y-72  translate-x-72 rounded-full p-6 text-purple-600 shadow-2xl  md:-translate-y-96 md:translate-x-96 md:p-6'>
                <SiKotlin className='md:w-18 md:h-18 h-10 w-10' />
              </div>
            </motion.li>

            <motion.li variants={itemVariants}>
              <div className=' bg-b-dark absolute inline-flex -translate-y-80 translate-x-16 rounded-full p-4 text-green-600 shadow-xl  md:p-6'>
                <SiAndroid className='md:w-18 md:h-18 h-10 w-10' />
              </div>
            </motion.li>

            <motion.li variants={itemVariants}>
              <div className=' bg-b-dark absolute inline-flex -translate-y-48 translate-x-0 rounded-full  p-6  text-blue-600'>
                <SiReact size={40} />
              </div>
            </motion.li>

            <motion.li variants={itemVariants}>
              <div className=' bg-b-dark  absolute  inline-flex -translate-y-44 translate-x-80     rounded-full p-4 text-green-600  shadow-xl  md:translate-x-96'>
                <SiNodedotjs size={50} />
              </div>
            </motion.li>
          </motion.ul>

          {/* <div className=" absolute  shadow-xl  -translate-y-52 -translate-x-96 rounded-full bg-b-dark inline-flex  p-4  text-green-600" >
            <SiJavascript size={20} />
          </div> */}
        </div>
      </div>
    </section>
  );
}
