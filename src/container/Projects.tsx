import React from 'react';

import ProjectSwiper from '@/components/ProjectSwiper';
import Section from '@/container/Section';
import ArrowLink from '@/components/ArrowLink';
import ProjectFeatured from '@/components/ProjectFeatured';

type Props = {
  full?: boolean
}

export default function Projects(props: Props) {
  const { full } = props


  return (
    <Section indentation={false} elevated={false} title='projects' className="bg-b-light pb-10   pt-24  px-0  ">
      <h6 className="text-md text-white" >Some of my notable work</h6>
      <ArrowLink className='text-md pl-0 ml-0 mt-4' title={"View all projects"} href="/projects" />
      <div className='my-8 '>
        <ProjectFeatured />
      </div>
      <ArrowLink className='text-md pl-0 ml-0  ' title={"View all projects"} href="/projects" />
    </Section>
  );
}
