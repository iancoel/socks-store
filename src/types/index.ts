export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  offer: boolean;
  category: number[];
  description: string;
  discount: number;
}

export interface ILinkTab {
  label?: string;
  href: string;
}
