function getSiteUrl() {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL ?? '').trim();
  const fallback = 'https://example.com';
  if (!raw) return fallback;

  try {
    return new URL(raw).toString().replace(/\/$/, '');
  } catch {
    try {
      return new URL(`https://${raw}`).toString().replace(/\/$/, '');
    } catch {
      return fallback;
    }
  }
}

export const siteConfig = {
  name: 'Taku Yamamoto',
  nameJa: '山本 拓',
  role: 'Full-stack / AI Engineer',
  location: 'Osaka, Japan',
  remoteFriendly: true,
  shortTag: 'Full-stack / AI Engineer',
  headline: 'Full-stack / AI Engineer focused on complex UI, performance, and practical GenAI',
  description:
    'I build production web apps with TypeScript/Next.js—from UI and data flows to performance and GenAI (RAG / Generative UI).',
  url: getSiteUrl(),
  links: {
    email: 'yamamototaku96@outlook.com',
    github: 'https://github.com/hightech106',
    linkedin: ''
  }
} as const;

export function hasLink(value: string | undefined | null) {
  return Boolean(value && value.trim().length > 0);
}