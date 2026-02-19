import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { projects } from '@/data/projects';
import { siteConfig } from '@/lib/site';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { buttonClasses } from '@/components/ui/button';

type Props = { params: { slug: string } };

function getProject(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: 'Project not found' };

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${siteConfig.name}`,
      description: project.description,
      url: `${siteConfig.url}/projects/${project.slug}`,
      images: [
        {
          url: `/og?title=${encodeURIComponent(project.title)}`,
          width: 1200,
          height: 630,
          alt: project.title
        }
      ]
    }
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <div className="mb-6">
          <Link href="/projects" className={buttonClasses({ variant: 'ghost', size: 'sm' })}>
            ← Back to projects
          </Link>
        </div>

        <Section title={project.title} description={project.description}>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <h3 className="text-sm font-semibold">Role</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.role}</p>

                <h3 className="mt-6 text-sm font-semibold">Highlights</h3>
                <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {project.highlights.map((h) => (
                    <li key={h}>• {h}</li>
                  ))}
                </ul>
              </Card>

              {project.sections?.map((s) => (
                <Card key={s.title}>
                  <h3 className="text-sm font-semibold">{s.title}</h3>
                  {'body' in s ? (
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{s.body}</p>
                  ) : (
                    <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {s.bullets.map((b) => (
                        <li key={b}>• {b}</li>
                      ))}
                    </ul>
                  )}
                </Card>
              ))}

              {project.reflection ? (
                <Card>
                  <h3 className="text-sm font-semibold">Notes</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {project.reflection}
                  </p>
                </Card>
              ) : null}
            </div>

            <div className="space-y-6">
              <Card>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-semibold">Details</h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{project.dates}</span>
                </div>

                {project.company ? (
                  <div className="mt-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Company
                    </h4>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      {project.company}
                    </p>
                  </div>
                ) : null}

                <div className="mt-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Tech
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  {project.links.live ? (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className={buttonClasses({ variant: 'primary', size: 'sm', className: 'w-full justify-center' })}
                    >
                      Visit site
                    </a>
                  ) : null}

                  {project.links.github ? (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className={buttonClasses({ variant: 'secondary', size: 'sm', className: 'w-full justify-center' })}
                    >
                      GitHub
                    </a>
                  ) : null}
                </div>
              </Card>

              <Card>
                <h3 className="text-sm font-semibold">Want something similar?</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  If you’re building a product that needs complex UI, performance work, or GenAI features, feel free to reach out.
                </p>
                <Link
                  href="/contact"
                  className={buttonClasses({ variant: 'secondary', size: 'sm', className: 'mt-4 w-full justify-center' })}
                >
                  Contact
                </Link>
              </Card>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  );
}