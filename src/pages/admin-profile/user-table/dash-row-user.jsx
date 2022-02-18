import React from 'react';

import { FaPause, FaPlay, FaEdit } from 'react-icons/fa';
// import { useEditContext } from "../../contexts/product-edit";
// import { useSwitchContext } from "../../contexts/product-switch";

import './styles.css';

const userDashRow = (user) => {

//   const { setSwitchProduct } = useSwitchContext();
//   const handleSwitch = () => {
//     setSwitchProduct(user.id);
//   };

//   const { setEditProduct } = useEditContext();
//   const handleEdit = () => {
//     setEditProduct(user.id);
//   };

//   const formatValue = (value) => {
//     const valueFormatted = value.toLocaleString("pt-BR", {
//       style:"currency", currency:"BRL"
//     });
//     return valueFormatted;
//   };

  return (
    <>
      <tr className="dash-row" key={user.id}>     
        <td className="dash-actions">

          <button className="actions"
            // onClick={handleSwitch}
          >
            {
              user.active ? <FaPause /> : <FaPlay />
            }
          </button>
          <button className="actions"
            >
            <FaEdit />
          </button>         
          
        </td>
        <td className="monospace-font">
          {user.id}
        </td>
        <td>
          {user.name}
        </td>
        <td className="monospace-font price">
          {formatValue(user.price)}
        </td>
        <td>
          {user.email} 
        </td>
        <td className="monospace-font price">
          
        </td>
        <td>
          {user.role}
        </td>
        <td>
          {user.active}
        </td>
      </tr>
    </>
  );
};

export default userDashRow;