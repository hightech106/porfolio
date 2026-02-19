export type Project = {
  slug: string;
  title: string;
  description: string;
  role: string;
  tech: string[];
  highlights: string[];
  links: { live?: string; github?: string };
  dates: string;
  featured: boolean;
  thumbnail?: string;
};

export const projects: Project[] = [
  {
    slug: 'realtime-casino-ui',
    title: 'Real-time Casino Platform UI',
    description:
      'Built a fast, responsive gameplay UI with real-time balance updates and safe transaction flows.',
    role: 'Owned frontend architecture, state flows, and performance tuning; partnered with backend on wallet sync.',
    tech: ['Next.js', 'TypeScript', 'WebSockets', 'Tailwind', 'Postgres'],
    highlights: [
      'Designed UI patterns for wallet/balance synchronization with optimistic UX and safe fallbacks.',
      'Reduced UI latency by cutting unnecessary renders and memoizing heavy components.',
      'Built reusable components and layouts for rapid feature delivery across multiple pages.'
    ],
    links: { live: 'https://example.com' },
    dates: '2025–2026',
    featured: true
  },
  {
    slug: 'supabase-rls-hardening',
    title: 'Marketing CMS with Supabase RLS Hardening',
    description:
      'Audited and hardened a production Supabase + Postgres setup with secure RLS rules and migrations.',
    role: 'Led the RLS audit, wrote production-safe SQL migrations, and ensured public read/admin write access.',
    tech: ['Supabase', 'Postgres', 'RLS', 'SQL', 'Next.js'],
    highlights: [
      'Replaced insecure “USING (true)” policies with explicit public read and admin-only write rules.',
      'Locked down settings/config tables and hardened functions (search_path).',
      'Delivered a clean migration path that avoided breaking a live marketing site.'
    ],
    links: { github: 'https://github.com/example' },
    dates: '2025',
    featured: true
  },
  {
    slug: 'rag-support-assistant',
    title: 'RAG Support Assistant',
    description:
      'A practical AI assistant that answers product questions using curated docs with safe guardrails.',
    role: 'Implemented retrieval pipeline + UX, including citations, feedback loop, and rate limiting.',
    tech: ['TypeScript', 'Next.js', 'RAG', 'Vector DB', 'Edge APIs'],
    highlights: [
      'Built a clean chat UX with streaming responses and clear “source” references.',
      'Added guardrails: input validation, rate limits, and safe fallback responses.',
      'Designed data ingestion to keep updates simple (markdown → embeddings).'
    ],
    links: {},
    dates: '2024–2025',
    featured: true
  },
  {
    slug: 'design-system-starter',
    title: 'Design System Starter',
    description:
      'A minimal design system (buttons/cards/badges/layout) used across multiple internal tools.',
    role: 'Created consistent UI primitives and layout rules to reduce UI drift.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    highlights: [
      'Standardized spacing and typography for a consistent product look.',
      'Improved accessibility with consistent focus styles and keyboard-friendly components.',
      'Reduced UI rebuild time by reusing primitives across projects.'
    ],
    links: {},
    dates: '2024',
    featured: false
  },
  {
    slug: 'seo-performance-refresh',
    title: 'SEO & Performance Refresh',
    description:
      'Improved Core Web Vitals, metadata, and crawlability for a content-heavy site.',
    role: 'Owned performance fixes and SEO metadata across routes, plus image optimization.',
    tech: ['Next.js', 'SEO', 'Performance', 'Lighthouse'],
    highlights: [
      'Added route-level metadata, OpenGraph, and clean sitemap/robots setup.',
      'Cut bundle size by removing unused code paths and reducing client JS.',
      'Improved perceived speed with better loading patterns and image handling.'
    ],
    links: {},
    dates: '2024',
    featured: false
  }
];