import React from 'react';

import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import './styles.css';

function LoginMessage() {

  const navigate = useNavigate();

  return (
    <div className="navBar login-message">
        <button onClick={() => navigate("/")}>
          <div className="flex-ctr">
            <FaHome />
            Início
          </div>
        </button>
      <h4>Acesso restrito. Por favor faça login para continuar.</h4> 
    </div>
  );
};

export default LoginMessage;
