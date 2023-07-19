import * as React from 'react';

import Socials from '@/components/socials';

type Props = any;

export default function Header(props: Props) {
  return (
    <header className='body-font text-white  '>
      <div className='container mx-auto flex flex-row justify-between px-5 py-10 '>
        <a
          href='/'
          className='title-font cursor-pointer  font-medium   md:justify-start'
        >
          <img src='/favicon.ico' className='w-12' />
        </a>
        <div className='flex-1' />
        <Socials />
      </div>
    </header>
  );
}
