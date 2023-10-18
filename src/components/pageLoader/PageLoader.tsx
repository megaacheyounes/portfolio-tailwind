// 'use client';
import './style.scss';

import PageLoaderMessage from '@/components/pageLoader/PageLoaderMessage';

const MAX_CUBE_COUNT = 18;

export default function PageLoader() {
  const getRect = (maxCount: number) => {
    const cubes = new Array(maxCount).fill(0);
    return cubes.map((v, i) => (
      <rect
        key={'cube_' + i}
        width='10'
        height='10'
        x={10 * (i + 1) + 2 * i}
        y={6}
        className='fill-lime-500 shadow-lime-300 drop-shadow-lg'
      />
    ));
  };

  return (
    <div className=' align-center flex h-[70vh]   flex-col place-items-center justify-center  '>
      <p className='font-Minecraft text-md uppercase text-lime-500'>
        {' '}
        now loading . . .
      </p>
      <div className='relative mb-2 mt-4  '>
        <svg
          className='svg-loader-container w-44 fill-lime-500  shadow-lime-300    drop-shadow-lg  '
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 237 22'
        >
          <path
            className='  '
            d='M235.4 8.5h-1.6V5h-4V1H5.8v4h-3v3.5h-2v6h2V17h3v4h224v-4h4v-2.5h1.6v-6zm-3.6 6.5h-4v4H7.8v-4h-3V7h3V3h220v4h4v8z'
          />

          {getRect(MAX_CUBE_COUNT)}
        </svg>
      </div>
      <PageLoaderMessage />
      <p className='ahhh-message mx-2 mt-2 overflow-hidden text-center text-sm  text-lime-500'>
        AHHHHH (ノಠ益ಠ)ノ彡┻━┻
      </p>
    </div>
  );
}
