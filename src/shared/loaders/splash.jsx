import React from 'react';
import './styles.css';
import { useState, useEffect } from 'react';

import Logo from '../../shared/img/logo-restoque.png';

const Splash = () => {

  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false)
    }, 5000);
  })

  return (
    <>
      {
        splash ? (
          <div className='initial-loading fade-out-fwd flex-ctr'>
          <img src={Logo} alt='Logo Restoque' className='logo-load swing-in-top-fwd' />
        </div> 
        ) : null
      }   
    </>
  );
};

export default Splash;
