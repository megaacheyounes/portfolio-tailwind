'use client';
/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import { cn } from '@/lib/utils';
type Props = {
  className?: string;
  reversed?: boolean;
  children: React.ReactNode[];
} & React.PropsWithChildren;

export default function ContSwiper(props: Props) {
  const { className } = props;

  return (
    <div className={cn(' cont-swiper relative overflow-x-clip', className)}>
      <span
        className={
          'via-bg-light from-b-light absolute  left-0  top-0 z-50  h-full w-10  bg-gradient-to-r  to-transparent  py-1'
        }
      />
      <div className='animate-swiper  flex  flex-row    '>{props.children}</div>
      <span
        className={
          'via-bg-light from-b-light  absolute   right-0  top-0   z-50 h-full w-10 bg-gradient-to-l to-transparent   '
        }
      />
    </div>
  );
}
