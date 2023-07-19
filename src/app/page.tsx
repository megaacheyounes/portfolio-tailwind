'use client';

import About from '@/container/About';
import Experience from '@/container/Experience';
import Hero from '@/container/Hero';
import Projects from '@/container/Projects';

export default function HomePage() {
  return (
    <div>
      <Hero />
      {/* <About /> */}
      {/* <Projects /> */}
      <Experience />
    </div>
  );
}
