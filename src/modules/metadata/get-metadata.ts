import type { Metadata } from 'next';
import type { ResolvedTwitterMetadata } from 'next/dist/lib/metadata/types/twitter-types';

import { generateImage } from './generate-image';
import { getBaseUrl } from './get-base-url';

interface GetMetadataParams {
  variant: ResolvedTwitterMetadata['card'];
  title: string;
  description: string;
  image: string;
  pathname: string;
  hash: string;
}

export function getMetadata(params: GetMetadataParams): Metadata {
  const variant = params.variant ?? 'summary_large_image';
  const title = params.title ?? 'Title';
  const description = params.description ?? 'Description';
  const baseUrl = getBaseUrl();
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
      url: `${baseUrl}${params.pathname}`,
      images: generateImage({ title, description, icon: params.image, hash: params.hash }),
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
            images: generateImage({ title, description, icon: params.image, hash: params.hash }),
          },
  };
}
