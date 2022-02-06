import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLoginContext } from './auth/login-context';

import NavBar from './shared/navbar';
import Footer from './shared/footer';
import Login from './components/login';
import LoginMessage from './shared/login-message';
import Dashboard from './components/dashboard';
import AboutUs from './pages/about-us';
import Loader from './components/loader';

import './App.css';

const App = () => {

  const { login } = useLoginContext();

  return (
    <BrowserRouter>
      <Loader />
        { login ? <NavBar /> : <LoginMessage /> }
        <div className='main'>
          <Routes>
            <Route path='/' element={login ? <Dashboard /> : <Login />} />
            <Route path='/about' element={<AboutUs />} />
          </Routes>
        </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
