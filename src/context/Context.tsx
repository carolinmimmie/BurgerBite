import React, {
    createContext,
    Dispatch,
    ReactNode,
    useEffect,
    useState,
  } from "react";


  import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { IContext, IMenu } from "../interfaces";
import { getAllProducts } from "../Api";


const Context = createContext<IContext>({
    productList: [],
    setProductList: () => {},
  });


//DATAN Vill vi skicka vidare
export const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [productList, setProductList] = useState<IMenu[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState<IMenu[]>([]);
    const [showResults, setShowResults] = useState(false);
    const [cartList, setCartList] = useState<IMenu[]>([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        const products = await getAllProducts();
        setProductList(products);
      };
      fetchProducts();
    }, []);
  
   return (
      <Context.Provider
        value={{
          productList,
          setProductList,
        }}
      >
        {children}
      </Context.Provider>
    );
  };
  
  export default Context;
  