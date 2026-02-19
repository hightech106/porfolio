import type { Metadata } from 'next';
import Link from 'next/link';

import { siteConfig } from '@/lib/site';
import { education, experiences, skills } from '@/data/experience';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { buttonClasses } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Resume',
  description: `Resume and experience for ${siteConfig.name}.`
};

export default function ResumePage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <Section title="Resume" description="A quick snapshot. Download the PDF if you want.">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <h3 className="text-sm font-semibold">Experience</h3>
                <div className="mt-4 space-y-4">
                  {experiences.map((e) => (
                    <div key={`${e.company}-${e.dates}`} className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                        <div className="space-y-1">
                          <div className="text-sm font-semibold">{e.company}</div>
                          <div className="text-sm text-slate-600 dark:text-slate-300">{e.title}</div>
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">{e.dates}</div>
                      </div>

                      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{e.summary}</p>

                      <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                        {e.bullets.map((b) => (
                          <li key={b}>• {b}</li>
                        ))}
                      </ul>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {e.tech.map((t) => (
                          <Badge key={t}>{t}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-sm font-semibold">Skills</h3>
                <div className="mt-4 grid gap-3">
                  {skills.map((s) => (
                    <div key={s.category} className="grid gap-2 sm:grid-cols-[160px_1fr] sm:items-start">
                      <div className="text-sm font-medium text-slate-700 dark:text-slate-200">
                        {s.category}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {s.items.map((i) => (
                          <Badge key={i}>{i}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-sm font-semibold">Education</h3>
                <div className="mt-3 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {education.map((ed) => (
                    <div key={`${ed.school}-${ed.dates}`} className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="font-medium text-slate-700 dark:text-slate-200">{ed.school}</div>
                        <div>{ed.field}</div>
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">{ed.dates}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <h3 className="text-sm font-semibold">Download</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Put your PDFs in <span className="font-medium">/public</span> to enable download.
                  (Replace these files: <span className="font-medium">resume-jp.pdf</span> /{' '}
                  <span className="font-medium">resume-en.pdf</span> /{' '}
                  <span className="font-medium">resume.pdf</span>)
                </p>
                <div className="mt-4 grid gap-2">
                  <a
                    href="/resume-jp.pdf"
                    className={buttonClasses({
                      variant: 'primary',
                      size: 'sm',
                      className: 'w-full justify-center'
                    })}
                  >
                    Download resume (JP)
                  </a>
                  <a
                    href="/resume-en.pdf"
                    className={buttonClasses({
                      variant: 'secondary',
                      size: 'sm',
                      className: 'w-full justify-center'
                    })}
                  >
                    Download resume (EN)
                  </a>
                  <a
                    href="/resume.pdf"
                    className={buttonClasses({
                      variant: 'ghost',
                      size: 'sm',
                      className: 'w-full justify-center'
                    })}
                  >
                    Download resume.pdf
                  </a>
                </div>
              </Card>

              <Card>
                <h3 className="text-sm font-semibold">Contact</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  If you want to discuss a role or project, email is best.
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