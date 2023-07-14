import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  Timestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { useEffect } from "react";
import { db } from "./firestore-config";
import { IMenu } from "./interfaces";

const AllProductsCollectionRef = collection(db, "menu");

export const getAllProducts = async () => {
  const data = await getDocs(AllProductsCollectionRef);
  return data.docs.map((doc) => ({
    ...(doc.data() as IMenu),

    id: doc.id,
  }));
};

const CartCollectionRef = collection(db, "Cart Collection");

export const getCartCollection = async () => {
  const data = await getDocs(CartCollectionRef);
  return data.docs.map((doc) => ({
    ...(doc.data() as IMenu),

    id: doc.id,
  }));
};

//FUNKTIONERNA
export const addToCartCollection = async (product: IMenu) => {
  await addDoc(CartCollectionRef, {
    category: product.category,
    description: product.description,
    ordered: product.ordered,
    price: product.price,
    product: product.product,
    subcategory: product.subcategory,
    quantity: +1,
  });
  console.log();

  getCartCollection();
};

export const deleteFromCart = async (id: string) => {
  await deleteDoc(doc(CartCollectionRef, id));
  

  // getCartCollection();
  // getAllProducts();
};

export const ordered = async (x: IMenu) => {
  await updateDoc(doc(AllProductsCollectionRef, x.id), {
    ordered: !x.ordered,
  });
};

export const test = async (x: IMenu) => {
  await updateDoc(doc(CartCollectionRef, x.subcategory), {
 
    

   
  });
};




