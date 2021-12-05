export interface ICartStore {
  id: number;
  name: string;
  price: number;
  image: string;
  offer: boolean;
  category: number[];
  description: string;
  discount: number;
  qtd?: number;
}

export interface ICartState {
  cart: ICartStore[];
}
