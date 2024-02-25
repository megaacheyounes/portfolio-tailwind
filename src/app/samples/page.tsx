'use client';

import PageWrapper from '@/containers/PageWrapper';
import Section from '@/containers/Section';

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <Section
        elevated={true}
        title='Sample projects'
        className='pattern-2 md:mx-15 mx-4 mt-10 sm:mx-8 '
      >
        <h4>coming soon</h4>
      </Section>
    </PageWrapper>
  );
}
