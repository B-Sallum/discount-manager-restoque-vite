import React from 'react';
import './styles.css';
import { useState, useEffect } from 'react';

import Logo from '../../shared/img/logo-negativo.png';

const Loader = () => {

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 5000);
  })

  return (
    <>
      {
        loader ? (
          <div className='initial-loading fade-out-fwd flex-ctr'>
          <img src={Logo} alt='Logo Restoque' className='logo-load swing-in-top-fwd' />
        </div> 
        ) : null
      }   
    </>
  );
};

export default Loader;