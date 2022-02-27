import React, { useState } from "react";

import api from "../../auth/api";
import { FaFileExcel } from "react-icons/fa";
import { AiFillCloseCircle } from 'react-icons/ai';
import { useProductsContext } from "../../contexts/products-list";
import Spinner from "../../shared/loaders/spinner";

const SendExcel = () => {

  const { loadProducts } = useProductsContext();

  const [modal, setModal] = useState(false);
  const [file, setFile] = useState('');
  const [spinner, setSpinner] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSpinner(true);
    const excelFile = new FormData();
    excelFile.append("file", file)
    api.post("/file/upload", excelFile)
      .then(() => {
        setSpinner(false);
        setModal(false);
        setFile('');
        loadProducts();
      });
  };

  return (
    <>
      <button className="flex-ctr"
        onClick={() => setModal(true)}>
        <FaFileExcel /> Enviar tabela
      </button>
        {
          modal ? (
            <div className="modal-bg">
              <div className="wrap-modal card-add flex-ctr col">
                <form className="flex-ctr" onSubmit={handleSubmit}>
                  <input
                    className="flex-ctr col"
                    type="file"
                    name="file"
                    accept=".xls, .xlsx"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  <button type="submit">
                    Enviar
                  </button>
                </form>
                {
                  spinner ? <Spinner /> : null
                }
                <AiFillCloseCircle
                  className="close-modal"
                  onClick={() => {
                    setModal(false);
                    setFile('');
                  }}
                />
              </div>
            </div>
          ) : null
        }
    </>
  )
}

export default SendExcel;
