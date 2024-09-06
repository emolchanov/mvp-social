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
        <MUI.Accordion sx={{ maxWidth: '100%' }} variant="outlined">
          <MUI.AccordionSummary>View metadata</MUI.AccordionSummary>
          <MUI.AccordionDetails>{props.children}</MUI.AccordionDetails>
        </MUI.Accordion>
      </MUI.Stack>
    </MUI.Container>
  );
}
