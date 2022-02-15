import React, { createContext, useContext, useState, useEffect } from 'react';

const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  
  const [login, setLogin] = useState(false);
  const [admin, setAdmin] = useState(false);
  
  useEffect(() => {
    if (localStorage.token) {
      setLogin(true);
    };
    if (localStorage.admin) {
      setAdmin(true);
    };
  }, []);

  return (
    <LoginContext.Provider value={{ login, setLogin, admin, setAdmin }} >
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => useContext(LoginContext);
