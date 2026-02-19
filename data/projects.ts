export type ProjectSection =
  | { title: string; body: string; bullets?: never }
  | { title: string; body?: never; bullets: string[] };

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
  company?: string;
  sections?: ProjectSection[];
  reflection?: string;
  thumbnail?: string;
};

export const projects: Project[] = [
  {
    slug: 'generative-ui-rag',
    title: 'Generative UI + RAG (Azure OpenAI)',
    description:
      'Built user-facing Generative UI backed by Azure OpenAI + RAG, designed for real workflows and safe responses.',
    role: 'Full-stack / AI: product-facing UI, retrieval pipeline, and integration work.',
    company: 'Headwaters',
    tech: ['TypeScript', 'Next.js', 'Azure OpenAI', 'RAG', 'Generative UI'],
    highlights: [
      'Integrated Azure OpenAI (e.g., GPT-4o mini) into product workflows.',
      'Implemented RAG to ground answers in internal knowledge.',
      'Worked on SyncLect Generative AI integration and Mobile App Copilot support.'
    ],
    sections: [
      {
        title: 'Context',
        body: 'Users needed fast answers and actions inside the product UI, without losing trust or safety.'
      },
      {
        title: 'What I did',
        bullets: [
          'Designed a Generative UI flow where output is structured and actionable (not just chat).',
          'Built retrieval + prompt patterns for grounded responses (RAG).',
          'Integrated with existing systems (including SyncLect Generative AI) and supported Mobile App Copilot use cases.'
        ]
      },
      {
        title: 'Impact',
        bullets: [
          'Enabled product teams to ship GenAI features with a clearer UX contract.',
          'Improved reliability by grounding outputs in curated knowledge and applying guardrails.'
        ]
      }
    ],
    reflection:
      'GenAI features land best when the UI makes the “contract” explicit: what the model can do, what it cannot, and how users can verify outputs.',
    links: {},
    dates: '2025/02 – 2026/01',
    featured: true
  },
  {
    slug: 'backofficeforce',
    title: 'BackofficeForce (business ops SaaS)',
    description:
      'Contributed to a business operations SaaS with a Next.js (App Router) codebase and a TypeScript monorepo workflow.',
    role: 'Web app development across UI and data fetching patterns in a monorepo setup.',
    company: 'FLAT',
    tech: ['TypeScript', 'Next.js (App Router)', 'Chakra UI', 'TanStack Query', 'pnpm', 'Turborepo'],
    highlights: [
      'Worked in a TypeScript monorepo (pnpm workspace + turborepo).',
      'Built/maintained UI with Chakra UI and data fetching with TanStack Query.',
      'Supported iterative delivery without breaking shared packages.'
    ],
    sections: [
      {
        title: 'Context',
        body: 'A backoffice product with multiple domains required consistent UI and stable data flows across teams.'
      },
      {
        title: 'What I did',
        bullets: [
          'Implemented features on Next.js App Router with TypeScript.',
          'Maintained shared UI/data patterns in a monorepo (packages + apps).',
          'Improved developer experience by keeping changes small and reviewable.'
        ]
      },
      {
        title: 'Impact',
        bullets: [
          'Helped keep delivery cadence stable while the codebase scaled.',
          'Reduced UI drift by sticking to shared primitives and predictable query patterns.'
        ]
      }
    ],
    links: { live: 'https://backofficeforce.jp/backofficeforce/' },
    dates: '2023/03 – 2025/01',
    featured: true
  },
  {
    slug: 'igaming-platform-drifbet',
    title: 'iGaming platform (drifbet)',
    description:
      'Built and optimized an iGaming platform with a focus on throughput, latency, and transaction safety.',
    role: 'Full-stack / AI: feature delivery, performance work, and data/transaction improvements.',
    company: 'GrowHub',
    tech: ['TypeScript', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Web3'],
    highlights: [
      'Shortened feature development cycle by 40%.',
      'Kept low latency even with 40% more concurrent connections.',
      'Improved MongoDB aggregation performance by 35% and reduced TX processing time by 25%.'
    ],
    sections: [
      {
        title: 'Context',
        body: 'The product needed faster iteration while maintaining a stable, low-latency experience under growing concurrency.'
      },
      {
        title: 'What I did',
        bullets: [
          'Delivered features while keeping wallet/session flows consistent.',
          'Tuned data paths and aggregation-heavy workloads in MongoDB.',
          'Improved transaction processing paths and reduced manual reporting work.'
        ]
      },
      {
        title: 'Impact',
        bullets: [
          'Feature development cycle shortened by 40%.',
          'Low latency maintained with +40% concurrent connections.',
          'MongoDB aggregation performance improved by 35%.',
          'TX processing time reduced by 25%.',
          'Manual reporting reduced by 40%.'
        ]
      }
    ],
    reflection:
      'Performance work only sticks when you connect it to real user flows and measure the critical paths (not just “faster queries”).',
    links: { live: 'https://drifbet.com/en/' },
    dates: '2020/07 – 2023/01',
    featured: true
  },
  {
    slug: 'comicspace',
    title: 'comicspace (reading log & new release notifications)',
    description:
      'Improved technical SEO and first render for a content-heavy reading log product with SSR and streaming.',
    role: 'Built SSR/SEO improvements and rendering optimizations.',
    company: 'FLAT',
    tech: ['TypeScript', 'Next.js', 'SSR', 'Technical SEO', 'Streaming'],
    highlights: [
      'Automated sitemap generation via SSR.',
      'Implemented URL normalization and duplicate control.',
      'Improved first render with progressive rendering / streaming.'
    ],
    sections: [
      {
        title: 'What I did',
        bullets: [
          'Generated sitemaps automatically (SSR) and kept them in sync with content changes.',
          'Normalized URLs and controlled duplicates to avoid index/crawl issues.',
          'Improved initial render with progressive rendering / streaming patterns.'
        ]
      },
      {
        title: 'Impact',
        bullets: [
          'Improved crawlability through reliable sitemap + canonical URL behavior.',
          'Reduced “feels slow” UI by prioritizing visible content early.'
        ]
      }
    ],
    links: { live: 'https://comicspace.jp/' },
    dates: '2023/03 – 2025/01',
    featured: false
  },
  {
    slug: 'event-management-saas-realtime',
    title: 'Event management SaaS (real-time backoffice)',
    description:
      'Built a real-time backoffice UI using GraphQL subscriptions, including unread aggregation and live updates.',
    role: 'Frontend/Full-stack: GraphQL client integration and real-time UI design.',
    company: 'FLAT',
    tech: ['TypeScript', 'GraphQL', 'Apollo Client', 'Subscriptions', 'AWS AppSync'],
    highlights: [
      'Implemented GraphQL + Subscription based real-time updates.',
      'Built unread total aggregation and display patterns.',
      'Designed UI states for live data (loading/consistency/edge cases).'
    ],
    sections: [
      {
        title: 'What I did',
        bullets: [
          'Integrated GraphQL subscriptions (AppSync-style) with Apollo Client.',
          'Implemented unread total aggregation in the UI with consistent update rules.',
          'Designed “real-time UI” states to avoid flicker and confusing transitions.'
        ]
      }
    ],
    links: {},
    dates: '2023/03 – 2025/01',
    featured: false
  },
  {
    slug: 'crazyraccoon-site',
    title: 'Crazy Raccoon official site',
    description:
      'Contributed to development and maintenance of a public-facing website.',
    role: 'Web development support focused on stable delivery.',
    company: 'FLAT',
    tech: ['TypeScript', 'Next.js', 'Frontend'],
    highlights: [
      'Supported stable delivery for a public website.',
      'Worked within existing design constraints and release cadence.'
    ],
    links: { live: 'https://crazyraccoon.jp/' },
    dates: '2023/03 – 2025/01',
    featured: false
  },
  {
    slug: 'web3-game',
    title: 'Web3 game feature development',
    description:
      'Worked on feature development for a Web3 game product (no public URL).',
    role: 'Full-stack feature work across UI and integrations.',
    company: 'FLAT',
    tech: ['TypeScript', 'Web3', 'Frontend', 'Backend'],
    highlights: [
      'Delivered features under product constraints without exposing confidential details.',
      'Kept UX predictable around wallet/transaction-related flows.'
    ],
    links: {},
    dates: '2023/03 – 2025/01',
    featured: false
  }
];