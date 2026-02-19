import Link from 'next/link';

import { siteConfig } from '@/lib/site';
import { projects } from '@/data/projects';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { buttonClasses } from '@/components/ui/button';

export const metadata = {
  title: 'Home'
};

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
            {siteConfig.location}
            {siteConfig.remoteFriendly ? ' • remote-friendly' : null}
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              {siteConfig.name}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 sm:text-xl">
              {siteConfig.headline}
            </p>
            <p className="max-w-2xl text-slate-600 dark:text-slate-300">
              {siteConfig.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/projects" className={buttonClasses({ variant: 'primary' })}>
              View Projects
            </Link>
            <Link href="/contact" className={buttonClasses({ variant: 'secondary' })}>
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-14 space-y-12">
          <Section title="Featured work" description="A few projects that show how I build in production.">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((p) => (
                <Card key={p.slug} className="flex flex-col">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base font-semibold tracking-tight">
                        <Link
                          href={`/projects/${p.slug}`}
                          className="hover:underline underline-offset-4"
                        >
                          {p.title}
                        </Link>
                      </h3>
                      <span className="shrink-0 text-xs text-slate-500 dark:text-slate-400">
                        {p.dates}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{p.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.slice(0, 4).map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5">
                    <Link
                      href={`/projects/${p.slug}`}
                      className={buttonClasses({ variant: 'ghost', size: 'sm' })}
                    >
                      Read case study →
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </Section>

          <Section title="Skills" description="What I use day-to-day in production.">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: 'Frontend',
                  items: ['TypeScript', 'React', 'Next.js (App Router)', 'Storybook', 'Tailwind / Chakra']
                },
                {
                  title: 'Backend',
                  items: ['Node.js', 'Express', 'GraphQL', 'PostgreSQL / MongoDB', 'Redis']
                },
                {
                  title: 'GenAI',
                  items: ['Azure OpenAI', 'RAG', 'Prompting', 'Guardrails']
                },
                {
                  title: 'Product',
                  items: ['Performance', 'Technical SEO', 'DX', 'Tech Lead / Review']
                }
              ].map((group) => (
                <Card key={group.title}>
                  <h3 className="text-sm font-semibold">{group.title}</h3>
                  <ul className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    {group.items.map((i) => (
                      <li key={i}>• {i}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </Section>

          <Section title="Currently building" description="What I’m focused on lately.">
            <Card>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Shipping complex UI with reliable data flows, pushing performance baselines, and
                  integrating practical GenAI features (RAG / Generative UI) into real workflows.
                </p>
                <Link href="/about" className={buttonClasses({ variant: 'secondary', size: 'sm' })}>
                  About me
                </Link>
              </div>
            </Card>
          </Section>
        </div>
      </Container>
    </div>
  );
}