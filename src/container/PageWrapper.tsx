'use client';
import PageLoader from '@/components/pageLoader/PageLoader';
import { AnimatePresence, motion } from 'framer-motion';
// import { useRouter } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react';

type Props = {
  className?: string;
} & React.PropsWithChildren;

export default function PageWrapper(props: Props) {
  const [isLoading, setIsLoading] = useState(true);
  // const router = useRouter();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence mode='sync'>
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
        >
          {props.children}
        </motion.div>
      </AnimatePresence>
    </Suspense>
  );
}
