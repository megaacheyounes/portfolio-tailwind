import React from 'react';

import ProjectSwiper from '@/components/ProjectSwiper';
import Section from '@/container/Section';
import ArrowLink from '@/components/ArrowLink';
import ProjectBlocks2 from '@/components/ProjectCards';

export default function Projects() {
  return (
    <Section title='projects' className="bg-b-light pattern-2 ">
      <h6 className="text-md text-white" >Some of my notable work</h6>
      <ArrowLink className='text-md pl-0 ml-0 mt-4' title={"View all projects"} href="/projects" />
      <div className='my-8 '>
        <ProjectBlocks2 />
      </div>
      <ArrowLink className='text-md pl-0 ml-0  ' title={"View all projects"} href="/projects" />
    </Section>
  );
}
