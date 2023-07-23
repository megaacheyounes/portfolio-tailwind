import React from 'react';
import { MdWork } from 'react-icons/md';

import ArrowLink from '@/components/ArrowLink';
import Section from '@/container/Section';
import { EXPERIENCES } from '@/data/experiences';
import DataProvider from '@/data/DataProvider';
import { cn } from '@/lib/utils';



export default function Experience() {

  const data = new DataProvider()

  if (true) {
    return (
      <Section title='Experience' className='bg-b-dark'>
        <div className="flex flex-wrap  ">
          <div className="border-r ">
            <nav className="flex flex-col space-y-2" aria-label="Tabs" role="tablist" data-hs-tabs-vertical="true">
              {data.experiences.map((exp, i) => (
                <button type="button" className={cn("hs-tab-active:border-lime-500 hs-tab-active:text-lime-600  py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-xs whitespace-nowrap  hover:text-line-600 ", i == 0 && 'active')} id={"tab--item-" + i} data-hs-tab={"#tab--" + i} aria-controls={"tab--" + i} role="tab">
                  {exp.company.name}
                </button>
              ))}

            </nav>
          </div>

          <div className="ml-4 w-80 ">
            {data.experiences.map((exp, i) => (
              <div id={"tab--" + i} role="tabpanel" aria-labelledby={"tab--item-" + i} className={`${i == 0 ? '' : 'hidden'}`} >

                <h3 className='mb-1 flex items-center text-sm font-semibold   '>
                  {exp.title}
                </h3>
                <time className='mb-2 block  text-sm font-normal leading-none text-gray-400 '>
                  {exp.start} - {exp.end}
                </time>

                <ul className="pl-5 list-disc" >
                  {exp.achievements.map(x => (
                    <li className="text-xs" >{x}</li>
                  ))}
                </ul>
              </div>
            ))}


          </div>
        </div>
      </Section>
    )
  }



}
