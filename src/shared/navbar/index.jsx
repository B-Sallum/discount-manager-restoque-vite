import React from 'react';
import AddProduct from '../../components/product/product-add-modal';

import Logo from '../img/logo-restoque.png';
import { FaSignOutAlt } from "react-icons/fa";
import './styles.css';

function NavBar() {

  return (
    <div className="navBar">
      <img src={Logo} alt="Logo Restoque" className="logo-nav"/>
      
      <button>
        Sair <FaSignOutAlt />
      </button>
    </div>
  );
};

export default NavBar;
