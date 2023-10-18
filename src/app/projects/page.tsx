'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

import DataProvider from '@/data/DataProvider';

import ProtectDetailsCard from '@/components/project/ProjectDetailsCard';
import PageWrapper from '@/containers/PageWrapper';
import Section from '@/containers/Section';

import { Project } from '@/models/project';
import { containerVariants, itemVariants } from '@/utils/animation';

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const data = new DataProvider();
  const projectsByYear = data.projectsByYear;
  const projectsYears = data.projectYears;

  return (
    <PageWrapper>
      <Section
        elevated={true}
        title='projects'
        className='pattern-2 md:mx-15 mx-4 mt-10 sm:mx-8 '
      >
        <div className='mx-auto  '>
          <div className='flex flex-wrap place-items-center justify-center gap-4'>
            <motion.ul
              variants={containerVariants(0.3)}
              initial='hidden'
              animate='show'
            >
              {projectsYears.map((year: number, i: number) => {
                const projects = projectsByYear[year];
                return (
                  <div key={'year_' + i}>
                    <motion.li key={'year_' + i} variants={itemVariants}>
                      <div
                        key={'year_' + i}
                        className='align-center  text-md my-4 flex place-items-center justify-center '
                      >
                        <h6 className='  overflow-clip font-mono  text-lime-500/75'>
                          {'<!'}
                        </h6>
                        <div className='h-0 flex-grow border-b border-dashed  border-lime-500 bg-lime-500/20'></div>
                        <h6 className=' mx-2    text-lime-500/75'>{year}</h6>
                        <div className='h-0 flex-grow border-b border-dashed  border-lime-500 bg-lime-500/20'></div>
                        <h6 className='  font-mono    text-lime-500/75'>
                          {'>'}
                        </h6>
                      </div>
                    </motion.li>
                    {projects.map((project: Project, i: number) => (
                      <motion.li key={project.name + i} variants={itemVariants}>
                        <ProtectDetailsCard
                          key={project.name + i}
                          isLastItem={false}
                          project={project}
                        />
                      </motion.li>
                    ))}
                  </div>
                );
              })}
              <motion.li variants={itemVariants}>
                <div className='align-center  text-md my-4 flex place-items-center justify-center '>
                  <div className='h-0 flex-grow border-b  border-lime-500 bg-lime-500/20'></div>
                  <h6 className=' mx-2    text-lime-500/75'>
                    {' '}
                    and many more...
                  </h6>
                  <div className='h-0 flex-grow border-b   border-lime-500 bg-lime-500/20'></div>
                </div>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </Section>
    </PageWrapper>
  );
}

/**
 *
 *
 *
 *
 */
