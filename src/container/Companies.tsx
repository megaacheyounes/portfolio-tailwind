import { SiLinkedin } from 'react-icons/si';

import BrandsSwiper from '@/components/BrandsSwiper';
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
    href: ' ',
  },
];

export default function Companies(props: Props) {
  return (
    <Section
      elevated={true}
      title=' Brands I have collaborated with:  '
      className='bg-b-dark overflow-x-hidden'
    >
      <div className='flex  flex-col place-items-start justify-items-start '>
        <div className='mx-auto max-w-screen-xl pt-4  '>
          <h2 className='text-xl font-medium    '></h2>
          <div className=' mt-4    '>
            <BrandsSwiper />
          </div>
        </div>
      </div>
    </Section>
  );
}
