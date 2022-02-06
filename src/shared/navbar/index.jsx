import React from 'react';

import AddProduct from '../../components/product-add-modal/product-add-modal';

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
