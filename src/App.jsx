import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useLoginContext } from "./contexts/login-context";
import { useSwitchContext } from "./contexts/switch-product-context";
import NavBar from './shared/navbar';
import Footer from './shared/footer';
import Login from './components/login';
import LoginMessage from './shared/login-message';
import Dashboard from './components/dashboard/dashboard';
import ProductSwitch from "./components/product/product-switch";
import AboutUs from './pages/about-us';
// import Splash from "./shared/loaders/splash";

import './App.css';

const App = () => {

  const { login } = useLoginContext();
  const { switchProduct } = useSwitchContext();

  useEffect(() => {
    console.log(switchProduct)
  }, [switchProduct]);

  return (
    <BrowserRouter>
      {/* <Splash /> */}
        { login ? <NavBar /> : <LoginMessage /> }
        <div className="main">
          <Routes>
            <Route path="/" element={login ? <Dashboard /> : <Login />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>
        { switchProduct ? <ProductSwitch /> : null}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
