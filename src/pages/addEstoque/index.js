import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeftCircle, FiPlus } from 'react-icons/fi';
import api from '../../services/api';
import name from '../../config/names.js';
import './styles.css';

export default function AddEstoque({ history }) {
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [DataVencimento, setDtVencimento] = useState('');
    const [idProduto, setIdProduto] = useState('');

    const data = {
        nome,
        localizacao,
        DataVencimento,
        idProduto,
        quantidade: Number(quantidade),
    };

    console.log(data);

        async function handleSubmit(e){
            e.preventDefault();
    
            try{
                await api.post(`/estoque`, data, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                });
                alert('Estoque cadastrado!');
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
    
                <h2 className='title'>Adicionar Estoque</h2>
    
                <form className='form' onSubmit={ handleSubmit }>
                    <input value={nome} onChange={e => setNome(e.target.value)} placeholder={'nome'}/>
                    <input value={quantidade} onChange={e => setQuantidade(e.target.value)} placeholder={'Quantidade'}/>
                    <input type={'date'} value={DataVencimento} onChange={e => setDtVencimento(e.target.value)} placeholder={'data de validade'}/>
                    <input value={localizacao} onChange={e => setLocalizacao(e.target.value)} placeholder={'localiza????o'}/>
                    <input value={idProduto} onChange={e => setIdProduto(e.target.value)} placeholder={'produto'}/>
                    <button className='button' type='submit'><FiPlus /> Adicionar Estoque</button>
                </form>
            </div>
        );








}   

