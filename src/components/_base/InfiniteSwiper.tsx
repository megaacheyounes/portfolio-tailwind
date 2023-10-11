'use client';
/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import { cn } from '@/utils/utils';
import { twMerge } from 'tailwind-merge';
type Props = {
  className?: string;
  reversed?: boolean;
  children: React.ReactNode[];
} & React.PropsWithChildren;

export default function InfiniteSwiper(props: Props) {
  const { className, reversed } = props;

  return (
    <div className={cn(' cont-swiper relative overflow-x-clip', className)}>
      <span
        className={
          'via-bg-light from-b-light absolute  left-0  top-0 z-50  h-full w-10  bg-gradient-to-r  to-transparent  py-1'
        }
      />
      <div
        className={twMerge(
          'animate-swiper  flex flex-row ',
          reversed && 'direction-alternate-reverse'
        )}
      >
        {props.children}
      </div>
      <span
        className={
          'via-bg-light from-b-light  absolute   right-0  top-0   z-50 h-full w-10 bg-gradient-to-l to-transparent   '
        }
      />
    </div>
  );
}
