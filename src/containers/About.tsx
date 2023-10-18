import Link from 'next/link';

import DataProvider from '@/data/DataProvider';

import Socials from '@/components/SocialLinks';
import ArrowLink from '@/components/_base/ArrowLink';
import Section from '@/containers/Section';

export default function About() {
  const dataProvider = new DataProvider();
  const about = dataProvider.personalInfo;
  return (
    <Section
      indentation={true}
      elevated={true}
      margin='mx-0 sm:mx-5 md:mx-10 lg:mx-20'
      title='About'
      className='bg-b-dark fade-in mx-4 sm:container sm:mx-auto  '
      contentClassName='  pt-0 '
      hideOverflowX={false}
    >
      <div className=' flex w-full flex-col  place-items-center     '>
        <h5
          className='text-md mx-auto  text-start '
          dangerouslySetInnerHTML={{ __html: about.introduction }}
        ></h5>

        <ArrowLink
          className='mx-auto mt-5  '
          title='more about me'
          href='/resume.pdf'
          newTab={true}
        ></ArrowLink>

        {/* <h6 className=' '>
            Here are a few technologies I’ve been working with recently:
          </h6>
          <ul className='mt-2  grid   list-disc   grid-cols-2   gap-1 pl-4 '>
            {recentTech.map((t) => (
              <li className='max-w-30 text-lime-500'>
                <span className='text-white'>{t}</span>
              </li>
            ))}
          </ul> */}

        {!!about.codewarsLink && (
          <Link className='' href={about.codewarsLink} target='_blank'>
            <img
              className='mt-5 max-w-xs '
              src={`${about.codewarsLink}/badges/large`}
            />
          </Link>
        )}
        <Socials className='mt-5' large={false} />
      </div>
    </Section>
  );
}
