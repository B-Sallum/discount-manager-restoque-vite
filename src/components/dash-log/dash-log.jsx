import React, { useState, useEffect } from 'react';

import api from "../../auth/api";
import LogRow from "./dash-log-row";

import "./styles.css";

const DashLogs = () => {

  const [logs, setLogs] = useState([]);

  useEffect(() => {
    api.get('/users/logs')
    .then((res) => {
      setLogs(res.data)
    });
  }, []);

  return (
    <>
      <div className="flex-ctr col dash-log scroll">
        <table>
          <thead className="table-top">
            <tr className="table-top">
              <th>Log ID</th>
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
      </div>
   
    </>
  )
}

export default DashLogs;
