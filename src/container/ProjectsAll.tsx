import ProjectCard3 from '@/components/ProjectCard3';
import Section from '@/container/Section';
import { APPS, WEBSITES } from '@/data/projects';
import { motion } from 'framer-motion';

type Props = {
  full?: boolean;
};

export default function ProjectsAll(props: Props) {
  const { full } = props;

  const items = [...WEBSITES, ...APPS];

  return (
    <Section elevated={true} title='projects' className='pattern-2 mt-10 '>
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
            {items.map((project) => (
              <ProjectCard3 key={project.name} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
