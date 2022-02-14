import React, { useState } from 'react';

import api from '../../auth/api';
import { useLoginContext } from "../../hooks/login-context";
import { FaUserTie } from "react-icons/fa";
import { BsFillLockFill } from "react-icons/bs";
import Logo from '../../shared/img/logo-restoque.png';

import './styles.css';

const Login = () => {

  const { setLogin, setAdmin } = useLoginContext();

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const login = { email: user, pass: pass };

    api
      .post('/auth/login', login)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem('token', token);
        setLogin(true);
        
        if (res.data.user.admin) {
          localStorage.setItem('admin', true);
          setAdmin(true);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <section className="modal-bg">
      <div className="wrap-modal">
        <div className="login">
          <div className="login-left flex-ctr">
            <img
              src={Logo}
              alt="Logo Restoque"
            />
          </div>
          <div className="login-right flex-ctr col">
            <h3>Digite seus dados</h3>
            <form className="form-login flex-ctr col">
              <div className="input-login flex-ctr">
                <FaUserTie />
                <input required type="email"
                  className="email"
                  placeholder="Email corporativo"
                  onChange={(event) => setUser(event.target.value)}
                />
              </div>
              <div className="input-login flex-ctr">
                <BsFillLockFill />
                <input required type="password"
                  className="form-senha"
                  placeholder="Senha"
                  onChange={(event) => setPass(event.target.value)}
                /> 
              </div>
            </form>
            <button onClick={handleSubmit}>Login</button>
            <div><h6>Esqueci minha senha</h6></div>
          </div>
        </div>
      </div>
    </section>   
  );
};

export default Login;
