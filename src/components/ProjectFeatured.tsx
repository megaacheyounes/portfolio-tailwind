/* eslint-disable @next/next/no-img-element */
// Import Swiper React components
// Import Swiper styles
import 'swiper/css';

import ProjectCard from '@/components/ProjectCard';
import { PROJECTS_HIGHLIGHT } from '@/data/projects';
import ProjectCard2 from '@/components/ProjectCard2';
type Props = any;

export default function ProjectFeatured(props: Props) {

  return (
    <div className="my-2 mx-auto">
      <div className="flex flex-wrap gap-6   place-items-center justify-center">

        {PROJECTS_HIGHLIGHT.map((project) => (

          <ProjectCard2 project={project} />

        ))}
      </div>

    </div>
  );
}
