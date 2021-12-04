import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Grid } from '@mui/material';

import Loader from '@/components/Loader';

import api from '@/services/api';

import { IProduct } from '@/types';

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    api
      .get(`products?id=${id}`)
      .then((r) => {
        setProduct(r.data);
      })
      .catch((e) => console.error(e))
      .finally(() => {
        setTimeout(() => {
          setIsLoaded(false);
        }, 2500);
      });
  }, []);

  if (isLoaded) {
    return <Loader show={isLoaded} />;
  }

  return (
    <Container style={{ minHeight: '90vh', paddingTop: 60, paddingBottom: 60 }}>
      {product.map((item) => (
        <Grid key={item.id} container spacing={3}>
          <Grid item xs>
            <h1>{item.name}</h1>
            <img src={item.image} alt={item.name} />
          </Grid>
          <Grid item xs>
            <p>{item.description}</p>
            <h3>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(item.price)}
            </h3>
            {item.discount > 0 ? <h5>{item.discount}% Off</h5> : '  '}
          </Grid>
        </Grid>
      ))}
    </Container>
  );
};

export default ProductDetails;
