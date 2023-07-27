import { cn } from '@/lib/utils';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  title?: string;
  className?: string;
  elevated: boolean
  hideOverflowX?: boolean
  indentation?: boolean
  contentClassName?: string
} & React.PropsWithChildren;

export default function Section(props: Props) {
  const { title, elevated, indentation = true, contentClassName } = props;
  return (
    <section
      className={twMerge('relative rounded-xl max-w-screen-lg z-30 mx-auto overflow-x-hidden ', elevated && 'z-40 shadow-2xl shadow-lime-400/10  bg-b-light pattern-2', props.className)}
    >

      <div className={'container   max-w-screen-lg  mx-auto '}>

        <h2 className='text-xl p-4 md:p-10 font-medium text-lime-400'>
          {title}{' '}
          {title && (
            <span className={' text-white'}> {'( ) {'} </span>
          )}
        </h2>

        <div className={cn('py-4 text-white flex flex-col place-items-center  ', indentation && ' p-4 md:px-10 md:ml-4 ml-2', props.hideOverflowX && "overflow-x-hidden", contentClassName)}> {props.children}</div>

        <h2 className='text-xl font-medium text-white pt-4 pb-2 md:pt-10 md:px-10'> {title && '}'}</h2>
      </div>

    </section>
  );
}
