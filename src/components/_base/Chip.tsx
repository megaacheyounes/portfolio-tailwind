import { SiAndroid, SiGooglechrome } from 'react-icons/si';

import { cn } from '@/utils/utils';

type Props = {
  title: string;
  type: 'android' | 'web';
};

export default function Chip(props: Props) {
  const android = 'border-green-700 bg-green-100 px-2   text-green-700';
  const web = 'border-purple-700 bg-purple-100 px-2   text-purple-700';
  const { type, title } = props;
  return (
    <>
      <div
        className={cn(
          ' inline-flex  w-auto items-center rounded-full border py-0.5  ',
          type == 'android' && android,
          type == 'web' && web
        )}
      >
        {type == 'android' && <SiAndroid size={18} />}
        {type == 'web' && <SiGooglechrome size={18} />}

        <p className=' ml-2  rounded-full text-xs font-medium '>{title}</p>
      </div>
    </>
  );
}
