import React from 'react';
import name from "../../config/names.js";
import { Link } from 'react-router-dom';
import { FiPlus, FiPower, FiAlignJustify } from 'react-icons/fi';
import './styles.css';
import { slide as Menu } from 'react-burger-menu';
var styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        top: '36px',
        color: '#fff'
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%',
        left: '0px',
        top: '93px'
    },
    bmMenu: {
        background: '#202431',
        margin: '0px',
        padding: '0px',
        fontSize: '18px',
        fontWeight: 'bold'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '3em'
    },
    bmOverlay: {
        top: '16.4%',
        left: '0px'
    },
}

const items = [
    <Link className='item' to='/home' >Home</Link>,
    <Link className='item' to='/funcionarios' >Funcionarios</Link>,
    <Link className='item' to={'/clientes'}>Clientes</Link>,
    <Link className='item' to='/equipes' >Equipes</Link>,
    <Link className='item' to='/produtos' >Produtos</Link>
];

export default function Home({history}){

    async function handleLogout(e){
        e.preventDefault();
        localStorage.clear();
        history.push('/');
    }

  return (
      <div className='main'>
          <header className='header'>
              <div id="outer-container">
                  <Menu styles={styles} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
                      {items}
                  </Menu>
                  <main id="page-wrap">
                      <FiAlignJustify className='mmen' />
                  </main>
              </div>
              <h3><a className='home' href='/home'>{name}</a></h3>
              <Link className='button' onClick={handleLogout}><FiPower /></Link>
          </header>
          <div>
              <h2 >CervSys</h2>



          </div>
      </div>
  );
}