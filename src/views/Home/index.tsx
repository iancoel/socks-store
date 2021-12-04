import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { Grid, Container } from '@mui/material';

import CardComponent from '@/components/Card';
import LoaderComponent from '@/components/Loader';

import api from '@/services/api';
import { addNewProduct } from '@/store/modules/cart/actions';

import { IProduct } from '@/types';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const [list, setList] = useState<IProduct[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const navigate = useNavigate();

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

  const handleDetailsProduct = (item: number) => {
    navigate(`/produtos/${item}`);
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
        style={{ paddingTop: 40, paddingBottom: 40 }}
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
            handleDetails={handleDetailsProduct}
            key={item.id}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
