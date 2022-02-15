import React, { useState, useEffect } from "react";
import api from "../../auth/api";
import { FaFileExcel } from "react-icons/fa";
import { AiFillCloseCircle } from 'react-icons/ai';

const SendExcel = () => {

  const [modal, setModal] = useState(false);
  const [file, setFile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file)
    api.post("/upload/sendfile", formData);
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
