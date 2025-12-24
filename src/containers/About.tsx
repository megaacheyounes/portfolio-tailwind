import Link from 'next/link';

import DataProvider from '@/data/DataProvider';

import { RESUME_PATH } from '@/utils/env';

export default function About() {
  const dataProvider = new DataProvider();
  const about = dataProvider.personalInfo;
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About Me
          </h2>
          <p
            className="mt-6 text-lg leading-8 text-gray-300"
            dangerouslySetInnerHTML={{ __html: about.introduction }}
          ></p>
        </div>
        <div className="mt-10">
          <Link
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-semibold leading-7 text-primary-500"
          >
            View my resume <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
