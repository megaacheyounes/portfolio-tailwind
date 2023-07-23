'use client';

import About from '@/container/About';
import Experience from '@/container/Experience';
import Hero from '@/container/Hero';
import Projects from '@/container/Projects';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    // @ts-ignore
    import('preline')
  }, [])

  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Experience />
    </div>
  );
}
