'use client';
import * as React from 'react';

import { cn } from '@/utils/utils';
import Link from 'next/link';

type Props = {
  href: string[];
  className?: string;
  newTab?: boolean;
} & React.PropsWithChildren;

export default function ProtectedIconButton(props: Props) {
  const [link, setLink] = React.useState('ُ#');
  //hide sensitive links from crawler/bots, e.g. mailto:***, tel:***
  return (
    <Link
      href={link}
      target={props.newTab ? '_blank' : '_self'}
      className={cn(
        '  hover:text-primary-500    m-1 cursor-pointer rounded-full p-1 transition-all ease-out active:scale-110 ',
        props.className
      )}
      onMouseEnter={() => setLink(props.href.join(''))}
      onMouseLeave={() => setLink('#')}
    >
      {props.children}
    </Link>
  );
}
