import { Dispatch } from "react";

interface IMenu {
  id: string;
  category: string;
  description: string;
  ordered: boolean;
  price: string;
  product: string;
  subcategory: string;
  takeaway: boolean;
}

interface IContext {
  productList: IMenu[];
  setProductList: Dispatch<React.SetStateAction<IMenu[]>>;
}

export type { IMenu, IContext };
