import * as React from 'react';
import { HiMail, HiPhone } from 'react-icons/Hi';
import { SiGithub, SiLinkedin } from 'react-icons/si';

import IconButton from '@/components/IconButton';
import { cn } from '@/lib/utils';
import { twMerge } from 'tailwind-merge';


type Props = {
  large?: boolean
}

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

export default function Socialss(props: Props) {

  const { large = false } = props;

  return (

    <div className={twMerge('  gap-1 text-white flex flex-row  mx-1', large && "mx-2")}>
      {LINKS.map((link, index) => {
        const Icon = link.icon;
        return (
          <IconButton
            key={link.href}
            href={link.href}
          >
            <Icon size={large ? 30 : 18} />
          </IconButton>
        );
      })}

    </div>

  );
}
