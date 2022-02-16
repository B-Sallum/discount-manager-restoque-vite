import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { SwitchProvider } from "./contexts/product-switch";
import { LoginProvider } from "./contexts/login-context";
import { ProductsProvider } from "./contexts/products-list";
import { EditProvider } from "./contexts/product-edit";

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <LoginProvider>
      <ProductsProvider>
        <SwitchProvider>
          <EditProvider>
            <App />
          </EditProvider>
        </SwitchProvider>        
      </ProductsProvider>
    </LoginProvider>    
  </React.StrictMode>,
  document.getElementById("root")
);
