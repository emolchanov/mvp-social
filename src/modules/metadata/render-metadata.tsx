import type { Metadata } from 'next';

import * as MUI from '@mui/material';

export function RenderMetadata(props: { metadata: Metadata }) {
  return (
    <MUI.Paper variant="outlined" sx={{ px: 5 }}>
      <pre>{JSON.stringify(props.metadata, null, 2)}</pre>
    </MUI.Paper>
  );
}
