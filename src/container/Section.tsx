import { cn } from '@/lib/utils';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  title?: string;
  className?: string;
  hideOverflowX?: boolean
} & React.PropsWithChildren;

export default function Section(props: Props) {
  const { title } = props;
  return (
    <section
      className={twMerge(' rounded-xl overflow-x-hidden ', props.className)}
    >

      <div className='container p-10  max-w-screen-lg  mx-auto '>

        <h2 className='text-xl font-medium text-lime-400'>
          {title}{' '}
          {title && (
            <span className={' text-white'}> {'( ) {'} </span>
          )}
        </h2>

        <div className={cn('ml-10 py-5 text-white flex flex-col place-items-center  ', props.hideOverflowX && "overflow-x-hidden")}> {props.children}</div>

        <h2 className='text-xl font-medium text-white'> {title && '}'}</h2>
      </div>

    </section>
  );
}
