import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { DeleteProvider } from "./contexts/delete-context";
import { LoginProvider } from "./contexts/login-context";
import { ProductsProvider } from "./contexts/products-list";

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <LoginProvider>
      <ProductsProvider>
        <DeleteProvider>
          <App />
        </DeleteProvider>        
      </ProductsProvider>
    </LoginProvider>    
  </React.StrictMode>,
  document.getElementById("root")
);
