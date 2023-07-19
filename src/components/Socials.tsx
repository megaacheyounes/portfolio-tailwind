import * as React from 'react';
import { HiMail, HiPhone } from 'react-icons/Hi';
import { SiGithub, SiLinkedin } from 'react-icons/si';

import IconButton from '@/components/IconButton';

type Props = any;

const LINKS = [
  {
    icon: HiPhone,
    href: '#1',
  },
  {
    icon: HiMail,
    href: 'emailto:younes.megaache@gmail.com',
  },
  {
    icon: SiGithub,
    href: '#2',
  },
  {
    icon: SiLinkedin,
    href: '#3',
  },
];

export default function Socials(props: Props) {
  return (
    <>
      <div className='my-4 gap-4 '>
        {LINKS.map((link, index) => {
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
    </>
  );
}
