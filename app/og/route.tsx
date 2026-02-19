import { ImageResponse } from 'next/og';

import { siteConfig } from '@/lib/site';

export const runtime = 'edge';

export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title')?.trim() || siteConfig.name;
  const subtitle = searchParams.get('subtitle')?.trim() || siteConfig.role;
  const note = searchParams.get('note')?.trim() || `${siteConfig.location}${siteConfig.remoteFriendly ? ' (remote-friendly)' : ''}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          background: 'linear-gradient(135deg, #0f172a 0%, #111827 45%, #0b1220 100%)',
          color: '#ffffff'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              color: 'rgba(255,255,255,0.86)',
              fontSize: 28
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: '#10b981'
              }}
            />
            <span>{subtitle}</span>
          </div>

          <div
            style={{
              fontSize: 72,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              fontWeight: 700
            }}
          >
            {title}
          </div>

          <div style={{ fontSize: 30, color: 'rgba(255,255,255,0.78)', maxWidth: 980 }}>
            {siteConfig.description}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 24,
            color: 'rgba(255,255,255,0.72)'
          }}
        >
          <div>{note}</div>
          <div style={{ opacity: 0.9 }}>{siteConfig.name}</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

