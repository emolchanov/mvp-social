import type { Metadata } from 'next';
import type { ResolvedTwitterMetadata } from 'next/dist/lib/metadata/types/twitter-types';

import { getBaseUrl } from './get-base-url';
import { getStaticImage } from './get-static-image';

interface GetStaticMetadataParams {
  variant: ResolvedTwitterMetadata['card'];
  title: string;
  description: string;
  image: string;
  pathname: string;
  hash: string;
}

export function getStaticMetadata(params: GetStaticMetadataParams): Metadata {
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
      images: getStaticImage({ title, description, imageUrl: params.image, hash: params.hash }),
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
            images: getStaticImage({ title, description, imageUrl: params.image, hash: params.hash }),
          },
  };
}
