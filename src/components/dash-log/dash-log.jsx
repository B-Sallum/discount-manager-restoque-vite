import React, { useState, useEffect } from 'react';

import { AiFillCloseCircle } from "react-icons/ai";
import api from "../../auth/api";
import LogRow from "./dash-log-row";

const DashLogs = () => {
  const [modal, setModal] = useState('');

  const [logs, setLogs] = useState([]);

  useEffect(() => {
    api.get('/users/logs')
    .then((res) => {
      setLogs(res.data)
    });
  }, []);

  return (
    <>
      <button className="flex-ctr" onClick={() => setModal(true)}>
        Mostrar Logs
      </button>
    {
      modal ? (
        <div className="modal-bg">
          <div className="wrap-modal card-add flex-ctr col">
          <table>
            <thead className="table-top">
              <tr className="table-top">
                <th className="dash-actions">Log ID</th>
                <th className="dash-value">Usuário</th>
                <th>Produto</th>
                <th className="dash-value">Campo alterado</th>
                <th className="dash-value">Valor original</th>
                <th>Valor novo</th>
              </tr>
            </thead>
            <tbody>
            {
              logs.map(log => {
                return (
                  
                  <LogRow
                    key={log.id}
                    id={log.id}
                    userID={log.user_id}
                    prodID={log.product_id}
                    alter={log.alter_field}
                    original={log.original}
                    new={log.new}
                  />
                  
                )
              })
            }
            </tbody>
          </table>

          <AiFillCloseCircle
              className="close-modal"
              onClick={() => {
                setModal(false);
              }}
          />
          </div>
        </div>
      ) : null
    }    
    </>
  )
}

export default DashLogs;
