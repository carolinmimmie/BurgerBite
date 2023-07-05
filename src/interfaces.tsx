import { Dispatch } from "react";

interface IMenu {
  id: string;
  category: string;
  description: string;
  ordered: boolean;
  price: number;
  product: string;
  subcategory: string;
}

interface IContext {
  productList: IMenu[];
  setProductList: Dispatch<React.SetStateAction<IMenu[]>>;
  orderedProduct: (id: string) => void;
  unOrderedProduct: (id: string) => void;
  cartList: IMenu[];
  setCartList: Dispatch<React.SetStateAction<IMenu[]>>;
}
interface IProductCard {
  product: IMenu;
}

export type { IMenu, IContext, IProductCard };
