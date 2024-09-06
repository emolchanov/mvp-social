'use client';

import * as MUI from '@mui/material';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  pathname: string;
}

export function ProductCard(props: ProductCardProps) {
  const onClick = () => navigator.clipboard.writeText(window.location.origin + props.pathname + `?t=${Date.now()}`);
  return (
    <MUI.Card sx={{ maxWidth: 345 }} variant="outlined">
      <MUI.CardMedia component="img" alt="green iguana" height="140" image={props.image} />
      <MUI.CardContent>
        <MUI.Typography gutterBottom variant="h5" component="div">
          {props.title}
        </MUI.Typography>
        <MUI.Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {props.description}
        </MUI.Typography>
      </MUI.CardContent>
      <MUI.CardActions>
        <MUI.Button onClick={onClick}>Copy link</MUI.Button>
      </MUI.CardActions>
    </MUI.Card>
  );
}
