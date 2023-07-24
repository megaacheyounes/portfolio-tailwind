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
        'relative group ml-2 inline-flex items-center text-md font-medium text-lime-500 hover:text-lime-400 ',
        props.className
      )}
    >
      {props.title}
      <span className='block absolute -right-6 text-lg  transition-all group-hover:-right-8 '>
        <CgArrowLongRight />
      </span>
    </a>
  );
}
