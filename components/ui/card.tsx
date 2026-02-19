import * as React from 'react';
import { cn } from '@/lib/utils';

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-slate-200 bg-white p-5 shadow-soft',
        'dark:border-slate-800 dark:bg-slate-950',
        className
      )}
      {...props}
    />
  );
}