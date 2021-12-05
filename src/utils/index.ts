import { IProduct } from '@/types';

export const convertToCurrency = (value: number) => {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

export const getDiscountPrice = (discount: number, price: number) => {
  const result = price - (price * discount) / 100;
  return convertToCurrency(result);
};

export const getTotalPrice = (item: IProduct[]) => {
  item.reduce(function (previous: any, current: IProduct) {
    return previous + current.price;
  }, 0);
};
