import * as React from 'react';

import { QueryClient } from '@tanstack/react-query';

import { QUERY_CLIENT_CONFIG } from '../constants';

export const useAppQueryClient = () => {
  const [appQueryClient] = React.useState(() => {
    return new QueryClient(QUERY_CLIENT_CONFIG);
  });

  return appQueryClient;
};
