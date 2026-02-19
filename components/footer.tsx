import { Container } from '@/components/ui/container';
import { hasLink, siteConfig } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex gap-4 text-sm">
            {hasLink(siteConfig.links.github) ? (
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                GitHub
              </a>
            ) : null}
            {hasLink(siteConfig.links.linkedin) ? (
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                LinkedIn
              </a>
            ) : null}
            {hasLink(siteConfig.links.email) ? (
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                Email
              </a>
            ) : null}
          </div>
        </div>
      </Container>
    </footer>
  );
}