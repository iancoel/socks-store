import { ICartStore } from './types';

export function addNewProduct(cart: ICartStore) {
  return {
    type: 'ADD_CART',
    payload: {
      cart,
    },
  };
}

export function incrementItem(cart: ICartStore) {
  return {
    type: 'INCREMENT_ITEM',
    payload: {
      cart,
    },
  };
}

export function decrementItem(cart: ICartStore) {
  return {
    type: 'DECREMENT_ITEM',
    payload: {
      cart,
    },
  };
}
