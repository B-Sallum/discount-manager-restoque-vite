import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { SwitchProvider } from "./contexts/switch-product-context";
import { LoginProvider } from "./contexts/login-context";
import { ProductsProvider } from "./contexts/products-list";

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <LoginProvider>
      <ProductsProvider>
        <SwitchProvider>
          <App />
        </SwitchProvider>        
      </ProductsProvider>
    </LoginProvider>    
  </React.StrictMode>,
  document.getElementById("root")
);
