import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  Container,
  CardActions,
  Button,
  CardContent,
} from '@mui/material';

import CardComponent from '@/components/Card';
import LoaderComponent from '@/components/Loader';

import api from '@/services/api';
import { addNewProduct } from '@/store/modules/cart/actions';

import { IProduct } from '@/types';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const [list, setList] = useState<IProduct[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    api
      .get('products')
      .then((r) => setList(r.data))
      .catch((e) => console.error(e))
      .finally(() => {
        setTimeout(() => setIsLoaded(false), 2500);
      });
  }, []);

  const handleAddCart = (item: IProduct) => {
    dispatch(addNewProduct(item));
  };

  if (isLoaded) {
    return <LoaderComponent show={isLoaded} />;
  }

  return (
    <Container>
      <Grid
        container
        columns={{ md: 12 }}
        spacing={1}
        justifyContent="center"
        alignItems="center"
      >
        {list?.map((item) => (
          <CardComponent
            textTitle={item.name}
            img={item.image}
            altText={item.name}
            descriptionText={item.description}
            keyValue={item.id}
            priceText={item.price}
            handleAction={handleAddCart(item)}
            itemDefault={item}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
