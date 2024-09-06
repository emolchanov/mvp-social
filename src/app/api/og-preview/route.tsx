/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const title = request.nextUrl.searchParams.get('title');
  const content = request.nextUrl.searchParams.get('content');
  const iconUrl = request.nextUrl.searchParams.get('icon') ?? '#';
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          color: 'white',
          gap: 40,
        }}
      >
        <div style={{ display: 'flex', position: 'absolute', filter: 'blur(20px)', width: '100%', height: '100%' }}>
          <div
            style={{
              display: 'flex',
              background: `url(${iconUrl}) no-repeat center`,
              width: '100%',
              height: '100%',
            }}
          />
        </div>
        <img
          src={iconUrl}
          style={{
            width: 200,
            height: 200,
            objectFit: 'cover',
            border: '5px solid #033913',
            borderRadius: 10,
            boxSizing: 'border-box',
          }}
          alt=""
        />
        <div
          style={{
            display: 'flex',
            textAlign: 'start',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'column',
            gap: 10,
            width: 300,
          }}
        >
          <div style={{ fontSize: 40, textAlign: 'start' }}>{title ?? 'Lizard'}</div>
          <div>
            {content ??
              `Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
            except Antarctica`}
          </div>
        </div>
      </div>
    ),
    {
      width: 843,
      height: 441,
      debug: false,
    },
  );
}
