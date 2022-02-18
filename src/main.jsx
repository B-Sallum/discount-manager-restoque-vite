import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { SwitchProvider } from "./contexts/product-switch";
import { LoginProvider } from "./contexts/login-context";
import { ProductsProvider } from "./contexts/products-list";
import { ProductProvider } from "./contexts/product-modal";

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <LoginProvider>
      <ProductsProvider>
        <ProductProvider>
          <SwitchProvider>
            <App />
            </SwitchProvider>
          </ProductProvider>
      </ProductsProvider>
    </LoginProvider>    
  </React.StrictMode>,
  document.getElementById("root")
);
