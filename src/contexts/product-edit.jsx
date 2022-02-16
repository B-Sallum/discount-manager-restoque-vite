import React, { createContext, useContext, useState } from 'react';

const EditContext = createContext({});

export const EditProvider = ({ children }) => {
  
  const [editProduct, setEditProduct] = useState(null);

  return (
    <EditContext.Provider value={{ editProduct, setEditProduct }} >
      {children}
    </EditContext.Provider>
  );
};

export const useEditContext = () => useContext(EditContext);
