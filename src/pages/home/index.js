import React from 'react';
import name from "../../config/names.js";
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import './styles.css';

export default function Home(){
  return (
      <div className='main'>
          <header className='header'>
              <h3><a className='home' href='/'>{name}</a></h3>
              <Link className='button' to="/funcionario/create"><FiPlus /> Cadastrar Funcionário</Link>
          </header>
          <div>
              <h2 className='title'>CervSys</h2>



          </div>
      </div>
  );
}