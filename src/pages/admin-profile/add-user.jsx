import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import api from "../../auth/api";
import "./styles.css";

const AddUser = () => {

  const [modal, setModal] = useState(false);

  //adicionar onChange nos campos HTML
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [passConfirm, setPassConfirm] = ('');
  const [role, setRole] = useState('');

  const newUser = {
    name: name,
    email: email,
    pass: pass,
    role: role,
    active: true,
  };

  //confirmar se pass é igual a passConfirm mas não enviar ao banco (apenas verificar por aqui)
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name === "" || email === "" || pass === "") {
      return alert("Complete os dados corretamente");
    }
    await api
      .post("/adm", newUser)
      .then(() => {
        setModal(false);
      })
      .catch(() => alert("Ocorreu um erro, por favor tente novamente"));
  };

  //os atributos RADIO não estão funcionais
  //o modal não está fechando
  return (
    <>
      <button className="flex-ctr" onClick={() => setModal(true)}>
        <FaUserPlus /> Adicionar usuário
      </button>
      {
        modal ? (
          <div className="modal-bg">
            <form
              className="wrap-modal card-add flex-ctr col"
              onSubmit={handleSubmit}
            >
              {/* Padronizar os inputs para favorecer a manutenção */}
              <div className="flex-ctr">
                <label>Nome:</label>
                <input required
                  type={"text"}
                  placeholder="Digite o nome"
                />
              </div>

              <div className="flex-ctr">
                <label>Email:</label>
                <input
                  type={"text"}
                  required
                  placeholder="Digite o email corporativo"
                />
              </div>
              <div className="flex-ctr">
                <label>Senha:</label>
                <input type={"password"} required placeholder="Digite a senha" />
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
              <buton type="submit">Adicionar</buton>

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
  );
};

export default AddUser;