import type { Metadata } from 'next';
import type { ResolvedTwitterMetadata } from 'next/dist/lib/metadata/types/twitter-types';

interface GetMetadataParams {
  variant: ResolvedTwitterMetadata['card'];
}

function getImage(alt: string) {
  return {
    url: 'https://mui.com/static/images/cards/paella.jpg',
    secureUrl: 'https://mui.com/static/images/cards/paella.jpg',
    type: 'image/jpeg',
    width: 690,
    height: 388,
    alt,
  };
}

export function getMetadata(params: GetMetadataParams): Metadata {
  return {
    title: `MVP-title-${params.variant}`,
    description: `MVP-description-${params.variant}`,
    openGraph: {
      title: `MVP-og-title-${params.variant}`,
      description: `MVP-og-description-${params.variant}`,
      siteName: `MVP-site-name-${params.variant}`,
      type: 'website',
      url: `https://${process.env.DOMAIN ?? 'local'}`,
      locale: 'en',
      determiner: 'auto',
      images: [getImage(`MVP-og-image-alt-${params.variant}`)],
    },
    facebook: {
      appId: `${process.env.FB_APP_ID}`,
    },
    twitter:
      params.variant === 'app'
        ? {
            card: params.variant,
            app: {
              name: `MVP-twitter-${params.variant}-title`,
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
            card: params.variant,
            title: `MVP-twitter-${params.variant}-title`,
            description: `MVP-twitter-${params.variant}-description`,
            site: '@jackxsim',
            creator: '@jackxsim',
            images: [getImage(`MVP-twitter-${params.variant}-image-alt`)],
          },
  };
}
