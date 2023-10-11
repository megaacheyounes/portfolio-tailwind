/* eslint-disable @next/next/no-img-element */
import { EraserIcon, LockIcon } from 'lucide-react';

import TechnologiesChips from '@/components/TechnologiesChips';
import { PROJECTS_HIGHLIGHT } from '@/data/projects';
import { BrandType } from '@/models/Brand';
import { HiOutlineExternalLink } from 'react-icons/hi';

type Props = {
  project: (typeof PROJECTS_HIGHLIGHT)[0];
  isLastItem: boolean;
};

const BrandMapping: { [key in BrandType]: string } = {
  Huawei: '/brands/huawei.png',
  Algebratec: '/brands/algebratec.png',
  Tawasal: '/brands/tawasal.png',
  Carrefour: '/brands/carrefour.png',
  'Dubai Police': '/brands/dubai-police.png',
  'Reel Cinemas': '/brands/reel-cinemas.png',
  'Dubai Sports': '/brands/dubai-sports.jpg',
  Emirates: '/brands/emirates.png',
  Steppi: '/brands/steppi.png',
  'Visit Abudhabi': '/brands/visit-abudhabi.png',
};

export default function ProjectDetailsCard(props: Props) {
  const { project } = props;

  const isDiscontinued = !!project.discontinued;
  const isConfidential = !isDiscontinued && !project.link;

  const getDomain = (link: string) => new URL(link).hostname;
  const getImage = (brand: BrandType, img?: string) => {
    return BrandMapping[brand] || img;
  };

  return (
    <div
      data-te-ripple-init
      className={
        'dark     flex w-full flex-col place-items-start  rounded-xl py-4   '
      }
    >
      <div className='flex w-full flex-row  place-items-center  gap-4 '>
        <img
          alt={project.name}
          className='h-8  object-contain'
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
            className='group   inline-flex items-center gap-1 text-sm font-medium text-blue-500 hover:underline'
          >
            <span className='hidden sm:inline-flex'>
              {getDomain(project.link!)}
              <HiOutlineExternalLink size={16} className='ml-1 inline-flex' />
            </span>
            <HiOutlineExternalLink size={24} className='sm:hidden' />
          </a>
        )}
        {isConfidential && (
          <p className='group    inline-flex  place-items-center items-center gap-1 text-sm font-medium text-red-700'>
            <span className='hidden sm:inline-flex'>
              confidential
              <LockIcon size={14} className='ml-1 inline-flex' />
            </span>
            <LockIcon size={20} className='sm:hidden' />
          </p>
        )}
        {isDiscontinued && (
          <p className='group    inline-flex  place-items-center items-center gap-1 text-sm font-medium text-gray-400'>
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
        className='mt-2   text-xs text-gray-300 md:text-sm'
      ></p>
      <div>
        <TechnologiesChips technologies={project.technologies} />
      </div>
      {/* <ArrowLink className='text-sm mt-2' title='learn more' href={'/project/' + project.name} /> */}
    </div>
  );
}
