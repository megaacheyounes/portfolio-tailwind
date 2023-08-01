/* eslint-disable @next/next/no-img-element */
// Import Swiper React components
// Import Swiper styles
import 'swiper/css';

import ProjectCard2 from '@/components/ProjectCard2';
import { PROJECTS_HIGHLIGHT } from '@/data/projects';
type Props = any;

export default function ProjectFeatured(props: Props) {
  return (
    <div className='mx-auto my-2'>
      <div className='flex flex-wrap place-items-center   justify-center gap-6'>
        {PROJECTS_HIGHLIGHT.map((project) => (
          <ProjectCard2 key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
