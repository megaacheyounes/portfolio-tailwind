import * as React from 'react';

import { cn } from '@/lib/utils';

type Props = {
  href: string;
  className?: string;
} & React.PropsWithChildren;

export default function IconButton(props: Props) {
  return (
    <a
      // href={props.href}
      target='_blank'
      className={cn(
        '  hover:text-primary-500    m-1 cursor-pointer rounded-full p-1 transition-all ease-out active:scale-110 ',
        props.className
      )}
    >
      {props.children}
    </a>
  );
} 