import DataProvider from '@/data/DataProvider';

import ArrowLink from '@/components/_base/ArrowLink';
import TechnologiesChips from '@/components/TechnologiesChips';
import Section from '@/containers/Section';
import { RESUME_PATH } from '@/utils/env';

export default function ExperienceCard() {
  const data = new DataProvider();
  return (
    <Section
      elevated={false}
      title='Experience'
      indentation={true}
      className=' bg-b-light mb-0 mt-10 pb-0'
    >
      {data.experiences.map((exp) => (
        <div
          key={exp.company.name}
          data-te-ripple-init
          className='bg-b-dark dark mt-4 flex w-full flex-col place-items-start rounded-xl px-8 py-8  shadow-md shadow-lime-500/5 '
        >
          <div className='flex w-full flex-row  place-items-center  gap-4 '>
            <a
              target='_blank'
              href={exp.company.website}
              className='transition-all  duration-300 hover:scale-125 '
            >
              <img
                alt={exp.title}
                className='h-8 object-contain'
                src={exp.company.logo}
              />
            </a>

            <div>
              <p className='m-0 p-0  text-xs text-white/80   '>
                {exp.start}
                {' - '}
                {exp.end}
              </p>

              <p className='text-md m-0 mt-1 p-0 '>{exp.title}</p>
            </div>
          </div>
          <ul className='mt-2 list-disc pl-5'>
            {exp.achievements.slice(0, 4).map((x) => (
              <li key={x} className='mt-1 text-xs text-lime-500 md:text-sm'>
                <span className='text-white'> {x}</span>
              </li>
            ))}
            {exp.achievements.length > 4 && (
              <li className='mt-1 text-xs text-lime-500 md:text-sm'>
                <ArrowLink
                  className='mx-0 px-0'
                  title='Read more'
                  href={RESUME_PATH}
                ></ArrowLink>
              </li>
            )}
          </ul>

          <div className='mt-2'>
            <TechnologiesChips technologies={exp.technologies} />
          </div>

          {/* <ArrowLink className='text-sm mt-2' title='learn more' href={'/project/' + project.name} /> */}
        </div>
      ))}
    </Section>
  );
}
