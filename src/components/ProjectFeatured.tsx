/* eslint-disable @next/next/no-img-element */
// Import Swiper React components
// Import Swiper styles
import 'swiper/css';

import ProjectCard2 from '@/components/ProjectCard2';
import { PROJECTS_HIGHLIGHT } from '@/data/projects';
import { motion } from 'framer-motion';
type Props = any;

export default function ProjectFeatured(props: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='mx-auto my-2'
      transition={{ delay: 1 }}
    >
      <div className='flex flex-wrap place-items-center   justify-center gap-6'>
        {PROJECTS_HIGHLIGHT.map((project) => (
          <ProjectCard2 key={project.name} project={project} />
        ))}
      </div>
    </motion.div>
  );
}
