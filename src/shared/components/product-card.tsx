'use client';

import * as MUI from '@mui/material';

export function ProductCard() {
  return (
    <MUI.Card sx={{ maxWidth: 345 }} variant="outlined">
      <MUI.CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
      />
      <MUI.CardContent>
        <MUI.Typography gutterBottom variant="h5" component="div">
          Lizard
        </MUI.Typography>
        <MUI.Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
          except Antarctica
        </MUI.Typography>
      </MUI.CardContent>
    </MUI.Card>
  );
}
