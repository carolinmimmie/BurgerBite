import React, {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useState,
} from "react";

import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { IContext, IMenu } from "../interfaces";
import { deleteFromCart, getAllProducts, getCartCollection } from "../Api";
import { kStringMaxLength } from "buffer";

const Context = createContext<IContext>({
  productList: [],
  setProductList: () => {},
  orderedProduct: () => {},
  unOrderedProduct: () => {},
  cartList: [],
  setCartList: () => {},
});

//DATAN Vill vi skicka vidare
export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [productList, setProductList] = useState<IMenu[]>([]);
  const [cartList, setCartList] = useState<IMenu[]>([]);
  //Hämtar alla
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts();
      setProductList(products);
      // Andra kollektionen
      const cartItems = await getCartCollection();
      setCartList(cartItems);
    };

    
    fetchProducts();
   
  }, []);

  const orderedProduct = (id: string) => {
    const updatedProductsList = productList.map((x) => {
      if (id === x.id) {
        return { ...x, ordered: !x.ordered };
      }
      return x;
    });
    setProductList(updatedProductsList);
    console.log(updatedProductsList);
  };
  const unOrderedProduct = (id: string) => {
    const updatedProductsList = productList.map((x) => {
      if (id === x.id) {
        return { ...x, ordered: !x.ordered };
      }
      return x;
    });
    setProductList(updatedProductsList);
    console.log(updatedProductsList);
  };

  return (
    <Context.Provider
      value={{
        productList,
        setProductList,
        orderedProduct,
        unOrderedProduct,
        cartList,
        setCartList,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
