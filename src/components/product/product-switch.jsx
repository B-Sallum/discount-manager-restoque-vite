import React, { useState, useEffect } from 'react';
import { useSwitchContext } from "../../contexts/switch-product-context";
import api from "../../auth/api";

import { AiFillCloseCircle } from 'react-icons/ai';

const ProductSwitch = () => {

  const { switchProduct, setSwitchProduct } = useSwitchContext();

  const [productCode, setProductCode] = useState('');
  const [productName, setProductName] = useState('');

  let product = '';

  useEffect(async () => {
    const getProduct = await api.get(`products/${switchProduct}`);
    product = getProduct.data;
    setProductCode(product.code);
    setProductName(product.name);
  }, []);

  return (
    <div className='modal-bg'>
      <div className='wrap-modal'>
        {productCode}
        {productName}

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
