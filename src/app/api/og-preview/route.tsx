/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';
export const contentType = 'image/png';

export async function GET(request: NextRequest) {
  const title = request.nextUrl.searchParams.get('title');
  const content = request.nextUrl.searchParams.get('content');
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          background:
            'url("https://images.unsplash.com/photo-1521706862577-47b053587f91?q=80&w=900&auto=format&fit=cover&blur=80")',
          width: '100%',
          height: '100%',
          padding: 50,
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          color: 'white',
          gap: 40,
        }}
      >
        <img
          src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
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
