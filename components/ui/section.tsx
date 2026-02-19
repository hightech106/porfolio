import * as React from 'react';
import { cn } from '@/lib/utils';

export function Section({
  title,
  description,
  children,
  className
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn('space-y-4', className)}>
      <header className="space-y-2">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
        {description ? (
          <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p>
        ) : null}
      </header>
      {children}
    </section>
  );
}