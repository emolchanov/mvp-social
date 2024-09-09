import { getBaseUrl } from './get-base-url';

export function generateImage(params: { title: string; description: string; icon: string; hash: string }) {
  const baseUrl = getBaseUrl();
  return {
    url: `${baseUrl}/api/og-preview?t=${params.hash}&title=${encodeURIComponent(params.title)}&content=${encodeURIComponent(params.description)}&icon=${encodeURIComponent(params.icon)}`,
    secureUrl: `${baseUrl}/api/og-preview?t=${params.hash}&title=${encodeURIComponent(params.title)}&content=${encodeURIComponent(params.description)}&icon=${encodeURIComponent(params.icon)}`,
    type: 'image/jpeg',
    width: 843,
    height: 441,
    alt: `${params.title}: ${params.description.slice(0, 25)}`,
  };
}
