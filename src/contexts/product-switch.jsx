import React, { createContext, useContext, useState } from 'react';

const SwitchContext = createContext({});

export const SwitchProvider = ({ children }) => {
  
  const [switchProduct, setSwitchProduct] = useState(null);

  return (
    <SwitchContext.Provider value={{ switchProduct, setSwitchProduct }} >
      {children}
    </SwitchContext.Provider>
  );
};

export const useSwitchContext = () => useContext(SwitchContext);
