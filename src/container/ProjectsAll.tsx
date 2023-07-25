import React from 'react';

import ProjectSwiper from '@/components/ProjectSwiper';
import Section from '@/container/Section';
import ArrowLink from '@/components/ArrowLink';
import ProjectFeatured from '@/components/ProjectFeatured';
import ProjectCard2 from '@/components/ProjectCard2';
import { APPS, PROJECTS_HIGHLIGHT, WEBSITES } from '@/data/projects';
import ProjectCard3 from '@/components/ProjectCard3';

type Props = {
  full?: boolean
}

export default function ProjectsAll(props: Props) {
  const { full } = props
  return (
    <Section elevated={true} title='projects' className="pattern-2 ">
      <h6 className="text-md text-white" >Some of my notable work</h6>

      <div className='my-4  mx-auto'>
        <div className="flex flex-wrap gap-4   place-items-center justify-center">
          {WEBSITES.map((project) => (

            <ProjectCard3 key={project.name} project={project} />

          ))}
          {APPS.map((project) => (

            <ProjectCard3 key={project.name} project={project} />

          ))}
        </div>

      </div>

    </Section>
  );
}
