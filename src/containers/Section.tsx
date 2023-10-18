import React from 'react';
import { twMerge } from 'tailwind-merge';

import { cn } from '@/utils/utils';

type Props = {
  title?: string;
  className?: string;
  elevated: boolean;
  hideOverflowX?: boolean;
  indentation?: boolean;
  contentClassName?: string;
  margin?: string;
  reveal?: string;
} & React.PropsWithChildren;

export default function Section(props: Props) {
  const {
    title,
    elevated,
    indentation = true,
    contentClassName,
    margin = '',
    className,
    children,
  } = props;
  return (
    <div className={margin}>
      <section
        className={twMerge(
          'relative z-30 mx-auto   overflow-x-hidden rounded-xl ',
          elevated &&
            'bg-b-light pattern-2 z-40  shadow-2xl shadow-lime-400/10',
          className
        )}
      >
        <div className='container mx-auto'>
          {title && (
            <h2 className='p-4 text-xl font-medium text-lime-400 md:p-10'>
              {title} <span className=' text-white'> {'( ) {'} </span>
            </h2>
          )}

          <div
            className={cn(
              'flex flex-col place-items-center py-4 text-white  ',
              indentation && 'p-4 sm:ml-4 md:ml-6 md:px-10',
              props.hideOverflowX && 'overflow-x-hidden',
              contentClassName
            )}
          >
            {children}
          </div>

          {title && (
            <h2 className='p-4 pb-2 pt-4 text-xl font-medium text-white md:p-10  md:px-10 md:pt-10'>
              {'}'}
            </h2>
          )}
        </div>
      </section>
    </div>
  );
}
