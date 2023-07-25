/* eslint-disable @next/next/no-img-element */
import { Link, LockIcon } from 'lucide-react';


import ArrowLink from '@/components/ArrowLink';
import Skills from '@/components/Skills';
import { PROJECTS_HIGHLIGHT } from '@/data/projects';
import { BrandType } from '@/models/project';
import { cn } from '@/lib/utils';
import { HiExternalLink, HiOutlineExternalLink } from 'react-icons/Hi';

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

export default function ProjectCard3(props: Props) {
  const skillSize = 30;
  const hover =
    'transition-all duration-200 ease-out  hover:-translate-y-2 transition-all duration-300 ease-out hover:cursor-pointer ';
  const { project } = props
  const isAndroid = project.type == "mobile"
  const isWeb = project.type == "web"
  const isConfidential = !project.link
  const getDomain = (link: string) => new URL(link).hostname
  const getImage = (brand: BrandType, img?: string) => {
    return BrandMapping[brand] || img
  }
  return (

    <div data-te-ripple-init className={cn('w-full     dark flex flex-col place-items-start  rounded-xl py-4   ')}>
      <div className="flex flex-row gap-4  w-full  place-items-center ">

        <img alt='huawei' className='h-8  object-contain'
          src={project.image} />
        {/* {isAndroid && <Chip type='android' title='Android' />}
        {isWeb && <Chip type='web' title='Web' />} */}
        <h1 className='text-xs m-0 p-0 '>{project.name}</h1>
        <div className="flex-1"></div>
        {!isConfidential && <a
          href={project.link}
          target="_blank"
          className='group   inline-flex items-center gap-1 text-sm font-medium text-blue-500 hover:underline'
        >
          <span className='collapse md:visible'>

            {getDomain(project.link!)}
            <HiOutlineExternalLink size={14} className="inline-flex ml-1" /></span>
          <HiOutlineExternalLink size={20} className='md:collapse' />

        </a>}
        {isConfidential && <a
          className='group  inline-flex  items-center gap-1 text-sm font-medium text-red-700'
        >
          <span className='collapse md:visible'>
            confidential<LockIcon size={14} className="inline-flex ml-1" />
          </span>
          <LockIcon size={20} className='md:collapse' />

        </a>}

      </div>

      <p className='mt-2 line-clamp-4 text-sm text-gray-300'>
        {project.description}
      </p>
      <div>
        <Skills skills={project.technologies} />
      </div>

      {/* <ArrowLink className='text-sm mt-2' title='learn more' href={'/project/' + project.name} /> */}

    </div>
  );
}
