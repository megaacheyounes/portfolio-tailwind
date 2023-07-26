
import Section from '@/container/Section';
import DataProvider from '@/data/DataProvider';
import { cn } from '@/lib/utils';
import { twMerge } from 'tailwind-merge';



export default function Experience() {

  const data = new DataProvider()

  if (true) {
    return (
      <Section elevated={true} title='Experience' className='bg-b-dark    '>
        <div className="flex flex-wrap lg:flex-row flex-col place-items-center w-full ">

          <div className="border-r hidden lg:block  ">
            <nav className="flex flex-col space-y-2" aria-label="Tabs" role="tablist" data-hs-tabs-vertical="true">
              {data.experiences.map((exp, i) => (
                <button key={"exp" + i} type="button" className={twMerge("hs-tab-active:border-lime-500 hs-tab-active:text-lime-400  py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-sm whitespace-nowrap  hover:text-lime-600 ", i == 0 && 'active')} id={"tab--item-" + i} data-hs-tab={"#tab--" + i} aria-controls={"tab--" + i} role="tab">
                  {exp.company.name}
                </button>
              ))}
            </nav>
          </div>


          {/* mobile tabs */}
          <div className="block lg:hidden border-b mb-2  overflow-y-hidden  ">
            <nav className="-mb-0.5 flex justify-center space-x-6 overflow-x-auto" aria-label="Tabs" role="tablist">
              {data.experiences.map((exp, i) => (

                <button key={"exp" + i} type="button" className={twMerge("hs-tab-active:font-semibold hs-tab-active:border-lime-600 hs-tab-active:text-lime-400 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-lime-600  ", i == 0 && 'active')} id={"tab--item-" + i} data-hs-tab={"#tab--" + i} aria-controls={"tab--" + i} role="tab">
                  {exp.company.name}
                </button>
              ))}
            </nav>
          </div>
          {/* mobile tabs:end */}

          <div className=" w-full lg:w-96 md:ml-4 ">
            {data.experiences.map((exp, i) => (
              <div key={"ex" + i} id={"tab--" + i} role="tabpanel" aria-labelledby={"tab--item-" + i} className={`${i == 0 ? '' : 'hidden'}`} >

                <h3 className='mb-1  text-sm font-semibold   '>
                  {exp.title}
                </h3>
                <time className='mb-2 block  text-sm font-normal leading-none text-gray-400 '>
                  {exp.start} - {exp.end}
                </time>

                <ul className="pl-5 list-disc" >
                  {exp.achievements.map(x => (
                    <li key={x} className="mt-1 text-sm" >{x}</li>
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
