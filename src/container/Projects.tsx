import React from 'react';

import ProjectSwiper from '@/components/ProjectSwiper';
import Section from '@/container/Section';

export default function Projects() {
  return (
    <Section title='projects'>
      <h6>lorem ipsum dolor sit amet.</h6>
      <div className='mt-4 '>
        <ProjectSwiper />
      </div>
    </Section>
  );
}
