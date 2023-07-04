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

// const menuCollectionRef = collection(db, "Menu");

// // Meals
// export const getMeals = async () => {
//     const q = query(menuCollectionRef, where("category", "==", "Meals"));
  

//     const data = await getDocs(q);
//     return data.docs.map((doc) => ({
//       ...(doc.data() as IMenu),
  
//       id: doc.id,
//     }));
//   };
// //Chicken
//   export const getChickenProducts = async () => {
//     const q = query(menuCollectionRef, where("subcategory", "==", "Fish"));
  
//     const data = await getDocs(q);
//     return data.docs.map((doc) => ({
//       ...(doc.data() as IMenu),
  
//       id: doc.id,
//     }));
//   };
// //Fish
// export const getFishProducts = async () => {
//     const q = query(menuCollectionRef, where("subcategory", "==", "Fish"));
  
//     const data = await getDocs(q);
//     return data.docs.map((doc) => ({
//       ...(doc.data() as IMenu),
  
//       id: doc.id,
//     }));
//   };
//   //Vegetarian
//   export const getVegetarianProducts = async () => {
//     const q = query(menuCollectionRef, where("subcategory", "==", "Vegetarian"));
  
//     const data = await getDocs(q);
//     return data.docs.map((doc) => ({
//       ...(doc.data() as IMenu),
  
//       id: doc.id,
//     }));
//   };


  

