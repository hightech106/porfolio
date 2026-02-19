import { NextResponse } from 'next/server';

function isValidEmail(email: string) {
  // Simple + practical email validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body' }, { status: 400 });
  }

  const data = body as Partial<{ name: string; email: string; message: string }>;

  const errors: Record<string, string> = {};

  const name = (data.name ?? '').trim();
  const email = (data.email ?? '').trim();
  const message = (data.message ?? '').trim();

  if (name.length < 2) errors.name = 'Please enter your name.';
  if (name.length > 80) errors.name = 'Name is too long.';
  if (!isValidEmail(email)) errors.email = 'Please enter a valid email.';
  if (message.length < 10) errors.message = 'Message should be at least 10 characters.';
  if (message.length > 2000) errors.message = 'Message is too long.';

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  // No email sending by design. This is where you'd forward to email/CRM.
  return NextResponse.json({ ok: true });
}