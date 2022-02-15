import React, { createContext, useContext, useState, useEffect } from 'react';

const DeleteContext = createContext({});

export const DeleteProvider = ({ children }) => {
  
  const [deleteProduct, setDeleteProduct] = useState("");
  
  useEffect(() => {
    console.log(deleteProduct)
  }, [deleteProduct]);

  return (
    <DeleteContext.Provider value={{ deleteProduct, setDeleteProduct }} >
      {children}
    </DeleteContext.Provider>
  );
};

export const useDeleteContext = () => useContext(DeleteContext);
