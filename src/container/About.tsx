import * as React from 'react';
import { SiGmail, SiLinkedin } from 'react-icons/si';

import ArrowLink from '@/components/ArrowLink';
import IconButton from '@/components/IconButton';
import Section from '@/container/Section';
import Brands from '@/components/Brands';
import BrandsSwiper from '@/components/BrandsSwiper';
import { MdEmail } from 'react-icons/md';
import SkillsIcons from '@/components/SkillsIcons';
import SkillsSwiper from '@/components/SkillsSwiper';
import Socialss from '@/components/Socialss';

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



export default function About(props: Props) {
  return (
    <Section indentation={true} elevated={true} title='About' className="bg-b-dark " hideOverflowX={false}>
      <div className=' w-full    '>
        <div className='  flex flex-col   mx-4'>
          <h5 className='mx-auto text-justify text-md '>{about}</h5>

          <a className='mx-auto mt-104' href="https://www.codewars.com/users/YounesMegaache/" target="_blank">
            <img className='mt-4 flex-inline max-w-xs' src="https://www.codewars.com/users/YounesMegaache/badges/large" />
          </a>

          <div className='mx-auto my-4 mt-20 gap-4 '>
            <Socialss large={true} />
          </div>
        </div>


        {/* <h2 className="text-lg text-center font-medium  mt-8   ">Campanies I'm proud to have collaborated with  </h2>
        <div className=" mt-8  ">
          <BrandsSwiper />
        </div> */}


        <h2 className="text-lg  text-center font-medium  mt-16   ">Technologies I have used  </h2>
        <div className=" mt-8   mb-8   ">
          <SkillsSwiper />
        </div>

      </div>
    </Section>
  );
} 