import { cn } from '@/lib/utils';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  title?: string;
  className?: string;
  elevated: boolean
  hideOverflowX?: boolean
} & React.PropsWithChildren;

export default function Section(props: Props) {
  const { title, elevated } = props;
  return (
    <section
      className={twMerge('relative rounded-xl max-w-screen-lg z-30 mx-auto overflow-x-hidden ', elevated && 'z-40 shadow-2xl shadow-lime-400/5  bg-b-light pattern-2', props.className)}
    >

      <div className='container p-10  max-w-screen-lg  mx-auto '>

        <h2 className='text-xl font-medium text-lime-400'>
          {title}{' '}
          {title && (
            <span className={' text-white'}> {'( ) {'} </span>
          )}
        </h2>

        <div className={cn('ml-2 py-4 text-white flex flex-col place-items-center  ', props.hideOverflowX && "overflow-x-hidden")}> {props.children}</div>

        <h2 className='text-xl font-medium text-white'> {title && '}'}</h2>
      </div>

    </section>
  );
}
