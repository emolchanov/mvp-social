import * as React from 'react';

import type { Metadata } from 'next';

import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { ApplicationToolbar } from '@/modules/application-toolbar';
import { HORSE_DATA } from '@/modules/content';
import { getMetadata, getMetadataHash, RenderMetadata } from '@/modules/metadata';

import { PageContent } from '@/shared/components/page-content';
import { PageFooter } from '@/shared/components/page-footer';
import { ProductCard } from '@/shared/components/product-card';
import { getAppQueryClient } from '@/shared/modules/swr';

type PageProps = {
  searchParams: Next.PageSearchParams;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const hash = getMetadataHash();
  return getMetadata({ variant: 'summary_large_image', ...HORSE_DATA, hash });
}

export default async function Page({ searchParams }: PageProps) {
  const queryClient = getAppQueryClient();
  const dehydratedState = dehydrate(queryClient);
  const hash = getMetadataHash();

  return (
    <HydrationBoundary state={dehydratedState}>
      <ApplicationToolbar hash={hash} />
      <PageContent>
        <ProductCard {...HORSE_DATA} pathname={HORSE_DATA.pathname + `?t=${hash}`} />
      </PageContent>
      <PageFooter>
        <RenderMetadata metadata={getMetadata({ variant: 'summary_large_image', ...HORSE_DATA, hash })} />
      </PageFooter>
    </HydrationBoundary>
  );
}
