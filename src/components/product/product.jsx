import React, { useState, useEffect } from 'react';
import api from '../../auth/api';

import { useProductsContext } from "../../contexts/products-list";
import { useProductContext } from "../../contexts/product-modal";

import Bobo from '../../shared/img/logo-bobo.png';
import Dudalina from '../../shared/img/logo-dudalina.png';
import Individual from '../../shared/img/logo-individual.png';
import John from '../../shared/img/logo-john.png';
import Lelis from '../../shared/img/logo-lelis.png';
import Rosa from '../../shared/img/logo-rosa.png';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaPlus } from "react-icons/fa";
import './styles.css';

const Product = () => {

  const [modal, setModal] = useState(false);
  const { loadProducts } = useProductsContext();
  const { product, setProduct, edit, setEdit } = useProductContext();

  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [collection, setCollection] = useState('');
  const [griffe, setGriffe] = useState('');
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  const calcFinalPrice = (discountValue) => {
    const newFinalPrice = (price / 100) * (100 - discountValue);
    setFinalPrice(newFinalPrice);
  };
 
  useEffect(() => {
    if (product) {
      setCode(product.code);
      setName(product.name);
      setDescription(product.description);
      setCollection(product.collection);
      setGriffe(product.griffe);
      setPrice(product.price);
      setDiscount(product.discount);
      setFinalPrice(product.finalPrice);
    }
  }, [product]);

  console.log(`product ` + product);
  console.log(`modal ` + modal);
  console.log(`edit ` + edit);

  const newProduct = {
    code: code,
    name: name,
    description: description,
    collection: collection,
    griffe: griffe,
    stock: true,
    active: true,
    price: parseFloat(price),
    discount: parseFloat(discount),
    finalPrice: parseFloat(finalPrice)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (griffe === '') {
      return alert('Por favor escolha a marca')
    };
    await api.post('/products', newProduct)
      .then(() => {
        loadProducts();
        setModal(null);
      })
      .catch(() => alert('Ocorreu um erro, por favor tente novamente'));
  };

  return (
    <>
      <button className="flex-ctr" onClick={() => setModal(true)}>
        <FaPlus /> Adicionar produto
      </button>
      {
        modal || edit ? (
          <div className="modal-bg">
            <form className="wrap-modal card-add flex-ctr col"
            onSubmit={handleSubmit}>

              <div className="flex-ctr griffe wrap">
                <img src={Bobo} alt="Logo Bo.Bô"
                  className="img-input"
                  onClick={() => setGriffe("Bo.Bô")}
                  id={`${griffe === "Bo.Bô" ? "selected" : null}`}
                />

                <img src={Dudalina} alt="Logo Dudalina"
                  className="img-input"
                  onClick={() => setGriffe("Dudalina")}
                  id={`${griffe === "Dudalina" ? "selected" : null}`}
                />

                <img src={Individual} alt="Logo Individual"
                    className="img-input"
                    onClick={() => setGriffe("Individual")}
                    id={`${griffe === "Individual" ? "selected" : null}`}
                />

                <img src={John} alt="Logo John John"
                  className="img-input"
                  onClick={() => setGriffe("John John")}
                  id={`${griffe === "John John" ? "selected" : null}`}
                />

                <img src={Lelis} alt="Logo Le Lis Blanc"
                  className="img-input"
                  onClick={() => setGriffe("Le Lis Blanc")}
                  id={`${griffe === "Le Lis Blanc" ? "selected" : null}`}
                />

                <img src={Rosa} alt="Logo Rosa Chá"
                  className="img-input"
                  onClick={() => setGriffe("Rosa Chá")}
                  id={`${griffe === "Rosa Chá" ? "selected" : null}`}
                />
              </div>

              <div className="flex-ctr wrap">
                <div className="div-input">
                  <label>Código</label>
                  <input required type="text"
                    placeholder="12.12.1234"
                    onChange={e => setCode(e.target.value)}
                    value={edit ? code : null}
                  />
                </div>

                <div className="div-input">
                  <label>Coleção</label>
                  <input required type="text"
                    onChange={e => setCollection(e.target.value)}
                    value={edit ? collection : null}
                  />
                </div>
              </div>

              <div className="div-input">
                <label>Nome</label>
                <input required type="text"
                  className="product-name"
                  placeholder="BODY BO.BÔ TRICOT ISADORA FEMININO"
                  onChange={e => setName(e.target.value)}
                  value={edit ? name : null}
                />
              </div>

              <div className="div-input">
                <label>Descrição</label>
                <textarea required type="text"
                  placeholder="Confeccionado em tricot com detalhes vazados, o Body possui caimento ajustado, decote um ombro só, pala frontal com leve babado, manga longa e parte inferior com fechamento por botões de pressão. "
                  onChange={e => setDescription(e.target.value)}
                  value={edit ? description : null}
                />
              </div>

              <div className="flex-ctr wrap">
                <div className="div-input">
                  <label>Preço</label>
                  <input required
                    className="input_number"
                    type="number"
                    step="0.01"
                    placeholder="Valor original"
                    onChange={e => setPrice(e.target.value)}
                    value={edit ? price : null}
                  />
                </div>

                <div className="div-input">
                  <label>Desconto</label>
                  <input required
                    className="input_number"
                    type="number"
                    placeholder="Desconto"
                    max="50"
                    onChange={
                      e => {
                        setDiscount(e.target.value);
                        calcFinalPrice(e.target.value);
                      }}
                    value={edit ? discount : null}
                  />
                </div>

                <div className="div-input">
                  <label>Preço final</label>
                  <input required
                    className="input_number"
                    type="number"
                    step="0.01"
                    placeholder="Valor com desconto"
                    onChange={e => setFinalPrice(e.target.value)}
                    value={edit ? finalPrice : null}
                  />
                </div>
                
              </div>          

              <button type="submit">Adicionar</button>

              <AiFillCloseCircle
                className="close-modal"
                onClick={() => {
                  setCode('');
                  setName('');
                  setDescription('');
                  setCollection('');
                  setGriffe('');
                  setPrice('');
                  setDiscount('');
                  setFinalPrice('');
                  setEdit(null);
                  setModal(false);
                  setProduct(undefined);
                }}
              />
            </form>
          </div>
        ) : null
      }
    </>
  );
};

export default Product;
