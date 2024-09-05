import * as React from 'react';

import { CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '@/shared/modules/styled-system/theme';
import { AppQueryClientProvider } from '@/shared/modules/swr';

type RootLayoutProps = {
  children: React.ReactNode;
};

export const dynamic = 'force-dynamic';

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body>
        <AppQueryClientProvider>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </AppQueryClientProvider>
      </body>
    </html>
  );
}
