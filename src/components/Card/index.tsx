import React from 'react';

import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  Button,
  CardContent,
} from '@mui/material';

import { ICardComponent } from '@/types';

const CardComponent: React.FC<ICardComponent> = (props) => {
  const {
    textTitle,
    img,
    altText,
    descriptionText,
    keyValue,
    priceText,
    handleAction,
    itemDefault,
  } = props;
  return (
    <Grid item xs key={keyValue}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title={textTitle} />
        <CardMedia
          component="img"
          image={img}
          alt={altText}
          height="200px"
          width="200px"
        />
        <CardContent>
          <p>{descriptionText}</p>
          <h3>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(priceText)}
          </h3>
        </CardContent>
        <CardActions>
          <Button onClick={() => handleAction(itemDefault)} variant="contained">
            Adicionar ao carrinho
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardComponent;
