import * as React from 'react';

import type { Metadata } from 'next';

import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { ApplicationToolbar } from '@/modules/application-toolbar';
import { getMetadata, getMetadataHash } from '@/modules/metadata';

import { PageContent } from '@/shared/components/page-content';
import { getAppQueryClient } from '@/shared/modules/swr';

type PageProps = {
  searchParams: Next.PageSearchParams;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  return getMetadata({
    variant: 'summary',
    pathname: '/',
    title: '404',
    description: 'Not found',
    image: 'https://images.unsplash.com/photo-1618044619888-009e412ff12a?q=80&w=2371&auto=format&fit=cover',
    hash: getMetadataHash(),
  });
}

export default function NotFound() {
  const queryClient = getAppQueryClient();
  const dehydratedState = dehydrate(queryClient);
  const hash = getMetadataHash();

  return (
    <HydrationBoundary state={dehydratedState}>
      <ApplicationToolbar hash={hash} />
      <PageContent>Not found</PageContent>
    </HydrationBoundary>
  );
}
