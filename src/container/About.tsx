import { SiLinkedin } from 'react-icons/si';

import ArrowLink from '@/components/ArrowLink';
import Socialss from '@/components/Socialss';
import Section from '@/container/Section';
import { MdEmail } from 'react-icons/md';

type Props = any;

const about = `
I'm an android and web developer located in Dubai, the UAE.
I am a proficient Android and Web Developer with a profound interest in software and mobile application development. I am a self-driven, well-organized individual with a knack for problem-solving. I am skilled in a variety of programming languages and web technologies, showcasing flexibility and adaptability in my profession.
`;

const LINKS = [
  {
    icon: MdEmail,
    href: 'emailto:younes.megaache@gmail.com',
  },
  {
    icon: SiLinkedin,
    href: '',
  },
];

export default function About(props: Props) {
  return (
    <Section
      indentation={true}
      elevated={true}
      title='About'
      className='bg-b-dark  fade-in  mx-4 my-2 sm:container   sm:mx-auto  '
      contentClassName='pb-0  '
      hideOverflowX={false}
    >
      <div className=' w-full    '>
        <div className=' flex   flex-col'>
          <h5 className='text-md mx-auto text-justify '>{about}</h5>

          <ArrowLink
            className='mx-auto mt-5 sm:mt-10'
            title='more about me'
            href={'/Younes_Megaache.cv.pdf'}
            newTab={true}
          ></ArrowLink>

          <a
            className='mx-auto mt-5 sm:mt-10'
            href='https://www.codewars.com/users/YounesMegaache/'
            target='_blank'
          >
            <img
              className='flex-inline  max-w-xs'
              src='https://www.codewars.com/users/YounesMegaache/badges/large'
            />
          </a>

          <div className='mx-auto mt-5 gap-4 sm:mt-10 '>
            <Socialss large={true} />
          </div>
        </div>
      </div>
    </Section>
  );
}
