/* eslint-disable @next/next/no-img-element */
import { Link } from 'lucide-react';

import { FEATURED_PROJECTS } from '@/data/projects';

import { BrandType } from '@/models/Brand';
import { cn, getDomain } from '@/utils/utils';

type Props = {
  project: (typeof FEATURED_PROJECTS)[0];
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

export default function FeaturedProjectCard(props: Props) {
  const hover =
    'transition-all duration-200 ease-out  hover:-translate-y-2 transition-all duration-300 ease-out hover:cursor-pointer hover:shadow-lg hover:shadow-lime-500/5';
  const { project } = props;
  const isConfidential = !project.link;

  const getImage = (brand?: BrandType, img?: string) => {
    return (brand && BrandMapping[brand]) || img;
  };

  return (
    <a className='h-full' href={project.link} target='_blank'>
      <div
        data-te-ripple-init
        className={cn(
          'bg-b-dark pattern-2 dark  flex  h-full w-full flex-col place-items-start rounded-xl p-6 shadow-md  shadow-lime-500/5 ',
          hover
        )}
      >
        <img
          alt='huawei'
          className='mb-2 h-6 object-contain  sm:h-7'
          src={getImage(project.client, project.image)}
        />
        {/* {isAndroid && <Chip type='android' title='Android' />}
        {isWeb && <Chip type='web' title='Web' />} */}
        <h1 className='sm:text-md mt-1 line-clamp-2 text-sm'>{project.name}</h1>
        {!isConfidential && (
          <span className='group mt-2 inline-flex items-center gap-1 text-sm font-medium text-blue-500 hover:underline'>
            <Link size={10} />
            {getDomain(project.link)}
          </span>
        )}

        <p
          dangerouslySetInnerHTML={{
            __html: project.description,
          }}
          className='mt-2 text-sm text-gray-300'
        ></p>
        {/* <div>
          <Skills skills={project.technologies} />
        </div> */}
        {/* <ArrowLink className='text-sm mt-2' title='learn more' href={'/project/' + project.name} /> */}
      </div>
    </a>
  );
}
