import * as React from 'react';

import Socials from '@/components/socials';

type Props = any;

export default function Header(props: Props) {
  return (
    <header className='  text-white bg-b-light '>
      <div className='container place-items-center mx-auto flex flex-row justify-between px-10   '>
        <a
          href='/'
          className='title-font cursor-pointer  font-medium   md:justify-start'
        >
          <img src='/favicon.ico' className='w-12' />
        </a>
        <div className='flex-1' />
        <Socials />
        <button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50  font-medium rounded-lg text-sm px-5 ml-1 py-2 text-center ">Resume</button>

      </div>
    </header>
  );
}
