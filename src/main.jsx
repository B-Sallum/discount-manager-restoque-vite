import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { LoginProvider } from "./hooks/login-context";
import { ProductsProvider } from "./hooks/products-context";

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <LoginProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </LoginProvider>    
  </React.StrictMode>,
  document.getElementById("root")
);
