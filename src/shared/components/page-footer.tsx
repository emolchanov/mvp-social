'use client';

import { type PropsWithChildren } from 'react';

import * as MUI from '@mui/material';

export function PageFooter(props: PropsWithChildren) {
  return (
    <MUI.Container>
      <MUI.Stack
        direction="column"
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
