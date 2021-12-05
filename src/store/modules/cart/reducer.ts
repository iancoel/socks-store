import { Reducer } from 'redux';
import { ICartState } from './types';
import { IProduct } from '@/types';

const INITIAL_STATE: ICartState = {
  cart: [],
};

const storeCart: Reducer<ICartState | any> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'ADD_CART': {
      const { cart } = action.payload;
      return {
        ...state,
        cart: [...state.cart, cart],
      };
    }
    case 'INCREMENT_ITEM': {
      const { cart } = action.payload;
      state.cart.find((item: IProduct) => item.id === cart.id).qtd += 1;

      return state;
    }

    case 'DECREMENT_ITEM': {
      const { cart } = action.payload;
      if (cart.qtd === 1) {
        return {
          cart: state.cart.filter((item: IProduct) => item.id !== cart.id),
        };
      } else {
        state.cart.find((item: IProduct) => item.id === cart.id).qtd -= 1;
      }
      return state;
    }

    default: {
      return state;
    }
  }
};

export default storeCart;
