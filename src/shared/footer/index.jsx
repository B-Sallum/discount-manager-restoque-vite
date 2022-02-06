import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Footer = () => {

  return (
    <div className='footer'>
      <h5>
          Site desenvolvido pela 

        <Link to={'/about'} className='link-golden'>
          &nbsp;Equipe 06  
        </Link>
          &nbsp;- Classe 007 @&nbsp;
        <a href='https://blueedtech.com.br/quem-somos/'
        target="_blank" rel="noopener noreferrer"
        className='link-blue'
        >
          Blue Edtech 
        </a>
          &nbsp;para&nbsp;
        <a href='https://www.restoque.com.br/#quem-somos'
        target="_blank" rel="noopener noreferrer"
        className='link-golden'
        >
          Restoque&reg;
        </a>
          &nbsp;Todos os direitos reservados
      </h5>
    </div>
  );
};

export default Footer;