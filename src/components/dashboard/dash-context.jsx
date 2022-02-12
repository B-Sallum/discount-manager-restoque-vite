import React, { createContext, useState, useEffect, useContext } from 'react';
import api from "../../auth/api";
import { useLoginContext } from "../../auth/login-context";

const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {

  const { login } = useLoginContext();

  const [products, setProducts] = useState(false);

  useEffect(() => {
    if (!login) {
      return null
    };
    api.get('/products')
      .then((response) => {
        setProducts(response.data);
      });
  }, [login]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);
