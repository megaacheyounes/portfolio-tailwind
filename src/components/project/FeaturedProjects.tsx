import { motion } from 'framer-motion';

import { FEATURED_PROJECTS } from '@/data/projects';

import ProjectCardFeatured from '@/components/project/FeaturedProjectCard';

export default function FeaturedProjects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='mx-auto my-2'
      transition={{ delay: 1 }}
    >
      <div className='grid grid-cols-1 place-items-center content-stretch justify-center gap-6 lg:grid-cols-2'>
        {FEATURED_PROJECTS.map((project) => (
          <ProjectCardFeatured key={project.name} project={project} />
        ))}
      </div>
    </motion.div>
  );
}
