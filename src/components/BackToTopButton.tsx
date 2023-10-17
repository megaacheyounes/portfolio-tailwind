'use client';
import { useEffect, useState } from 'react';
import { HiArrowCircleUp } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';

const MINIMUM_SCROLL_DISTANCE = 200;

export default function BackToTopButton() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (
        document.body.scrollTop > MINIMUM_SCROLL_DISTANCE ||
        document.documentElement.scrollTop > MINIMUM_SCROLL_DISTANCE
      ) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <span className='fixed bottom-2  right-2  z-50 '>
        <button
          onClick={scrollUp}
          className={twMerge(
            'hover:text-primary-500  right-0 m-1  cursor-pointer  rounded-full    p-1  text-white opacity-0 shadow-lime-500/50 transition-all duration-300  ease-out hover:-translate-y-1  hover:shadow-xl active:scale-110 ',
            showBtn && 'opacity-100'
          )}
        >
          <HiArrowCircleUp size={35} />
        </button>
      </span>
    </>
  );
}
