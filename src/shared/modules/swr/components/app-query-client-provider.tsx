'use client';

import * as React from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { useAppQueryClient } from '../hooks/use-app-query-client';

export const AppQueryClientProvider = React.memo(function AppQueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const appQueryClient = useAppQueryClient();

  return (
    <QueryClientProvider client={appQueryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} position="bottom" buttonPosition="bottom-left" />
    </QueryClientProvider>
  );
});
