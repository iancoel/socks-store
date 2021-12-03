import React, { useState, SyntheticEvent } from 'react';
import { SwipeableDrawer, Button, Badge, Container } from '@mui/material';
import { ICartState } from '@/store/modules/cart/types';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useSelector } from 'react-redux';

const Cart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCart = (event: SyntheticEvent) => {
    setIsOpen(!isOpen);
  };

  const state = useSelector((state: ICartState) => state.cart);

  return (
    <>
      <Button onClick={handleCart}>
        <Badge badgeContent={state.length}>
          <ShoppingBagIcon />
        </Badge>
      </Button>
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={handleCart}
        onOpen={handleCart}
      >
        <Container>
          {state?.map((item, index) => (
            <div>
              <h4>{item.name}</h4>
              <h3>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(item.price)}
              </h3>
            </div>
          ))}
        </Container>
      </SwipeableDrawer>
    </>
  );
};

export default Cart;
