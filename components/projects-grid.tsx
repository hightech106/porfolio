'use client';

import * as React from 'react';
import Link from 'next/link';

import type { Project } from '@/data/projects';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type Props = {
  projects: Project[];
};

export function ProjectsGrid({ projects }: Props) {
  const allTech = React.useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tech.forEach((t) => set.add(t)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [projects]);

  const [query, setQuery] = React.useState('');
  const [tech, setTech] = React.useState<string>('All');

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects
      .filter((p) => (tech === 'All' ? true : p.tech.includes(tech)))
      .filter((p) => {
        if (!q) return true;
        const hay = `${p.title} ${p.description} ${p.role} ${p.tech.join(' ')}`.toLowerCase();
        return hay.includes(q);
      });
  }, [projects, query, tech]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="text-sm">
            <span className="sr-only">Search projects</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects..."
              className={cn(
                'h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm shadow-sm sm:w-72',
                'placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20',
                'dark:border-slate-800 dark:bg-slate-950 dark:focus-visible:ring-white/20'
              )}
            />
          </label>

          <label className="text-sm">
            <span className="sr-only">Filter by tech</span>
            <select
              value={tech}
              onChange={(e) => setTech(e.target.value)}
              className={cn(
                'h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm shadow-sm sm:w-56',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20',
                'dark:border-slate-800 dark:bg-slate-950 dark:focus-visible:ring-white/20'
              )}
            >
              <option>All</option>
              {allTech.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          Showing {filtered.length} of {projects.length}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <Card key={p.slug} className="flex flex-col">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold tracking-tight">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="hover:underline underline-offset-4"
                  >
                    {p.title}
                  </Link>
                </h3>
                <span className="shrink-0 text-xs text-slate-500 dark:text-slate-400">
                  {p.dates}
                </span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300">{p.description}</p>

              <div className="flex flex-wrap gap-2">
                {p.tech.slice(0, 6).map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <Link
                href={`/projects/${p.slug}`}
                className="text-sm font-medium underline underline-offset-4 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                Open →
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}