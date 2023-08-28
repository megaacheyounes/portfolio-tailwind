import Section from '@/container/Section';
import Link from 'next/link';

export default function Footer() {
  return (
    <Section
      elevated={false}
      className='   body-font    z-0  
    flex justify-center   text-white'
    >
      <div className='  border-t-3 border-dashed border-lime-500'>
        <div className='  flex  flex-col items-center   '>
          <Link href='/' className='title-font cursor-pointer  font-medium    '>
            <img src='/favicon.ico' className='w-12' />
          </Link>

          <p className='max-w-sm text-center text-xs md:max-w-lg '>
            Designed loosely in{' '}
            <Link
              className='text-lime-500'
              href='https://www.figma.com/'
              target='_blank'
            >
              Figma
            </Link>{' '}
            and coded in{' '}
            <Link
              className='text-lime-500'
              href='https://code.visualstudio.com/'
              target='_blank'
            >
              VS Code
            </Link>{' '}
            by yours very truly, built using{' '}
            <Link
              className='text-lime-500'
              href='https://nextjs.org/'
              target='_blank'
            >
              Next.js
            </Link>{' '}
            and{' '}
            <Link
              className='text-lime-500'
              href='https://tailwindcss.com/'
              target='_blank'
            >
              tailwindcss
            </Link>
            , deployed to{' '}
            <Link
              className='text-lime-500'
              href='https://vercel.com/'
              target='_blank'
            >
              Vercel
            </Link>
            .
            <br />
            Text is in the{' '}
            <Link
              className='text-lime-500'
              href='https://github.com/tonsky/FiraCode'
              target='_blank'
            >
              FiraCode
            </Link>{' '}
            typeface
          </p>
          <p className='mt-4 text-sm font-bold '>
            &copy; {new Date().getFullYear()} Younes Megaache
          </p>
        </div>
      </div>
    </Section>
  );
}
