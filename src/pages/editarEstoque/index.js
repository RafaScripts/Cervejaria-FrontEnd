import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeftCircle, FiPlus } from 'react-icons/fi';
import api from '../../services/api';
import name from '../../config/names.js';
import './styles.css';
export default function EditarEstoque({ history }) {
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [idProduto, setIdProduto] = useState('');
    const [estoque, setEstoque] = useState('');

  useEffect(() => {
    async function loadProduto(){
      const response = await api.get(`/estoque?id=${localStorage.getItem('idEstoque')}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });

      setEstoque(response.data);
    }
    loadProduto();
  }, []);

  console.log(estoque);

  useEffect(() => {
    async function loadDataValues() {
      

      setNome(estoque[0].nome);
      setQuantidade(estoque[0].quantidade);
      setLocalizacao(estoque[0].localizacao);
      setIdProduto(estoque[0].idProduto);
    }
    loadDataValues();
  }, [estoque]);


    const data = {
        nome,
        localizacao,
        idProduto,
        quantidade: Number(quantidade),
    };

        async function handleSubmit(e){
            e.preventDefault();
    
            try{
                await api.put(`/estoque?id=${localStorage.getItem('idEstoque')}`, data, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                });
                alert('Estoque Atualizado!');
            }catch (e) {
                alert(e);
            }
    
            history.push('/estoque');
        }



        return(
            <div>
                <header className='header'>
                    <h3><a className='home' href='/home'>{name}</a></h3>
                    <Link className='button' to="/estoque"><FiArrowLeftCircle /> Voltar</Link>
                </header>
    
                <h2 className='title'>Editar Estoque</h2>
    
                <form className='form' onSubmit={ handleSubmit }>
                    <input value={nome} onChange={e => setNome(e.target.value)} placeholder={'nome'}/>
                    <input value={quantidade} onChange={e => setQuantidade(e.target.value)} placeholder={'Quantidade'}/>
                    <input value={localizacao} onChange={e => setLocalizacao(e.target.value)} placeholder={'localização'}/>
                    <input value={idProduto} onChange={e => setIdProduto(e.target.value)} placeholder={'produto'}/>
                    <button className='button' type='submit'><FiPlus /> Editar Estoque</button>
                </form>
            </div>
        );








}   

