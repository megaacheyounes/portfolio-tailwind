import * as React from 'react';
import { SiGmail, SiLinkedin } from 'react-icons/si';

import ArrowLink from '@/components/ArrowLink';
import IconButton from '@/components/IconButton';
import Section from '@/container/Section';

type Props = any;

const about = `
I'm an android and web developer located in Dubai, the UAE.
I am a proficient Android and Web Developer with a profound interest in software and mobile application development. I am a self-driven, well-organized individual with a knack for problem-solving. I am skilled in a variety of programming languages and web technologies, showcasing flexibility and adaptability in my profession.
`;

const LINKS = [
  {
    icon: SiGmail,
    href: 'emailto:younes.megaache@gmail.com',
  },
  {
    icon: SiLinkedin,
    href: ' ',
  },
];

export default function About(props: Props) {
  return (
    <Section title='About'>
      <div className='flex flex-col place-items-start justify-items-start '>
        <h5 className='max-w-screen-sm  text-justify text-xl '>{about}</h5>

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
        <ArrowLink href='/about' title='More about me' />
      </div>
    </Section>
  );
}
