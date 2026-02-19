'use client';

import * as React from 'react';
import { buttonClasses } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ApiError = {
  ok: false;
  error?: string;
  errors?: Record<string, string>;
};

type ApiSuccess = { ok: true };

export function ContactForm() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const [submitting, setSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState<string | null>(null);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [generalError, setGeneralError] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(null);
    setGeneralError(null);
    setErrors({});

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });

      const data = (await res.json()) as ApiSuccess | ApiError;

      if (!res.ok || !data.ok) {
        const apiErr = data as ApiError;
        setGeneralError(apiErr.error ?? 'Please check the form and try again.');
        setErrors(apiErr.errors ?? {});
        return;
      }

      setSuccess('Thanks — your message was received.');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setGeneralError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    'mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm ' +
    'placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 ' +
    'dark:border-slate-800 dark:bg-slate-950 dark:focus-visible:ring-white/20';

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm">
          Name
          <input
            className={cn(inputClass, errors.name ? 'border-rose-500 dark:border-rose-500' : '')}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name ? <p className="mt-1 text-xs text-rose-600">{errors.name}</p> : null}
        </label>

        <label className="text-sm">
          Email
          <input
            className={cn(inputClass, errors.email ? 'border-rose-500 dark:border-rose-500' : '')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            inputMode="email"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? <p className="mt-1 text-xs text-rose-600">{errors.email}</p> : null}
        </label>
      </div>

      <label className="text-sm block">
        Message
        <textarea
          className={cn(
            inputClass,
            'min-h-[140px]',
            errors.message ? 'border-rose-500 dark:border-rose-500' : ''
          )}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me what you’re building (scope, timeline, links)..."
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? <p className="mt-1 text-xs text-rose-600">{errors.message}</p> : null}
      </label>

      {generalError ? (
        <p className="text-sm text-rose-600" role="alert">
          {generalError}
        </p>
      ) : null}

      {success ? (
        <p className="text-sm text-emerald-600" aria-live="polite">
          {success}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className={buttonClasses({ variant: 'primary', className: 'w-full justify-center sm:w-auto' })}
      >
        {submitting ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}