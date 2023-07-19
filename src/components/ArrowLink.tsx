import * as React from 'react';

import { cn } from '@/lib/utils';

type Props = {
  href: string;
  title: string;
  className?: string;
} & React.PropsWithChildren;

export default function ArrowLink(props: Props) {
  return (
    <a
      href={props.href}
      className={cn(
        ' group ml-2 inline-flex items-center gap-1 text-xl font-medium text-white hover:underline',
        props.className
      )}
    >
      {props.title}
      <span className='block text-3xl transition-all group-hover:ms-2  '>
        &rarr;
      </span>
    </a>
  );
}
