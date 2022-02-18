import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);

  return (
    <ProductContext.Provider value={{ modal, setModal, edit, setEdit }} >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
