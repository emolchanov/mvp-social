import * as React from 'react';

import { QueryClient } from '@tanstack/react-query';

import { QUERY_CLIENT_CONFIG } from './constants';

export const getAppQueryClient = React.cache(() => new QueryClient(QUERY_CLIENT_CONFIG));
