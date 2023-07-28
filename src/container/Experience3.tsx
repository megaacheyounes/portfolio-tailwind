
import Skills from '@/components/Skills';
import Section from '@/container/Section';
import DataProvider from '@/data/DataProvider';
import { cn } from '@/lib/utils';
import { HiOutlineExternalLink } from 'react-icons/Hi';
import { twMerge } from 'tailwind-merge';



export default function Experience3() {

  const data = new DataProvider()

  if (true) {
    return (
      <Section elevated={false} title='Experience' className=' mb-0 pb-0  '>
        {
          data.experiences.map(
            (exp, i) => (
              <div data-te-ripple-init className={'bg-b-dark px-8 py-8 mb-4 w-full dark flex flex-col place-items-start  rounded-xl '}>
                <div className="flex flex-row gap-4  w-full  place-items-center ">

                  <a target={"_blank"} href={exp.company.website} className="hover:scale-125  duration-300 transition-all " >
                    <img alt='huawei' className='h-8 object-contain'
                      src={exp.company.logo} />
                  </a>


                  <div>
                    <p className='text-xs text-white/80  m-0 p-0   '>{exp.start}{' - '}{exp.end}</p>

                    <p className='text-md m-0 p-0 mt-1 '>{exp.title}</p>
                  </div>

                </div>
                <ul className="pl-5 list-disc mt-2" >
                  {exp.achievements.map(x => (
                    <li key={x} className="mt-1 text-sm" >{x}</li>
                  ))}
                </ul>

                <div>
                  <Skills skills={exp.technologies} />
                </div>

                {/* <ArrowLink className='text-sm mt-2' title='learn more' href={'/project/' + project.name} /> */}

              </div>
            )
          )
        }

      </Section>
    )
  }



}
