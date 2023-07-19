import React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  title?: string;
  className?: string;
} & React.PropsWithChildren;

export default function Section(props: Props) {
  const { title } = props;
  return (
    <section
      className={twMerge(' mt-15 container mx-auto py-10', props.className)}
    >
      <h2 className='text-3xl font-medium text-lime-500'>
        {title}{' '}
        {title && (
          <span className='tracking-wider text-white'> {'( ) {'} </span>
        )}
      </h2>

      <div className=' my-5 ms-5  '>{props.children}</div>

      <h2 className='text-3xl font-medium text-white'> {title && '}'}</h2>
    </section>
  );
}
