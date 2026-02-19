import type { Metadata } from 'next';
import Link from 'next/link';

import { hasLink, siteConfig } from '@/lib/site';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { buttonClasses } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About',
  description: `About ${siteConfig.name}.`
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <Section
          title="About"
          description="Short, human, and focused: how I work and what you can expect."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  I’m based in {siteConfig.location} (remote-friendly) and build production web apps
                  end-to-end. I grew up in Osaka, studied Computer Science at HKUST in Hong Kong,
                  and have been shipping web products since.
                </p>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                  I tend to do best in projects with complex UI, performance constraints, and “real”
                  product requirements—plus practical GenAI work like RAG and Generative UI when it
                  helps users.
                </p>
              </Card>

              <Card>
                <h3 className="text-sm font-semibold">How I work</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li>• Start from requirements + constraints, then decide UI and data shape.</li>
                  <li>• Ship in slices: small releases, clear rollout and fallback paths.</li>
                  <li>• Treat performance, observability, and ops as a baseline—not a phase.</li>
                  <li>• Keep a strong review culture: readable diffs, consistent patterns.</li>
                </ul>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <h3 className="text-sm font-semibold">Links</h3>
                <div className="mt-4 flex flex-col gap-2">
                  {hasLink(siteConfig.links.github) ? (
                    <a
                      href={siteConfig.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className={buttonClasses({
                        variant: 'secondary',
                        size: 'sm',
                        className: 'justify-center'
                      })}
                    >
                      GitHub
                    </a>
                  ) : null}
                  {hasLink(siteConfig.links.linkedin) ? (
                    <a
                      href={siteConfig.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className={buttonClasses({
                        variant: 'secondary',
                        size: 'sm',
                        className: 'justify-center'
                      })}
                    >
                      LinkedIn
                    </a>
                  ) : null}
                  <Link
                    href="/projects"
                    className={buttonClasses({ variant: 'primary', size: 'sm', className: 'justify-center' })}
                  >
                    View projects
                  </Link>
                </div>
              </Card>

              <Card>
                <h3 className="text-sm font-semibold">Based in</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {siteConfig.location} • remote-friendly • clear documentation
                </p>
              </Card>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  );
}