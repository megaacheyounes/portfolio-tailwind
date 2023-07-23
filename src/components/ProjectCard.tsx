/* eslint-disable @next/next/no-img-element */
import { Link, LockIcon } from 'lucide-react';
import * as React from 'react';


import Chip from '@/components/Chip';
import { PROJECTS_HIGHLIGHT } from '@/data/projects';
import Skills from '@/components/Skills';
import { BrandType } from '@/models/project';
import ArrowLink from '@/components/ArrowLink';

type Props = {
  project: typeof PROJECTS_HIGHLIGHT[0]
};

const BrandMapping: { [key in BrandType]: string } = {
  "Huawei": "/brands/huawei.png",
  "Algebratec": "/brands/algebratec.png",
  "Tawasal": "/brands/tawasal.png",
  "Carrefour": "/brands/carrefour.png",
  "Dubai Police": "/brands/dubai-police.png",
  "Reel Cinemas": "/brands/reel-cinemas.png",
  "Dubai Sporrts": "/brands/dubai-sports.jpg",
  "Emirates": "/brands/emirates.png",
  "Steppi": "/brands/steppi.png",
  "Visit Abudhabi": "/brands/visit-abudhabi.png"
}

export default function ProjectCard(props: Props) {
  const skillSize = 30;
  const hover =
    'transition-all duration-200 ease-out hover:scale-105 hover:cursor-pointer ';
  const { project } = props
  const isAndroid = project.type == "mobile"
  const isWeb = project.type == "web"
  const isConfidential = !project.link
  const getDomain = (link: string) => new URL(link).hostname
  const getImage = (brand: BrandType, img?: string) => {
    return BrandMapping[brand] || img
  }
  return (

    <div data-te-ripple-init className='w-80  h-80 flex flex-col place-items-start  bg-gray-900/10 rounded-xl px-6 py-4  '>
      <img alt='huawei' className='h-6 mb-2  object-contain'
        src={getImage(project.client!, project.image)} />
      {/* {isAndroid && <Chip type='android' title='Android' />}
        {isWeb && <Chip type='web' title='Web' />} */}

      <h1 className='mt-1 line-clamp-2 text-sm'>{project.name}</h1>
      {!isConfidential && <a
        href='https://appgallerymea.com'
        className='group mt-2 inline-flex items-center gap-1 text-md font-medium text-blue-500 hover:underline'
      >
        <Link size={15} />
        {getDomain(project.link!)}
      </a>}
      {isConfidential && <a
        href='#'
        className='group mt-2 inline-flex  items-center gap-1 text-sm font-medium text-red-700'
      >
        <LockIcon size={15} />
        confidential
      </a>}

      <p className='mt-2 line-clamp-3 text-sm text-gray-300'>
        {project.description}
      </p>
      <div>
        <Skills skills={project.technologies} />
      </div>
      <div className="flex-1"></div>
      <ArrowLink className='text-xs' title='learn more' href={'/project/' + project.name} />

    </div>
  );
}
