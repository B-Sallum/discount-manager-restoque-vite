import React, { useState, useEffect } from "react";
import api from "../../auth/api";
import { FaFileExcel } from "react-icons/fa";
import { AiFillCloseCircle } from 'react-icons/ai';

const SendExcel = () => {

  const [modal, setModal] = useState(false);
  const [file, setFile] = useState('');

  useEffect(() => {
    console.log(file);
  }, [file]);

  const sendFile = (e) => {
    e.preventDefault();
    api.post("/files/upload", file, { "Content-Type": "multipart/form-data" });
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
                <form className="flex-ctr"
                  name="file"
                  onSubmit={(e) => sendFile(e)}>
                  <label className="flex-ctr button"
                    htmlFor="select-file">
                  </label>
                  <input
                    className="flex-ctr col"
                    type="file"
                    name="file"
                    accept=".xls, .xlsx"
                    onChange={(event) => setFile(event.target.files[0])}
                  />
                  {
                    file !== '' && (
                      <button type="submit">
                        Enviar
                      </button>
                    )
                  }
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
