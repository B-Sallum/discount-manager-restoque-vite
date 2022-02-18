import React from 'react';
import { useState } from 'react';
import { FaUserPlus } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import api from '../../auth/api';
import './styles.css';

const UserRegister = () => {

  const [modal, setModal] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [passConfirm, setPassConfirm] = useState('');
  
  const register = {
    name: name,
    email: email,
    pass: pass,
    passConfirm: passConfirm,
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (pass !== passConfirm) {
      return alert("As senhas não conferem");
    }

    if (nome === "" || email === "" || pass === "") {
      return alert("Complete os dados corretamente");
    }
    await api
      .post("/users", register)
      .then(() => {
        setModal(false);
      })
      .catch(() => alert("Ocorreu um erro, por favor tente novamente"));
  }

  return (
    <>
      <button className="flex-ctr" onClick={() => setModal(true)}>
        <FaUserPlus /> Adicionar usuário
      </button>
    
    {
      modal ? (
        <div className="modal-bg">
          <form onSubmit={handleSubmit} className="wrap-modal card-add flex-ctr col">
            <div className="flex-ctr">
              <label>Nome:</label>
              <input type="text" name="name" required
                onChange={event => setName(event.target.value)}
              />
            </div>
            <div className="flex-ctr">
              <label>Email:</label>
              <input type="text" name="email" required
                onChange={event => setEmail(event.target.value)}
              />
            </div>
            <div className="flex-ctr">
              <label>Senha:</label>
              <input type="password" name="pass" required
                onChange={event => setPass(event.target.value)}
              />
            </div>
            <div className='flex-ctr'>
              <label>Confirme a senha</label>
            <input type="password" name="passConfirm" required
                onChange={event => setPassConfirm(event.target.value)}
              />
            </div>
            <div className="flex-ctr">
              <label>Função</label>
              <input type={"text"} required placeholder="Digite a função" />
            </div>
            <div className="flex-ctr">
              <h2>Tipos de usuário</h2>
              <label for={"adm"}>Administrador</label>
              <input type={"radio"} id={"adm"} required />
              <label for={"funcionario"}>Funcionário</label>
              <input type={"radio"} id={"funcionario"} required />
            </div>
            <button type="submit">Adicionar</button>

            <AiFillCloseCircle
              className="close-modal"
              onclick={() => {
                setModal(false);
              }}
            />
          </form>
        </div>
      ) : null
    }
    </>
  )
};

export default UserRegister;