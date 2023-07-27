
import Section from '@/container/Section';
import DataProvider from '@/data/DataProvider';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

/**
 * 
 * @at huawei tech
 */


export default function Experience2() {

  const data = new DataProvider()

  return (
    <Section elevated={true} title='Experience' className='bg-b-dark    '>

      <div className="hs-accordion-group">
        <div className="hs-accordion group active" id="hs-basic-heading-one">


          <div className="hs-accordion-toggle  hs-accordion-active:text-lime-600  justify-start items-center gap-x-3 w-full font-semibold text-left text-white transition hover:text-lime-400 flex flex-col  " aria-controls="hs-basic-collapse-one">

            <div className='text-white rounded-md 
          pl-8 block w-full
           transition-[height] duration-300             
          '>  {'/**'}
              <br />
              {'*'}<span className='text-cyan-300 ml-4'> @</span>
              <span className='text-pink-300 '>at</span>
              <a href="https://huawei.com" className='inline-flex hover:underline ml-4 '>{`Huawei Technologies`}
              </a>
              <br />
              {'*'}   <p className='   hover:underline ml-4'>{'jan 2023 - present '}</p>
              <br />
              {'**/'}
            </div>
            <div className="flex">

              <div className="hs-accordion-active:hidden hs-accordion-active:text-lime-600 block    group-hover:text-lime-400  "  >
                <ChevronRight size={20} />
              </div>

              <div className="hs-accordion-active:block hs-accordion-active:text-lime-600 hidden" >
                <ChevronDown size={20} />
              </div>
              Full Stack Mobile Developer
              <span className='text-white hover:text-white'>( ) </span>

              <span className='text-white group-hover:text-black bg-lime-950 group-hover:bg-lime-600 transition-all duration-200 block hs-accordion-active:hidden rounded-md'>  {'{...}'}</span>

              <span className='text-white group-hover:text-white   hidden hs-accordion-active:block transition-all duration-200'>  {'{'}</span>

            </div>

          </div>

          <div id="hs-basic-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-heading-one">


            <p className="mb-2 text-gray-800 dark:text-gray-200 ml-10">

              <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.n by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            </p>

            <span className='ml-8 mt-4 pt-4 font-bold'>
              {'}'}
            </span>
          </div>


        </div>


      </div>

    </Section>
  )
}



