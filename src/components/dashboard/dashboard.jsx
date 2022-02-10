import React from 'react';
import { useEffect, useState } from 'react';

import api from '../../auth/api';
import AddProduct from '../product/product-add-modal';
import DashRow from './dash-row';

import './styles.css';

const Dashboard = () => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get('/products')
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

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
          onChange={(event) => {
            setSearch(event.target.value)
          }}
          placeholder=""
        />
        <AddProduct />
      </div>
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
    </>
  );
};

export default Dashboard;
