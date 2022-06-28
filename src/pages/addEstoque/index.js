import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeftCircle, FiPlus } from 'react-icons/fi';
import api from '../../services/api';
import name from '../../config/names.js';
import './styles.css';

export default function AddEstoque({ history }) {
    const [quantidade, setQuantidade] = useState();

    const data = {
        quantidade: Number(quantidade),
        };

        async function handleSubmit(e){
            e.preventDefault();
    
            try{
                await api.put(`/produtos/estoque?id_estoque=${localStorage.getItem('idEstoque')}`, data, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                });
                alert('Estoque Atualizado!');
            }catch (e) {
                alert(e);
            }
    
            history.push('/produtos');
        }



        return(
            <div>
                <header className='header'>
                    <h3><a className='home' href='/home'>{name}</a></h3>
                    <Link className='button' to="/produtos"><FiArrowLeftCircle /> Voltar</Link>
                </header>
    
                <h2 className='title'>Adicionar Estoque</h2>
    
                <form className='form' onSubmit={ handleSubmit }>
                    <input value={quantidade} onChange={e => setQuantidade(e.target.value)} placeholder={'Quantidade Inicial'}/>
                    <button className='button' type='submit'><FiPlus /> Adicionar Estoque</button>
                </form>
            </div>
        );








}   

