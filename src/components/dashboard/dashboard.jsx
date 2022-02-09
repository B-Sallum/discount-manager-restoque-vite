import React from 'react';
import { useEffect, useState } from 'react';

import api from '../../auth/api';
import AddProduct from '../product/product-add-modal';
import DashRow from './dash-row';

import './styles.css';

const Dashboard = () => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.token;
    const config = {
      headers: { Authorization: `Bearer ${token}`}
    }

    api
      .get('/products', config)
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
        />
        <AddProduct />
      </div>
      <table>
        <thead className="table-top">
          <tr className="table-top">
            <th>Código</th>
            <th>Nome</th>
            <th>Valor</th>
            <th>% OFF</th>
            <th>Valor OFF</th> 
            <th>Griffe</th>
            <th>Coleção</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          { 
            products.filter(product).map(product => {
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