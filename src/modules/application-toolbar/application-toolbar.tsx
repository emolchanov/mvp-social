'use client';

import { type MouseEvent, useState } from 'react';

import Link from 'next/link';

import * as MUI from '@mui/material';

export function ApplicationToolbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MUI.AppBar position="sticky" variant="outlined">
      <MUI.Toolbar variant="dense">
        <MUI.Stack direction="row" gap={1} alignItems="center" flexBasis="100%" justifyContent="space-between">
          <MUI.Typography variant="h6" component="div">
            <MUI.Link component={Link} href="/" color="inherit" underline="none">
              Social Cards
            </MUI.Link>
          </MUI.Typography>
          <MUI.Stack direction="row" gap={1} alignItems="center">
            <MUI.Button color="inherit" variant="text" onClick={handleClick}>
              Pages
            </MUI.Button>
            <MUI.Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MUI.MenuItem component={Link} href="/twitter-app">
                Twitter App
              </MUI.MenuItem>
              <MUI.MenuItem component={Link} href="/twitter-summary-large">
                Twitter Summary Large
              </MUI.MenuItem>
            </MUI.Menu>
          </MUI.Stack>
        </MUI.Stack>
      </MUI.Toolbar>
    </MUI.AppBar>
  );
}
