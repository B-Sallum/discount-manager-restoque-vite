import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import api from "../../auth/api";
import "./styles.css";

const AddUser = () => {
  const [user, setUser] = useState(false);

  const newUser = {
    name: nome,
    email: email,
    pass: pass,
    role: role,
    active: active,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (nome === "" || email === "" || pass === "") {
      return alert("Complete os dados corretamente");
    }
    await api
      .post("/adm", newUser)
      .then(() => {
        setUser(false);
      })
      .catch(() => alert("Ocorreu um erro, por favor tente novamente"));
  };

  return (
    <>
      <button className="flex-ctr" onClick={() => setUser(true)}>
        <FaUserPlus /> Adicionar usuário
      </button>
      {user ? (
        <div className="modal-bg">
          <form
            className="wrap-modal card-add flex-ctr col"
            onSubmit={handleSubmit}
          >
            <div className="flex-ctr">
              <label>Nome:</label>
              <input type={"text"} required placeholder="Digite o nome" />
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
                setUser(false);
              }}
            />
          </form>
        </div>
      ) : null}
    </>
  );
};

export default AddUser;