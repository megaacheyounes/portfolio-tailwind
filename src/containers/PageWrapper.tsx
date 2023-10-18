'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React, { Suspense } from 'react';

import PageLoader from '@/components/pageLoader/PageLoader';

type Props = {
  className?: string;
} & React.PropsWithChildren;

export default function PageWrapper(props: Props) {
  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence mode='sync'>
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delayChildren: 1,
            duration: 0.5,
          }}
        >
          {props.children}
        </motion.div>
      </AnimatePresence>
    </Suspense>
  );
}
