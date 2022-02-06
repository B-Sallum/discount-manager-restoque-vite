import React, { useState } from "react";
import ModalAdd from "../product-add-form/product-add-form";
import "./styles.css"

const AddProduct = () => {
  const [showFnAdd, setShowFnAdd] = useState(false);

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