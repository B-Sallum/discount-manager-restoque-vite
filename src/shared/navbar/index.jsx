import React from 'react';

import Logo from '../img/logo-restoque.png';
import { FaSignOutAlt, FaHome, FaSlidersH } from "react-icons/fa";
import './styles.css';
import { useNavigate } from "react-router-dom";

function NavBar() {

  const navigate = useNavigate();

  const logout = () => {
    delete localStorage.token;
    location.reload(true);
  }

  return (
    <div className="navBar">
      <div className="flex-ctr">
        <img src={Logo} alt="Logo Restoque" className="logo-nav"/>
      </div>

        <button onClick={() => navigate("/")}>
          <div className="flex-ctr">
            <FaHome />
            Início
          </div>
        </button>

        <button onClick={() => navigate("/")}>
          <div className="flex-ctr">
            <FaSlidersH />
            Painel Administrativo
          </div>
        </button>

        <button onClick={() => logout()}>
          <div className="flex-ctr">
            Logout
            <FaSignOutAlt />
          </div>
        </button>


    </div>
  );
};

export default NavBar;
