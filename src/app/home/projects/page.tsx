'use client';

import PageWrapper from '@/container/PageWrapper';
import ProjectsAll from '@/container/ProjectsAll';

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <ProjectsAll full={true} />
    </PageWrapper>
  );
}
