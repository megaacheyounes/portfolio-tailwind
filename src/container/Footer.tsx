import * as React from 'react';

import Socials from '@/components/socials';

type Props = any;

export default function Footer(props: Props) {
  return (
    <footer className='body-font flex justify-center py-10 text-white'>
      <div className='  border-t-3 border-dashed border-lime-500'>
        <div className='  flex  flex-col items-center   '>
          {/* <a href='/' className='title-font cursor-pointer  font-medium    '>
          <img src='/favicon.ico' className='w-12' />
        </a> */}

          <span className='mt-4 inline-flex justify-center  '>
            <Socials />
          </span>

          <p className=' max-w-md   text-center text-lg '>
            Designed loosely in Figma and coded in VS Code by yours very truly,
            built using Next.js and MUI, deployed as static website to Firebase
            hosting. Text is in the FiraCode typeface
          </p>
          <p className='mt-4 text-lg font-bold '>
            © {new Date().getFullYear()} Younes Megaache
          </p>
        </div>
      </div>
    </footer>
  );
}
