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

import { getDiscountPrice } from '@/utils';

import { ICardComponent } from '@/types';

const CardComponent: React.FC<ICardComponent> = (props) => {
  const {
    textTitle,
    img,
    altText,
    descriptionText,
    priceText,
    handleAction,
    itemDefault,
    handleDetails,
    discountValue,
  } = props;
  return (
    <Grid item xs>
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
          <h3>{getDiscountPrice(discountValue, priceText)}</h3>
        </CardContent>
        <CardActions style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Button
            color="secondary"
            onClick={() => handleDetails(itemDefault.id)}
            variant="contained"
          >
            Details
          </Button>
          <Button
            onClick={() => handleAction(itemDefault)}
            variant="contained"
            color="primary"
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardComponent;
