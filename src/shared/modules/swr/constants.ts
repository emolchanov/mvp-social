import type { QueryClientConfig } from '@tanstack/react-query';

export const QUERY_CLIENT_CONFIG: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
      /**
       * 10 sec is a default time after data is considered stale
       * (for all queries by default)
       */
      staleTime: 10 * 1000,
      throwOnError: (error) => {
        // @ts-expect-error
        return error?.status == 401;
      },
    },
    mutations: {
      retry: false,
      throwOnError: (error) => {
        // @ts-expect-error
        return error?.status == 401;
      },
    },
  },
};
