import * as React from 'react';
import { HiMail, HiPhone } from 'react-icons/Hi';
import { SiGithub, SiLinkedin } from 'react-icons/si';

import IconButton from '@/components/IconButton';
import { cn } from '@/lib/utils';
import { twMerge } from 'tailwind-merge';




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

export default function SocialsStatic() {
  return (

    <div className={' w-10 gap-1 text-white flex flex-col justify-center place-items-center  '}>
      {LINKS.map((link, index) => {
        const Icon = link.icon;
        return (
          <IconButton
            key={link.href}
            href={link.href}
          >
            <Icon size={20} />
          </IconButton>
        );
      })}
      <span className="h-20 w-[2px] bg-white "></span>

    </div>

  );
}
