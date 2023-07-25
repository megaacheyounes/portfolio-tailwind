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



export default function About(props: Props) {
  return (
    <Section indentation={false} elevated={true} title='About' className="bg-b-dark " hideOverflowX={false}>
      <div className=' w-full'>
        <h5 className=' text-justify text-md '>{about}</h5>

        <a className='' href="https://www.codewars.com/users/YounesMegaache/" target="_blank">
          <img className='mt-4' src="https://www.codewars.com/users/YounesMegaache/badges/large" />
        </a>

        <div className='my-4 gap-4 '>
          {LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <IconButton
                className='inline-flex'
                key={link.href}
                href={link.href}
              >
                <Icon size={30} />
              </IconButton>
            );
          })}
        </div>

        <div className="pt-4 mt-12   ">
          <h2 className="text-xl text-center font-medium    ">Campanies I'm proud to have collaborated with  </h2>
          <div className=" mt-10  ">
            <BrandsSwiper />
          </div>
        </div>

        <div className="pt-4 mb-10 mt-16     ">
          <h2 className="text-xl  text-center font-medium    ">Technologies I have used  </h2>
          <div className=" mt-10    ">
            <SkillsSwiper />
          </div>
        </div>

        <ArrowLink href='/about' title='More about me' />

      </div>
    </Section>
  );
} 