'use client';

import { type PropsWithChildren } from 'react';

import * as MUI from '@mui/material';

export function PageContent(props: PropsWithChildren) {
  return (
    <MUI.Container>
      <MUI.Stack
        direction="row"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap={10}
        marginBlock={10}
      >
        {props.children}
      </MUI.Stack>
    </MUI.Container>
  );
}
