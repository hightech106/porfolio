import type { Metadata } from 'next';

import { projects } from '@/data/projects';
import { siteConfig } from '@/lib/site';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { ProjectsGrid } from '@/components/projects-grid';

export const metadata: Metadata = {
  title: 'Projects',
  description: `Selected work by ${siteConfig.name}.`
};

export default function ProjectsPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <Section
          title="Projects"
          description="Case studies with real constraints, decisions, and outcomes."
        >
          <ProjectsGrid projects={projects} />
        </Section>
      </Container>
    </div>
  );
}