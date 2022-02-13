import React from "react";
import api from "../../auth/api";
import { FaFileExcel } from "react-icons/fa";

const SendExcel = () => {

  

  return (
    <>
      <label className="flex-ctr button"
        htmlFor="select-file">
          <FaFileExcel /> Enviar tabela
      </label>
      <input id="select-file"
        type="file"
        accept=".xls, .xlsx"
        onChange={(event) => handleFile(event)}
      />
    </>
  )
}

export default SendExcel;