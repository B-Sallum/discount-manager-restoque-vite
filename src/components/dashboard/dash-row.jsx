import React from 'react';

import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import './styles.css';

const DashRow = (product) => {
  return (
    <tr className="dash-row" key={product.code}>     
      <td className="monospace-font">
        {product.code}
      </td>
      <td>
        {product.name}
      </td>
      <td className="monospace-font">
        {product.price}
      </td>
      <td>
        {product.discount}
      </td>
      <td className="monospace-font">
        {product.finalPrice}
      </td>
      <td>
        {product.griffe}
      </td>
      <td>
        {product.collection}
      </td>
      <td>
        <button className="actions">
          <FaEdit />
        </button>
        <button className="actions">
          <FaTrashAlt />
        </button>
      </td>
    </tr>
  );
};

export default DashRow;
