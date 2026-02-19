import * as React from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md';

export function buttonClasses(opts?: {
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  const variant = opts?.variant ?? 'primary';
  const size = opts?.size ?? 'md';

  const base =
    'inline-flex items-center gap-2 rounded-lg font-medium shadow-sm transition-colors ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 ' +
    'disabled:pointer-events-none disabled:opacity-60 dark:focus-visible:ring-white/20';

  const variants: Record<Variant, string> = {
    primary:
      'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200',
    secondary:
      'border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900',
    ghost:
      'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900'
  };

  const sizes: Record<Size, string> = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 text-sm'
  };

  return cn(base, variants[variant], sizes[size], opts?.className);
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant, size, className, ...props },
  ref
) {
  return (
    <button ref={ref} className={buttonClasses({ variant, size, className })} {...props} />
  );
});