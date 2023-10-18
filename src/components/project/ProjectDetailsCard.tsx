/* eslint-disable @next/next/no-img-element */
import { EraserIcon, LockIcon } from 'lucide-react';
import { HiOutlineExternalLink } from 'react-icons/hi';

import { FEATURED_PROJECTS } from '@/data/projects';

import TechnologiesChips from '@/components/TechnologiesChips';

type Props = {
  project: (typeof FEATURED_PROJECTS)[0];
  isLastItem: boolean;
};

export default function ProjectDetailsCard(props: Props) {
  const { project } = props;

  const isDiscontinued = !!project.discontinued;
  const isConfidential = !isDiscontinued && !project.link;

  const getDomain = (link?: string) => (link && new URL(link).hostname) || '';

  return (
    <div
      data-te-ripple-init
      className='dark flex w-full flex-col place-items-start  rounded-xl py-4'
    >
      <div className='flex w-full flex-row  place-items-center  gap-4 '>
        <img
          alt={project.name}
          className='h-8 object-contain'
          src={project.image}
        />
        {/* {isAndroid && <Chip type='android' title='Android' />}
        {isWeb && <Chip type='web' title='Web' />} */}
        <div className='flex flex-1 flex-col'>
          <h1 className='m-0 p-0 text-xs sm:text-sm '>{project.name}</h1>
        </div>
        {!isDiscontinued && !isConfidential && (
          <a
            href={project.link}
            target='_blank'
            className='group inline-flex items-center gap-1 text-sm font-medium text-blue-500 hover:underline'
          >
            <span className='hidden sm:inline-flex'>
              {getDomain(project.link)}
              <HiOutlineExternalLink size={16} className='ml-1 inline-flex' />
            </span>
            <HiOutlineExternalLink size={24} className='sm:hidden' />
          </a>
        )}
        {isConfidential && (
          <p className='group inline-flex  place-items-center items-center gap-1 text-sm font-medium text-red-700'>
            <span className='hidden sm:inline-flex'>
              confidential
              <LockIcon size={14} className='ml-1 inline-flex' />
            </span>
            <LockIcon size={20} className='sm:hidden' />
          </p>
        )}
        {isDiscontinued && (
          <p className='group inline-flex  place-items-center items-center gap-1 text-sm font-medium text-gray-400'>
            <span className='hidden sm:inline-flex'>
              discontinued
              <EraserIcon size={14} className='ml-1 inline-flex' />
            </span>
            <EraserIcon size={20} className='sm:hidden' />
          </p>
        )}
      </div>
      <p
        dangerouslySetInnerHTML={{ __html: project.description }}
        className='mt-2 text-xs text-gray-300 md:text-sm'
      ></p>
      <div>
        <TechnologiesChips technologies={project.technologies} />
      </div>
      {/* <ArrowLink className='text-sm mt-2' title='learn more' href={'/project/' + project.name} /> */}
    </div>
  );
}
