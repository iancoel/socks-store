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
          {state.length === 0 ? (
            <div>
              <h1>Oooops</h1>
              <p>Your cart is empty</p>
            </div>
          ) : (
            <>
              {state?.map((item, index) => (
                <div key={index}>
                  <h4>{item.name}</h4>
                  <img src={item.image} alt={item.name} />
                  <h3>
                    {Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(item.price)}
                  </h3>
                </div>
              ))}
            </>
          )}
        </Container>
      </SwipeableDrawer>
    </>
  );
};

export default Cart;
