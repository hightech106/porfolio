import type { Metadata } from 'next';
import Link from 'next/link';

import { siteConfig } from '@/lib/site';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
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
                <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li>• Built and maintained production Next.js apps with TypeScript.</li>
                  <li>• Designed data models + API integrations with Postgres.</li>
                  <li>• Hardened security via validation and access controls (including RLS patterns).</li>
                  <li>• Delivered UI improvements focused on conversion + performance.</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-sm font-semibold">What you’ll get from me</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Clean shipping cadence, pragmatic architecture, and a strong bias toward reliability.
                </p>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <h3 className="text-sm font-semibold">Download</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  A placeholder PDF is included by default—replace it with your real resume anytime.
                </p>
                <a
                  href="/resume.pdf"
                  className={buttonClasses({ variant: 'primary', size: 'sm', className: 'mt-4 w-full justify-center' })}
                >
                  Download resume.pdf
                </a>
              </Card>

              <Card>
                <h3 className="text-sm font-semibold">Want a tailored version?</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  I can tailor a resume/portfolio view for a specific role in under an hour.
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