import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeftCircle, FiPlus } from 'react-icons/fi';
import api from '../../services/api';
import name from '../../config/names.js';
import './styles.css';

export default function CreateProduto({ history }) {
    const [nnome, setNome] = useState('');
    const [price, setPrice] = useState();
    const [commission, setCommission] = useState();
    const [description, setDescription] = useState('');

    const data = {
        nome: nnome,
        price: Number(price),
        commission: Number(commission),
        description
        };

        async function handleSubmit(e){
            e.preventDefault();
    
            try{
                await api.post('/produtos', data, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                });
                alert('Produto cadastrado!');
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
    
                <h2 className='title'>Cadastrar Produto</h2>
    
                <form className='form' onSubmit={ handleSubmit }>
                    <input type='text' value={nnome} onChange={e => setNome(e.target.value)} placeholder={'Nome do Produto'}/>
                    <input type='text' value={price} onChange={e => setPrice(e.target.value)} placeholder={'Preço: 1.5'} />
                    <input type='text' value={commission} onChange={e => setCommission(e.target.value)} placeholder={'Comissão: 1'}/>
                    <input value={description} onChange={e => setDescription(e.target.value)} placeholder={'Descrição'}/>
                    <button className='button' type='submit'><FiPlus /> Cadastrar Produto</button>
                </form>
            </div>
        );








}   

