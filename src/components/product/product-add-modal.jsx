import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

import ModalAdd from "./product-add";
import "./styles.css"

const AddProduct = () => {
  const [showFnAdd, setShowFnAdd] = useState(false);

  return (
    <>
      <button className="flex-ctr" onClick={() => setShowFnAdd(true)}>
        <FaPlus /> Adicionar produto
      </button>
      <ModalAdd showFnAdd={showFnAdd} setShowFnAdd={setShowFnAdd} />
    </>
  );
};

export default AddProduct;
