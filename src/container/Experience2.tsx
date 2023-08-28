import Section from '@/container/Section';
import DataProvider from '@/data/DataProvider';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';

/**
 *
 * @at huawei tech
 */

export default function Experience2() {
  const data = new DataProvider();

  return (
    <Section elevated={true} title='Experience' className='bg-b-dark    '>
      <div className='hs-accordion-group'>
        <div className='hs-accordion active group' id='hs-basic-heading-one'>
          <div
            className='hs-accordion-toggle  hs-accordion-active:text-lime-600  flex w-full flex-col items-center justify-start gap-x-3 text-left font-semibold text-white transition hover:text-lime-400  '
            aria-controls='hs-basic-collapse-one'
          >
            <div
              className='block w-full 
          rounded-md pl-8 text-white
           transition-[height] duration-300             
          '
            >
              {'/**'}
              <br />
              {'*'}
              <span className='ml-4 text-cyan-300'> @</span>
              <span className='text-pink-300 '>at</span>
              <Link
                href='https://huawei.com'
                className='ml-4 inline-flex hover:underline '
              >
                {`Huawei Technologies`}
              </Link>
              <br />
              {'*'}
              <p className=' ml-4 hover:underline'>{'jan 2023 - present '}</p>
              <br />
              {'**/'}
            </div>
            <div className='flex'>
              <div className='hs-accordion-active:hidden hs-accordion-active:text-lime-600 block    group-hover:text-lime-400  '>
                <ChevronRight size={20} />
              </div>
              <div className='hs-accordion-active:block hs-accordion-active:text-lime-600 hidden'>
                <ChevronDown size={20} />
              </div>
              Full Stack Mobile Developer
              <span className='text-white hover:text-white'>( ) </span>
              <span className='hs-accordion-active:hidden block rounded-md bg-lime-950 text-white transition-all duration-200 group-hover:bg-lime-600 group-hover:text-black'>
                {'{...}'}
              </span>
              <span className='hs-accordion-active:block hidden   text-white transition-all duration-200 group-hover:text-white'>
                {'{'}
              </span>
            </div>
          </div>

          <div
            id='hs-basic-collapse-one'
            className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300'
            aria-labelledby='hs-basic-heading-one'
          >
            <p className='mb-2 ml-10 text-gray-800 dark:text-gray-200'>
              <em>This is the third item's accordion body.</em> It is hidden by
              default, until the collapse plugin adds the appropriate classes
              that we use to style each element. These classes control the
              overall appearance, as well as the showing and hiding via CSS
              transitions.n by default, until the collapse plugin adds the
              appropriate classes that we use to style each element. These
              classes control the overall appearance, as well as the showing and
              hiding via CSS transitions.
            </p>

            <span className='ml-8 mt-4 pt-4 font-bold'>{'}'}</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
