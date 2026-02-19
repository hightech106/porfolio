export type Experience = {
  company: string;
  title: string;
  dates: string;
  summary: string;
  bullets: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    company: 'Headwaters (株式会社ヘッドウォータース)',
    title: 'Full-stack / AI Engineer',
    dates: '2025/02 – 2026/01',
    summary: 'Generative UI, Azure OpenAI, and RAG for product-facing workflows.',
    bullets: [
      'Built Generative UI experiences backed by Azure OpenAI (e.g., GPT-4o mini).',
      'Implemented RAG to ground responses in internal knowledge.',
      'Worked on SyncLect Generative AI integration and Mobile App Copilot support.'
    ],
    tech: ['TypeScript', 'Next.js', 'Azure OpenAI', 'RAG', 'Generative UI']
  },
  {
    company: 'FLAT (株式会社FLAT)',
    title: 'Web application engineer',
    dates: '2023/03 – 2025/01',
    summary: 'Web apps across backoffice SaaS, technical SEO, and real-time UI.',
    bullets: [
      'BackofficeForce: Next.js (App Router), Chakra UI, TanStack Query, TypeScript monorepo (pnpm workspace + turborepo).',
      'comicspace: automated sitemap generation (SSR), URL normalization + duplicate control, progressive rendering/streaming for faster first render.',
      'Event management SaaS: GraphQL + Subscriptions (AppSync-style) + Apollo Client, unread aggregation, real-time UI.'
    ],
    tech: [
      'TypeScript',
      'React',
      'Next.js (App Router)',
      'Chakra UI',
      'Tailwind',
      'GraphQL',
      'Apollo Client'
    ]
  },
  {
    company: 'GrowHub',
    title: 'Full-stack / AI engineer',
    dates: '2020/07 – 2023/01',
    summary: 'iGaming platform development with performance and throughput improvements.',
    bullets: [
      'Shortened feature development cycle by 40%.',
      'Maintained low latency even with +40% concurrent connections.',
      'Improved MongoDB aggregation performance by 35%.',
      'Reduced transaction processing time by 25%.',
      'Reduced manual reporting work by 40%.',
      'Worked on wallet/session flows and Web3 deposits/withdrawals.'
    ],
    tech: ['TypeScript', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Web3']
  },
  {
    company: 'TSURUKAME CREATIVE LIMITED',
    title: 'Web development intern',
    dates: '2019/07 – 2020/06',
    summary: 'Internship focused on web development.',
    bullets: ['Supported web development tasks as part of a product team.'],
    tech: ['Web development']
  }
];

export const education = [
  {
    school: 'Hong Kong University of Science and Technology (HKUST)',
    field: 'Computer Science',
    dates: '2015/09 – 2019/06'
  }
] as const;

export const skills = [
  { category: 'Frontend', items: ['TypeScript', 'React', 'Next.js (App Router)', 'Storybook', 'Tailwind', 'Chakra UI'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'GraphQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { category: 'GenAI', items: ['Azure OpenAI', 'RAG', 'Prompting', 'Guardrails'] },
  { category: 'Product', items: ['Performance', 'Technical SEO', 'DX', 'Tech Lead / Review'] }
] as const;

