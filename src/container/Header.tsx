import Socials from '@/components/SocialLinks';
import ArrowLink from '@/components/_base/ArrowLink';
import Link from 'next/link';

type Props = any;

export default function Header(props: Props) {
  return (
    <header className='  z-40 text-white'>
      <div className='container relative mx-auto flex flex-row place-items-center justify-between px-10 py-4  '>
        <Link
          href='/'
          className='title-font cursor-pointer  font-medium   md:justify-start'
        >
          <img src='/favicon.ico' className='w-12' />
        </Link>
        <div className='flex-1' />
        <Socials />

        <ArrowLink newTab className='text-md' title='Resume' href='/resume.pdf'>
          Résumé
        </ArrowLink>
      </div>
    </header>
  );
}
