import React, { useState } from 'react';

import api from '../../auth/api';

import { useLoginContext } from "../../contexts/login-context";
import { FaUserTie, FaArrowRight } from "react-icons/fa";
import { BsFillLockFill } from "react-icons/bs";
import { AiFillCloseCircle } from 'react-icons/ai';
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
          <div className="login-left flex-ctr col">
            <img
              src={Logo}
              alt="Logo Restoque"
            />
            <h6>Site desenvolvido com propósitos didáticos</h6>
            <h6>Todas as informações são fictícias</h6>
          </div>
          <div className="login-right flex-ctr col">
            <form className="form-login flex-ctr col">
              <h2>Login</h2>
              <h4>adm@restoque.com.br</h4>
              <div className="input-login flex-ctr">
                <FaUserTie />                
                <input required type="email"
                  className="email"
                  placeholder="Email corporativo"
                  onChange={(event) => setUser(event.target.value)}
                />
              </div>
              <h4>12345678</h4>
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
            <h6>Esqueci minha senha</h6>
          </div>
        </div>
      </div>
    </section>   
  );
};

export default Login;
