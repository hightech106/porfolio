import type { Metadata } from 'next';

import { hasLink, siteConfig } from '@/lib/site';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${siteConfig.name}.`
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <Section title="Contact" description="Send a message or reach me directly.">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <ContactForm />
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <h3 className="text-sm font-semibold">Direct</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Email is fastest.
                </p>
                <a
                  className="mt-3 inline-block text-sm font-medium underline underline-offset-4"
                  href={`mailto:${siteConfig.links.email}`}
                >
                  {siteConfig.links.email}
                </a>
              </Card>

              <Card>
                <h3 className="text-sm font-semibold">Social</h3>
                <div className="mt-3 space-y-2 text-sm">
                  {hasLink(siteConfig.links.github) ? (
                    <a
                      href={siteConfig.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="block underline underline-offset-4"
                    >
                      GitHub
                    </a>
                  ) : null}
                  {hasLink(siteConfig.links.linkedin) ? (
                    <a
                      href={siteConfig.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="block underline underline-offset-4"
                    >
                      LinkedIn
                    </a>
                  ) : null}
                </div>
              </Card>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  );
}