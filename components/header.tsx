import Link from 'next/link';

import { siteConfig } from '@/lib/site';
import { Container } from '@/components/ui/container';
import { ThemeToggle } from '@/components/theme-toggle';
import { MobileNav } from '@/components/mobile-nav';

const links = [
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="font-semibold tracking-tight hover:opacity-90">
              {siteConfig.name}
            </Link>
            <span className="hidden text-xs text-slate-500 dark:text-slate-400 sm:inline">
              {siteConfig.shortTag}
            </span>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}