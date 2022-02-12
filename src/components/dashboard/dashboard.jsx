import React, { useState } from 'react';
import { useProductsContext } from "./dash-context";

import AddProduct from '../product/product-add-modal';
import DashRow from './dash-row';
import { FaSpinner } from "react-icons/fa";

import './styles.css';

const Dashboard = () => {

  const { products } = useProductsContext();
  
  const [search, setSearch] = useState('');

  const product = (product) => {
    if (search === '') {
      return product;
    } else if (
      product.code.includes(search) ||
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.griffe.toLowerCase().includes(search.toLowerCase()) ||
      product.collection.toLowerCase().includes(search.toLowerCase())
    ) {
      return product;
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
      </div>
      {
        products ? (
          <table>
            <thead className="table-top">
              <tr className="table-top">
                <th className="dash-value">Código</th>
                <th>Nome</th>
                <th className="dash-value">Valor</th>
                <th className="dash-value">% OFF</th>
                <th className="dash-value">Valor OFF</th> 
                <th className="dash-griffe">Griffe</th>
                <th className="dash-griffe">Coleção</th>
                <th className="dash-actions">Ações</th>
              </tr>
            </thead>
            <tbody>
              { 
                products.filter(product).reverse().map(product => {
                  return (
                    <DashRow key={product.code}
                      code={product.code}
                      name={product.name}
                      description={product.description}
                      collection={product.collection}
                      griffe={product.griffe}
                      stock={product.stock}
                      active={product.active}
                      price={product.price}
                      discount={product.discount}
                      finalPrice={product.finalPrice}
                    />
                  )
                })
              }
            </tbody>
          </table>
        ) : (
          <div className="flex-ctr margin-spinner">
            <div className="flex-ctr spinner">
              <FaSpinner className="rotate-scale-up" />  Carregando dados
            </div>
          </div>
        )
      }
    </>
  );
};

export default Dashboard;
