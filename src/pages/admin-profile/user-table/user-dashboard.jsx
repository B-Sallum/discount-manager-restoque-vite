import React, { useState } from 'react';

// import { useProductsContext } from "../../contexts/products-list";

// import AddProduct from '../product/product-add';
import userDashRow from './dash-row-user';
import Spinner from "../../../shared/loaders/spinner";
import SendExcel from "../product/product-xlsx";

import './styles.css';

const userDashboard = () => {

//   const { products } = useProductsContext(); 
  
  const [search, setSearch] = useState('');

  const product = (user) => {
    if (search === '') {
      return user;
    } else if (
      user.code.includes(search) ||
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.griffe.toLowerCase().includes(search.toLowerCase()) ||
      user.collection.toLowerCase().includes(search.toLowerCase())
    ) {
      return user;
    };
  };

  return (
    <>
      <div className="dash-nav">
        <input type="text" autoFocus
          className="dash-search"
          placeholder="🔎  Busca por Código, Nome, Griffe ou Coleção"
          onChange={(event) => {
            setSearch(event.target.value)
          }}
        />
        
        <AddProduct />
        <SendExcel />
      </div>
      {
        products ? (
          <table>
            <thead className="table-top">
              <tr className="table-top">
                <th className="dash-actions">Ações</th>
                <th className="dash-value">Código</th>
                <th>Nome</th>
                <th className="dash-value">Nome</th>
                <th className="dash-value">Email</th>
                <th className="dash-value">Permissão</th> 
                <th className="dash-griffe">Ativo</th>
                {/* <th>Coleção</th> */}
              </tr>
            </thead>
            <tbody>
              { 
                products.filter(user).reverse().map(user => {
                  return (
                    <DashRow key={user.id}
                      id={user.id}
                      name={user.name}
                      email={user.description}
                      password={user.collection}
                      role={user.griffe}
                    />
                  )
                })
              }
            </tbody>
          </table>
        ) : (
          <Spinner />
        )
      }
    </>
  );
};

export default userDashboard;