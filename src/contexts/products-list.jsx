import React, { createContext, useState, useEffect, useContext } from 'react';
import api from "../auth/api";
import { useLoginContext } from "./login-context";

const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {

  const { login } = useLoginContext();

  const [products, setProducts] = useState(false);

  const loadProducts = async () => {
    api.get('/products')
    .then((response) => {
      setProducts(response.data);
    });
  };

  useEffect(() => {
    if (login) {
      loadProducts();
    };
  }, [login]);

  return (
    <ProductsContext.Provider value={{ products, setProducts, loadProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);
