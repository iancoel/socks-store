import { Reducer } from 'redux';

import { ICartState } from './types';

const INITIAL_STATE: ICartState = {
  cart: [],
};

const storeCart: Reducer<ICartState | any> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'ADD_CART': {
      console.log(action.payload);
    }
    default: {
      return state;
    }
  }
};

export default storeCart;
