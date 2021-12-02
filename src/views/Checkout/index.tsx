import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ICartState } from '@/store/modules/cart/types';

const Checkout: React.FC = () => {
  const state = useSelector((state: ICartState) => state.cart);

  return (
    <div>
      <h2>Checkout</h2>
      <h3>Your cart contains {state.length} items</h3>
      <Link to="/">Home</Link>
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
    </div>
  );
};

export default Checkout;
