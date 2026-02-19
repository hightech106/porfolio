import type { Metadata } from 'next';
import Link from 'next/link';

import { siteConfig } from '@/lib/site';
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
                  I build production web apps with a strong focus on UX, performance, and security.
                  My default is simple: ship incrementally, keep code maintainable, and measure what
                  matters.
                </p>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                  I’m comfortable owning a feature end-to-end—UI, API, data model, and the boring
                  parts like edge cases, validation, and rollout safety.
                </p>
              </Card>

              <Card>
                <h3 className="text-sm font-semibold">How I work</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li>• Start with constraints and user flows, not frameworks.</li>
                  <li>• Prefer boring, proven architecture unless complexity is justified.</li>
                  <li>• Make performance and accessibility part of the baseline.</li>
                  <li>• Write code for the next engineer (often future me).</li>
                </ul>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <h3 className="text-sm font-semibold">Links</h3>
                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonClasses({ variant: 'secondary', size: 'sm', className: 'justify-center' })}
                  >
                    GitHub
                  </a>
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonClasses({ variant: 'secondary', size: 'sm', className: 'justify-center' })}
                  >
                    LinkedIn
                  </a>
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
                  Remote-friendly • async communication • clear documentation
                </p>
              </Card>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  );
}