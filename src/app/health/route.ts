import { type NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  /**
   * @note
   * Just for example...
   */
  return NextResponse.json(
    {
      responseDate: new Date().toISOString(),
      requestLanguageId: request.headers.get('language_id'),
    },
    {
      status: 200,
      statusText: 'OK',
      headers: new Headers(request.headers),
    },
  );
}
