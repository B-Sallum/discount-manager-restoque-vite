import React, { createContext, useState, useEffect, useContext } from 'react';
import api from "../../auth/api";
import { useLoginContext } from "../../auth/login-context";

const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {

  const { login } = useLoginContext();

  const [products, setProducts] = useState(false);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (!login) {
      return null
    };
    if (!mount) {
      api.get('/products')
      .then((response) => {
        setProducts(response.data);
      });
    setMount(true);
    }
  }, [login, mount]);

  return (
    <ProductsContext.Provider value={{ products, setProducts, setMount }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);
