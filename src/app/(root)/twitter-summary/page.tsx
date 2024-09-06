import * as React from 'react';

import type { Metadata } from 'next';

import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { ApplicationToolbar } from '@/modules/application-toolbar';
import { LIZARD_DATA } from '@/modules/content';
import { getMetadata, RenderMetadata } from '@/modules/metadata';

import { PageContent } from '@/shared/components/page-content';
import { ProductCard } from '@/shared/components/product-card';
import { getAppQueryClient } from '@/shared/modules/swr';

type PageProps = {
  searchParams: Next.PageSearchParams;
};

export const dynamic = 'force-dynamic';

const MetaDataConfig = {
  pathname: '/twitter-summary',
  title: LIZARD_DATA.title,
  description: LIZARD_DATA.description,
  image: LIZARD_DATA.image,
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  return getMetadata({ variant: 'summary', ...MetaDataConfig });
}

export default async function Page({ searchParams }: PageProps) {
  const queryClient = getAppQueryClient();
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <ApplicationToolbar />
      <PageContent>
        <ProductCard {...LIZARD_DATA} />
        <RenderMetadata metadata={getMetadata({ variant: 'summary', ...MetaDataConfig })} />
      </PageContent>
    </HydrationBoundary>
  );
}
