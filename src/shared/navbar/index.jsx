import React from 'react';

import AddProduct from '../../components/add-product-modal/add-product-modal';

import Logo from '../img/logo-negativo.png';
import './styles.css';

function NavBar() {

  return (
    <div className='navBar'>
      <AddProduct />
      <img src={Logo} alt='Logo Restoque' className='logo-nav'/> 
    </div>
  );
};

export default NavBar;
