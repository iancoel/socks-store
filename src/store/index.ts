import { createStore } from 'redux';

import cartStore from './modules/cart/reducer';

const store = createStore(cartStore);

export default store;
