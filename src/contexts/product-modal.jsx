import React, { createContext, useContext, useState, useEffect } from 'react';

import api from "../auth/api";

const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  
  const [product, setProduct] = useState(undefined);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (edit) {
      api.get(`/products/${edit}`)
      .then((res) => {
        setProduct(res.data);
      });
    }
  }, [edit])

  return (
    <ProductContext.Provider value={{ product, setProduct, edit, setEdit }} >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
