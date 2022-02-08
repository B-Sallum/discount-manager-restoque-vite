import React, { useState } from "react";
import ModalAdd from "./product-add";
import "./styles.css"

const AddProduct = () => {
  const [showFnAdd, setShowFnAdd] = useState(true);

  return (
    <>
      <button onClick={() => setShowFnAdd(true)}>
        Adicionar produto
      </button>
      <ModalAdd showFnAdd={showFnAdd} setShowFnAdd={setShowFnAdd} />
    </>
  );
};

export default AddProduct;