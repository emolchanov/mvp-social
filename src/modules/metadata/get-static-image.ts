export function getStaticImage(params: { title: string; description: string; imageUrl: string; hash: string }) {
  return {
    url: params.imageUrl,
    secureUrl: params.imageUrl,
    type: 'image/jpeg',
    width: 843,
    height: 441,
    alt: `${params.title}: ${params.description.slice(0, 25)}`,
  };
}
