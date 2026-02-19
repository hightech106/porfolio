import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { siteConfig } from '@/lib/site';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.headline}`,
    template: `%s — ${siteConfig.name}`
  },
  description: siteConfig.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.headline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: siteConfig.name }]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.headline}`,
    description: siteConfig.description,
    images: ['/og.png']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900 focus:shadow-soft dark:focus:bg-slate-900 dark:focus:text-slate-100"
          >
            Skip to content
          </a>

          <div className="flex min-h-dvh flex-col">
            <Header />
            <main id="main" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}