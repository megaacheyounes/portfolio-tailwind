/* eslint-disable @next/next/no-img-element */
// Import Swiper React components
// Import Swiper styles
import 'swiper/css';

import ProjectCardFeatured from '@/components/ProjectCardFeatured';
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
      <div className=' grid   grid-cols-1 place-items-center content-stretch justify-center gap-6 lg:grid-cols-2'>
        {PROJECTS_HIGHLIGHT.map((project) => (
          <ProjectCardFeatured key={project.name} project={project} />
        ))}
      </div>
    </motion.div>
  );
}
