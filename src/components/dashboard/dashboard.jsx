import React, { useState } from 'react';

import { useProductsContext } from "../../contexts/products-list";

import Product from '../product/product';
import DashRow from './dash-row';
import Spinner from "../../shared/loaders/spinner";
import SendExcel from "../product/product-xlsx";

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
        
        <Product />
        <SendExcel />
      </div>
      {
        products ? (
          <table>
            <thead>
              <tr>
                <th className="dash-actions">Ações</th>
                <th className="dash-value dash-fix">Código</th>
                <th>Nome</th>
                <th className="dash-value">Valor</th>
                <th className="dash-value">% OFF</th>
                <th className="dash-value">Valor OFF</th> 
                <th className="dash-fix">Griffe</th>
                <th>Coleção</th>
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
          <Spinner />
        )
      }
    </>
  );
};

export default Dashboard;
