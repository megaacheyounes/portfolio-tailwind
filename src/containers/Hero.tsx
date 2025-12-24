'use client';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

import DataProvider from '@/data/DataProvider';

const TYPING_DELAY = 1600;

export default function Hero() {
  const { titlePrefix, titles } = new DataProvider().personalInfo;

  const sequence = titles.reduce(
    (arr, title) => [...arr, title, TYPING_DELAY, 500],
    [] as any
  );

  return (
    <section className="py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          A Full-Stack Developer
        </h1>
        <h2 className="mt-4 text-lg text-gray-300">
          {titlePrefix}{' '}
          <TypeAnimation
            sequence={sequence}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          I build beautiful, functional, and accessible web experiences.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#projects"
            className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            View My Work
          </a>
          <a href="#contact" className="text-sm font-semibold leading-6 text-white">
            Get in Touch <span aria-hidden="true">→</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
