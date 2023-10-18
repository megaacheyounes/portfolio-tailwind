import Link from 'next/link';
import * as React from 'react';
import { CgArrowLongRight } from 'react-icons/cg';

import { cn } from '@/utils/utils';

type Props = {
  href: string;
  title: string;
  className?: string;
  newTab?: boolean;
} & React.PropsWithChildren;

export default function ArrowLink(props: Props) {
  return (
    <Link
      scroll={true}
      href={props.href}
      target={props.newTab ? '_blank' : '_self'}
      className={cn(
        'text-md group relative ml-2 inline-flex items-center font-medium text-lime-500 hover:text-lime-400 ',
        props.className
      )}
    >
      {props.title}
      <span className='absolute -right-6 block text-lg  transition-all group-hover:-right-8 '>
        <CgArrowLongRight />
      </span>
    </Link>
  );
}
