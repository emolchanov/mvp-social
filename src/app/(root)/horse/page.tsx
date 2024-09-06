import * as React from 'react';

import type { Metadata } from 'next';

import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { ApplicationToolbar } from '@/modules/application-toolbar';
import { HORSE_DATA } from '@/modules/content';
import { getMetadata, RenderMetadata } from '@/modules/metadata';

import { PageContent } from '@/shared/components/page-content';
import { PageFooter } from '@/shared/components/page-footer';
import { ProductCard } from '@/shared/components/product-card';
import { getAppQueryClient } from '@/shared/modules/swr';

type PageProps = {
  searchParams: Next.PageSearchParams;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  return getMetadata({ variant: 'summary_large_image', ...HORSE_DATA });
}

export default async function Page({ searchParams }: PageProps) {
  const queryClient = getAppQueryClient();
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <ApplicationToolbar />
      <PageContent>
        <ProductCard {...HORSE_DATA} />
      </PageContent>
      <PageFooter>
        <RenderMetadata metadata={getMetadata({ variant: 'summary_large_image', ...HORSE_DATA })} />
      </PageFooter>
    </HydrationBoundary>
  );
}
