import DataProvider from '@/data/DataProvider';

import Section from '@/containers/Section';

export default function Experience() {
  const data = new DataProvider();
  return (
    <Section
      elevated={false}
      title='Experience'
      indentation={true}
      className='bg-dark mb-0 mt-10 pb-0'
    >
      <div className="relative border-l border-gray-700">
        {data.experiences.map((exp, index) => (
          <div key={exp.company.name} className="mb-10 ml-4">
            <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-primary-500"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">
              {exp.start} - {exp.end}
            </time>
            <h3 className="text-lg font-semibold text-white">
              {exp.title} at{' '}
              <a
                href={exp.company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:underline"
              >
                {exp.company.name}
              </a>
            </h3>
            <ul className="mb-4 list-disc pl-5 text-base font-normal text-gray-300">
              {exp.achievements.map((achievement) => (
                <li key={achievement} className="mt-1">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
