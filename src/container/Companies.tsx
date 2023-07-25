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
    <Section elevated={true} title=' Brands I have collaborated with:  ' className="bg-b-dark overflow-x-hidden">
      <div className='flex  flex-col place-items-start justify-items-start '>

        <div className="pt-4 mx-auto max-w-screen-xl  ">
          <h2 className="text-xl font-medium    "></h2>
          <div className=" mt-4    ">
            <BrandsSwiper />
          </div>
        </div>

      </div>
    </Section>
  );
}
