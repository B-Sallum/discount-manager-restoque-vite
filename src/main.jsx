import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { LoginProvider } from './auth/login-context';
import { ProductsProvider } from "./components/dashboard/dash-context";

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
