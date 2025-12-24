/* eslint-disable @next/next/no-img-element */
import { Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

import { FEATURED_PROJECTS } from '@/data/projects';

import { BrandType } from '@/models/Brand';
import { getDomain } from '@/utils/utils';

type Props = {
  project: (typeof FEATURED_PROJECTS)[0];
};

const BrandMapping: { [key in BrandType]: string | undefined } = {
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
  Approcks: undefined,
  USeePay: undefined,
  Anghami: '/brands/anghami.png',
  'Islamic Affairs and Charitable Activities Department': undefined,
  ADCB: undefined,
  MegTech: undefined,
  'Road and Transport Authority': undefined,
  'Dasman Diabetes Institute': undefined,
};

export default function FeaturedProjectCard(props: Props) {
  const { project } = props;
  const isConfidential = !project.link;

  const getImage = (brand?: BrandType, img?: string) => {
    return (brand && BrandMapping[brand]) || img;
  };

  return (
    <Link
      href={project.link || '#'}
      target="_blank"
      className="group relative block h-full w-full"
    >
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-lg border border-gray-700 bg-gray-dark p-6 transition-all duration-300 ease-out group-hover:border-primary-500">
        <div className="flex items-center gap-4">
          <img
            alt={project.client || project.name}
            className="h-8 w-8 rounded-full object-contain"
            src={getImage(project.client, project.image)}
          />
          <h3 className="text-lg font-semibold text-white">{project.name}</h3>
        </div>
        <p className="mt-4 text-sm text-gray-300">{project.description}</p>
        {!isConfidential && (
          <div className="mt-4 flex items-center gap-1 text-sm text-blue-400">
            <LinkIcon size={14} />
            <span>{getDomain(project.link)}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
