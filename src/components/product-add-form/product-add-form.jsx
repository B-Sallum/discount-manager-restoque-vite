import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import "./styles.css";

const ModalAdd = ({ showFnAdd, setShowFnAdd }) => {
  return (
    <>
      {showFnAdd ? (
        <div className="modal-bg">
          <form className="wrap-modal card-add flex-ctr col">
            <AiFillCloseCircle
              aria-label="close modal"
              className="close-modal"
              onClick={() => setShowFnAdd(false)}
            />
            <div>
              <label>Código</label>
              <input
                type="text"
                placeholder="12.12.1234"
                required
              />
            </div>
            <div>
              <label>Nome</label>
              <input
                type="text"
                placeholder="BODY BO.BÔ TRICOT ISADORA FEMININO"
                required
              />
            </div>
            <div>
              <label>Descrição</label>
              <input
                type="text"
                placeholder="Confeccionado em tricot com detalhes vazados, o Body possui caimento ajustado, decote um ombro só, pala frontal com leve babado, manga longa e parte inferior com fechamento por botões de pressão. "
                required
              />
            </div>
            <div>
              <label>Coleção</label>
              <input
                type="text"
                required
              />
            </div>
            <div>
              <label>Griffe</label>
              <select className="flex-ctr" name="griffe">
                <option value="Bo.Bô">Bo.Bô</option>
                <option value="Dudalina">Dudalina</option>
                <option value="Individual">Individual</option>
                <option value="John John">John John</option>
                <option value="Le Lis Blanc">Le Lis Blanc</option>
                <option value="Rosa Chá">Rosa Chá</option>
              </select>
            </div>
            <div className="flex-ctr">
              <p>Em estoque:</p>
              <div>
                <input className="yes" type="radio" value="sim" />
                <label htmlFor="yes">Sim</label>
              </div>
              <div>
                <input className="no" type="radio" value="nao" />
                <label htmlFor="no">Não</label>
              </div>
            </div>
            <div className="flex-ctr">
              <p>Produto ativo:</p>
              <div>
                <input className="yes" type="radio" value="sim" />
                <label htmlFor="yes1">
                  Sim
                </label>
              </div>
              <div>
                <input className="no" type="radio" value="nao" />
                <label htmlFor="no1">
                  Não
                </label>
              </div>
            </div>
            <div className='flex-ctr'>
              <div className='flex-ctr col'>
                <label>Preço</label>
                <input
                  className="input_number"
                  type="number"
                  placeholder="Valor original"
                  required
                />
              </div>
              <div className='flex-ctr col'>
                <label>Desconto</label>
                <input
                  className="input_number"
                  type="number"
                  placeholder="Desconto"
                  required
                />
              </div>
              <div className='flex-ctr col'>
                <label>Preço final</label>
                <input
                  className="input_number"
                  type="number"
                  placeholder="Valor com desconto"
                  required
                />
              </div>
            </div>            
            <button type="submit">Adicionar</button>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default ModalAdd;
