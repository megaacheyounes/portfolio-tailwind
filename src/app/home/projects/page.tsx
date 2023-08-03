'use client';

import ProjectCard3 from '@/components/ProjectCard3';
import PageWrapper from '@/container/PageWrapper';
import Section from '@/container/Section';
import DataProvider from '@/data/DataProvider';
import { containerVariants, itemVariants } from '@/lib/animation';
import { Project } from '@/models/project';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
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
              variants={containerVariants}
              initial='hidden'
              animate='show'
            >
              {projectsYears.map((year: number) => {
                const projects = projectsByYear[year as any];
                return (
                  <>
                    <motion.li key={'year_' + year} variants={itemVariants}>
                      <div className='align-center  text-md my-4 flex place-items-center justify-center '>
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
                    {projects.map((project: Project) => (
                      <motion.li key={project.name} variants={itemVariants}>
                        <ProjectCard3 isLastItem={false} project={project} />
                      </motion.li>
                    ))}
                  </>
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
