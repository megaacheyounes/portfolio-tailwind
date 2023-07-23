import * as React from 'react';

import { cn } from '@/lib/utils';
import { CgArrowLongRight } from 'react-icons/Cg'

type Props = {
  href: string;
  title: string;
  className?: string;
} & React.PropsWithChildren;

export default function ArrowLink(props: Props) {
  return (
    <a
      href={props.href}
      target="_blank"
      className={cn(
        ' group ml-2 inline-flex items-center gap-1 text-xl font-medium text-lime-500 hover:text-lime-400 ',
        props.className
      )}
    >
      {props.title}
      <span className='block text-xl pt-1 transition-all group-hover:ms-2  '>
        <CgArrowLongRight />
      </span>
    </a>
  );
}
