import { Variants } from 'framer-motion';

export const containerVariants = (delay: number) => ({
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: delay,
      staggerChildren: 0.1,
    },
  },
});
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      mass: 0.3,
    },
  },
};
