'use client';

import * as MUI from '@mui/material';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  pathname: string;
}

const timestamp = process.env.RUNTIME_HASH ?? process.env.NEXT_PUBLIC_HASH ?? 'dev';

export function ProductCard(props: ProductCardProps) {
  const onClick = () => navigator.clipboard.writeText(window.location.origin + props.pathname + `?t=${timestamp}`);
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
