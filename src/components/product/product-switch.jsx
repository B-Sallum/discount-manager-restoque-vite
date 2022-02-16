import React, { useEffect } from 'react';
import { useSwitchContext } from "../../contexts/switch-product-context";
import api from "../../auth/api";

import { AiFillCloseCircle } from 'react-icons/ai';

const ProductSwitch = () => {

  const { switchProduct, setSwitchProduct } = useSwitchContext();

  let product = '';

  useEffect(async () => {
    const getProduct = await api.get(`products/${switchProduct}`);
    product = getProduct.data;
    console.log(product);
  }, []);

  return (
    <div className='modal-bg'>
      <div className='wrap-modal'>


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
