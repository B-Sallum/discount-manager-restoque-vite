import React, { useState, useEffect } from 'react';

import api from "../../auth/api";
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaPause, FaPlay } from 'react-icons/fa';
import { useProductsContext } from "../../contexts/products-list";
import { useSwitchContext } from "../../contexts/product-switch";
import Spinner from "../../shared/loaders/spinner";

const ProductSwitch = () => {

  const { switchProduct, setSwitchProduct } = useSwitchContext();
  const { loadProducts } = useProductsContext();

  const [productCode, setProductCode] = useState('');
  const [productName, setProductName] = useState('');
  const [productActive, setProductActive] = useState('');

  let product = '';

  useEffect(async () => {
    const getProduct = await api.get(`products/${switchProduct}`);
    product = getProduct.data;
    setProductCode(product.code);
    setProductName(product.name);
    if (product.active) {
      setProductActive('ATIVO');
    } else {
      setProductActive('PAUSADO');
    }
  }, []);

  const disableProduct = () => {
    api.patch(`/products/${productCode}`, { active: false })
      .then(() => {
        setSwitchProduct(null);
        loadProducts();
      });
  };

  const enableProduct = () => {
    api.patch(`/products/${productCode}`, { active: true })
      .then(() => {
        setSwitchProduct(null);
        loadProducts();
      });
  };

  return (
    <div className="modal-bg">
      <div className="wrap-modal card-add flex-ctr">
        {
          productCode === '' ? (
            <Spinner />
          ) : (
        <div className="flex-ctr col">
          <div>
            O produto
          </div>
          <div>
            {productCode} - {productName}
          </div>
          <div>
            Está {productActive} no momento
          </div>
        <div>
          O que deseja fazer?
        </div>
          <div className="flex-ctr">
            <button onClick={enableProduct}>
              <FaPlay /> <h3>Ativar</h3>
            </button>
            <button onClick={disableProduct}>
              <FaPause /> <h3>Pausar</h3>
            </button>
          </div>
        </div>
          )
        }
        <AiFillCloseCircle
          className="close-modal"
          onClick={() => {
            setSwitchProduct(null);
          }}
        />
      </div>
    </div>
  )
}

export default ProductSwitch;
