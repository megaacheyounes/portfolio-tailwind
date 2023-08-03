import ArrowLink from '@/components/ArrowLink';
import Socials from '@/components/Socials';
import Section from '@/container/Section';
import DataProvider from '@/data/DataProvider';

type Props = any;

export default function About(props: Props) {
  const dataProvider = new DataProvider();
  const about = dataProvider.about;
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
          href={'/resume.pdf'}
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

        <a
          className='    '
          href='https://www.codewars.com/users/YounesMegaache/'
          target='_blank'
        >
          <img
            className=' mt-5 max-w-xs '
            src='https://www.codewars.com/users/YounesMegaache/badges/large'
          />
        </a>

        <Socials className='mt-5' large={false} />
      </div>
    </Section>
  );
}
