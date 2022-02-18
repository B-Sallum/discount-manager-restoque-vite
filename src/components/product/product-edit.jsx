import React, { useState, useEffect } from 'react';
import api from '../../auth/api';

import { useProductsContext } from "../../contexts/products-list";
import { useEditContext } from "../../contexts/product-modal";
import Spinner from "../../shared/loaders/spinner";

import Bobo from '../../shared/img/logo-bobo.png';
import Dudalina from '../../shared/img/logo-dudalina.png';
import Individual from '../../shared/img/logo-individual.png';
import John from '../../shared/img/logo-john.png';
import Lelis from '../../shared/img/logo-lelis.png';
import Rosa from '../../shared/img/logo-rosa.png';
import { AiFillCloseCircle } from 'react-icons/ai';
import './styles.css';

const ProductEdit = () => {

  const { loadProducts } = useProductsContext();
  const { editProduct, setEditProduct } = useEditContext();

  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [collection, setCollection] = useState('');
  const [griffe, setGriffe] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [finalPrice, setFinalPrice] = useState('');

  useEffect(() => {
    api.get(`/products/${editProduct}`)
    .then((res) => {
      const product = res.data;
      setCode(product.code);
      setName(product.name);
      setDescription(product.description);
      setCollection(product.collection);
      setGriffe(product.griffe);
      setPrice(product.price);
      setDiscount(product.discount);
      setFinalPrice(product.finalPrice);
    })
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (griffe === '') {
      return alert('Por favor escolha a marca')
    };
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
    await api.patch(`/products/${code}`, newProduct)
      .then(() => {
        loadProducts();
        setModal(false);
      })
      .catch(() => alert('Ocorreu um erro, por favor tente novamente'));
  };

  return (
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
              onChange={e => setCode(e.target.value)}
              value={code}
            />
          </div>

          <div className="div-input">
            <label>Coleção</label>
            <input required type="text"
              onChange={e => setCollection(e.target.value)}
              value={collection}
            />
          </div>
        </div>

        <div className="div-input">
          <label>Nome</label>
          <input required type="text"
            className="product-name"
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="div-input">
          <label>Descrição</label>
          <textarea required type="text"
            onChange={e => setDescription(e.target.value)}
            value={description}
          />
        </div>

        <div className="flex-ctr wrap">
          <div className="div-input">
            <label>Preço</label>
            <input required
              className="input_number"
              type="number"
              step="0.01"
              onChange={e => setPrice(e.target.value)}
              value={price}
            />
          </div>

          <div className="div-input">
            <label>Desconto</label>
            <input required
              className="input_number"
              type="number"
              onChange={e => setDiscount(e.target.value)}
              value={discount}
            />
          </div>

          <div className="div-input">
            <label>Preço final</label>
            <input required
              className="input_number"
              type="number"
              step="0.01"
              onChange={e => setFinalPrice(e.target.value)}
              value={finalPrice}
            />
          </div>
          
        </div>          

        <button type="submit">Adicionar</button>

        <AiFillCloseCircle
          className="close-modal"
          onClick={() => {
            setEditProduct(null);
          }}
        />
      </form>
    </div>
  );
};

export default ProductEdit;
