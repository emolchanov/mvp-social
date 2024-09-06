import type { Metadata } from 'next';
import type { ResolvedTwitterMetadata } from 'next/dist/lib/metadata/types/twitter-types';

interface GetMetadataParams {
  variant: ResolvedTwitterMetadata['card'];
  title: string;
  description: string;
  image: string;
  pathname: string;
}

const BASE_URL = process.env.DOMAIN ? `https://${process.env.DOMAIN}` : '';

function getImage(params: { title: string; description: string; icon: string }) {
  const timestamp = process.env.RUNTIME_HASH ?? process.env.NEXT_PUBLIC_HASH ?? Date.now();
  return {
    url: `${BASE_URL}/api/og-preview?t=${timestamp}&title=${encodeURIComponent(params.title)}&content=${encodeURIComponent(params.description)}&icon=${encodeURIComponent(params.icon)}`,
    secureUrl: `${BASE_URL}/api/og-preview?t=${timestamp}&title=${encodeURIComponent(params.title)}&content=${encodeURIComponent(params.description)}&icon=${encodeURIComponent(params.icon)}`,
    type: 'image/jpeg',
    width: 843,
    height: 441,
    alt: `${params.title}: ${params.description.slice(0, 25)}`,
  };
}

export function getMetadata(params: GetMetadataParams): Metadata {
  const variant = params.variant ?? 'summary_large_image';
  const title = params.title ?? 'Title';
  const description = params.description ?? 'Description';
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale: 'en',
      type: 'website',
      determiner: 'auto',
      siteName: 'mvp-social',
      url: `${BASE_URL}${params.pathname}`,
      images: getImage({ title, description, icon: params.image }),
    },
    facebook: {
      appId: `${process.env.FB_APP_ID}`,
    },
    twitter:
      variant === 'app'
        ? {
            card: variant,
            app: {
              id: {
                ipad: process.env.APPLE_APP_ID,
                iphone: process.env.APPLE_APP_ID,
                googleplay: process.env.GOOGLE_APP_ID,
              },
              url: {
                ipad: `${process.env.APPLE_APP_URL}?platform=ipad`,
                iphone: `${process.env.APPLE_APP_URL}?platform=iphone`,
                googleplay: process.env.GOOGLE_APP_URL,
              },
            },
          }
        : {
            card: variant,
            title,
            description,
            site: '@jackxsim',
            creator: '@jackxsim',
            images: getImage({ title, description, icon: params.image }),
          },
  };
}
