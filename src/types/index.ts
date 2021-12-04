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

export interface ILoadComponent {
  show: boolean;
}

export interface ICardComponent {
  textTitle: string;
  img: string;
  altText: string;
  keyValue?: number;
  descriptionText: string;
  priceText: number;
  handleAction: (value: IProduct) => void;
  itemDefault: IProduct;
  handleDetails: (value: number) => void;
}

export interface IUserData {
  name: string;
  email: string;
}
