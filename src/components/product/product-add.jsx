import React from 'react';
import { useState } from 'react';

import Bobo from '../../shared/img/logo-bobo.png';
import Dudalina from '../../shared/img/logo-dudalina.png';
import Individual from '../../shared/img/logo-individual.png';
import John from '../../shared/img/logo-john.png';
import Lelis from '../../shared/img/logo-lelis.png';
import Rosa from '../../shared/img/logo-rosa.png';
import { AiFillCloseCircle } from 'react-icons/ai';
import './styles.css';

const ModalAdd = ({ showFnAdd, setShowFnAdd }) => {

  const [griffe, setGriffe] = ('');
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [collection, setCollection] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [finalPrice, setFinalPrice] = useState('');

  const handleGriffe = () => {
    
  }

  return (
    <>
      {showFnAdd ? (
        <div className='modal-bg'>
          <form className='wrap-modal card-add flex-ctr col'>
            <div className='flex-ctr griffe wrap'>
              <img src={Bobo} alt='Logo Bo.Bô'
                className='img-input' id='bobo'
                onClick={handleGriffe(1)}
              />
              <img src={Dudalina} alt='Logo Dudalina'
                className='img-input' id='dudalina'
                onClick={handleGriffe(2)}
              />
              <img src={Individual} alt='Logo Individual'
                  className='img-input' id='individual'
                  onClick={handleGriffe(3)}
              />
              <img src={John} alt='Logo John John'
                className='img-input' id='john'
                onClick={handleGriffe(4)}
              />
              <img src={Lelis} alt='Logo Le Lis Blanc'
                className='img-input' id='lelis'
                onClick={handleGriffe(5)}
              />
              <img src={Rosa} alt='Logo Rosa Chá'
                className='img-input' id='rosa'
                onClick={handleGriffe(6)}
              />
            </div>
            <div className='flex-ctr wrap'>
              <div className='div-input'>
                <label>Código</label>
                <input required
                  type='text'
                  placeholder='12.12.1234'
                  
                />
              </div>
            <div className='div-input'>
              <label>Coleção</label>
              <input required
                type='text'
                
              />
            </div>
            </div>

            <div className='div-input'>
              <label>Nome</label>
              <input required
              className='product-name'
                type='text'
                placeholder='BODY BO.BÔ TRICOT ISADORA FEMININO'
                
              />
            </div>

            {/* <div className='flex-ctr'>
              <p>Em estoque:</p>
              <div>
                <input className='yes' type='radio' value='sim' />
                <label htmlFor='yes'>Sim</label>
              </div>
              <div>
                <input className='no' type='radio' value='nao' />
                <label htmlFor='no'>Não</label>
              </div>
            </div>
            <div className='flex-ctr'>
              <p>Produto ativo:</p>
              <div>
                <input className='yes' type='radio' value='sim' />
                <label htmlFor='yes1'>
                  Sim
                </label>
              </div>
              <div>
                <input className='no' type='radio' value='nao' />
                <label htmlFor='no1'>
                  Não
                </label>
              </div>
            </div> */}
            <div className='div-input'>
              <label>Descrição</label>
              <textarea required
                type='text'
                placeholder='Confeccionado em tricot com detalhes vazados, o Body possui caimento ajustado, decote um ombro só, pala frontal com leve babado, manga longa e parte inferior com fechamento por botões de pressão. '
                
              />
            </div>
            <div className='flex-ctr wrap'>
              <div className='div-input'>
                <label>Preço</label>
                <input required
                  className='input_number'
                  type='number'
                  placeholder='Valor original'
                  
                />
              </div>
              <div className='div-input'>
                <label>Desconto</label>
                <input required
                  className='input_number'
                  type='number'
                  placeholder='Desconto'
                  
                />
              </div>
              <div className='div-input'>
                <label>Preço final</label>
                <input required
                  className='input_number'
                  type='number'
                  placeholder='Valor com desconto'
                  
                />
              </div>
            </div>            
            <button type='submit'>Adicionar</button>
            <AiFillCloseCircle
              aria-label='close modal'
              className='close-modal'
              onClick={() => setShowFnAdd(false)}
            />
          </form>
        </div>
      ) : null}
    </>
  );
};

export default ModalAdd;
