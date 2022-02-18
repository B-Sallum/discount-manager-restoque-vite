import React from 'react';

import { FaPause, FaPlay, FaEdit } from 'react-icons/fa';
import { useProductContext } from "../../contexts/product-modal";
import { useSwitchContext } from "../../contexts/product-switch";

import './styles.css';

const DashRow = (product) => {

  const { setSwitchProduct } = useSwitchContext();
  const handleSwitch = () => {
    setSwitchProduct(product.code);
  };

  const { setModal, setEdit } = useProductContext();
  const handleEdit = () => {
    setModal(true);
    setEdit(product.code);
  };

  const formatValue = (value) => {
    const valueFormatted = value.toLocaleString("pt-BR", {
      style:"currency", currency:"BRL"
    });
    return valueFormatted;
  };

  return (
    <>
      <tr className="dash-row" key={product.code}>     
        <td className="dash-actions">

          <button className="actions"
            onClick={handleSwitch}
          >
            {
              product.active ? <FaPause /> : <FaPlay />
            }
          </button>
          <button className="actions"
            onClick={handleEdit}>
            <FaEdit />
          </button>         
          
        </td>
        <td className="monospace-font">
          {product.code}
        </td>
        <td>
          {product.name}
        </td>
        <td className="monospace-font price">
          {formatValue(product.price)}
        </td>
        <td>
          {product.discount} %
        </td>
        <td className="monospace-font price">
          {formatValue(product.finalPrice)}
        </td>
        <td>
          {product.griffe}
        </td>
        <td>
          {product.collection}
        </td>
      </tr>
    </>
  );
};

export default DashRow;
