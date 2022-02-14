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
                <label className="flex-ctr button"
                  htmlFor="select-file">
                </label>
                <input
                  className="flex-ctr col"
                  type="file"
                  accept=".xls, .xlsx"
                  onChange={(event) => setFile(event.target.files[0])}
                />
                {
                  file !== '' && (
                    <button>
                      Enviar
                    </button>
                  )
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
