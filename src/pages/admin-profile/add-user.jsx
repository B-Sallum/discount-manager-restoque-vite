import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import api from "../../auth/api";
import "./styles.css";

const AddUser = () => {
  const [modalUser, setModalUser] = useState(false);

  //adicionar onChange nos campos HTML
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [role, setRole] = useState("");

  //confirmar se pass é igual a passConfirm mas não enviar ao banco (apenas verificar por aqui)
  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const pass = event.target.pass.value;
    const passConfirm = event.target.passConfirm.value;
    const role = event.target.role.value;

    const newUser = {
      name: name,
      email: email,
      pass: pass,
      passConfirm: passConfirm,
      role: role,
      active: true,
    };

    if (name === "" || email === "" || pass === "") {
      return alert("Complete os dados corretamente");
    }

    if (pass != passConfirm) {
      return alert("As senhas não conferem");
    }
    await api
      .post("/adm", newUser)
      .then(() => {
        setModalUser(false);
      })
      .catch(() => alert("Ocorreu um erro, por favor tente novamente"));
  };

  //os atributos RADIO não estão funcionais
  //o modal não está fechando
  return (
    <>
      <button className="flex-ctr" onClick={() => setModalUser(true)}>
        <FaUserPlus /> Adicionar usuário
      </button>
      {modalUser ? (
        <div className="modal-bg">
          <form
            className="wrap-modal card-add flex-ctr col"
            onSubmit={handleSubmit}
          >
            {/* Padronizar os inputs para favorecer a manutenção */}
            <div className="flex-ctr">
              <label>Nome:</label>
              <input
                required
                type={"text"}
                placeholder="Digite o nome"
                name="name"
              />
            </div>

            <div className="flex-ctr">
              <label>Email:</label>
              <input
                required
                type={"text"}
                placeholder="Digite o email corporativo"
                name="email"
              />
            </div>
            <div className="flex-ctr">
              <label>Senha:</label>
              <input
                required
                type={"password"}
                placeholder="Digite a senha"
                name="pass"
              />
            </div>
            <div className="flex-ctr">
              <label>Confirmação:</label>
              <input
                required
                type={"password"}
                placeholder="Confirme a senha"
                name="passConfirm"
              />
            </div>
            {/* <div className="flex-ctr">
              <label>Função</label>
              <input
                required
                type={"text"}
                placeholder="Digite a função"
                name="role"
              />
            </div> */}
            <div className="flex-ctr">
              <h2>
                <label>Tipos de usuário</label>
              </h2>
              <select name="role">
                <option value="Administrador">Administrador</option>
                <option value="Funcionário">Funcionário</option>
              </select>
            </div>
            <button className="btn-add" type="submit">
              Adicionar
            </button>

            <AiFillCloseCircle
              className="close-modal"
              onClick={() => {
                setName('');
                setEmail('');
                setPass('');
                setPassConfirm('');
                setRole(false);
                setModalUser(false);
              }}
            />
          </form>
        </div>
      ) : null}
    </>
  );
};

export default AddUser;
