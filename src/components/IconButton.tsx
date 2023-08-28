import * as React from 'react';

import { cn } from '@/lib/utils';
import Link from 'next/link';

type Props = {
  href: string;
  className?: string;
  newTab?: boolean;
} & React.PropsWithChildren;

export default function IconButton(props: Props) {
  return (
    <Link
      href={props.href}
      target={props.newTab ? '_blank' : '_self'}
      className={cn(
        '  hover:text-primary-500    m-1 cursor-pointer rounded-full p-1 transition-all ease-out active:scale-110 ',
        props.className
      )}
    >
      {props.children}
    </Link>
  );
}
