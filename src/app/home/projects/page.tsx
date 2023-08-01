'use client';

import ProjectCard3 from '@/components/ProjectCard3';
import PageWrapper from '@/container/PageWrapper';
import Section from '@/container/Section';
import { APPS, WEBSITES } from '@/data/projects';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  const items = [...WEBSITES, ...APPS];

  return (
    <PageWrapper>
      <Section
        elevated={true}
        title='projects'
        className='pattern-2 md:mx-15 mx-4 mt-10 sm:mx-8 '
      >
        <h6 className='text-md text-white'>Some of my notable work</h6>

        <div className='mx-auto  my-4'>
          <div className='flex flex-wrap place-items-center   justify-center gap-4'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.2,
              }}
            >
              {items.map((project, index) => {
                const lastItem = index == items.length - 1;
                return (
                  <ProjectCard3
                    isLastItem={lastItem}
                    key={project.name}
                    project={project}
                  />
                );
              })}
            </motion.div>
          </div>
        </div>
      </Section>
    </PageWrapper>
  );
}
