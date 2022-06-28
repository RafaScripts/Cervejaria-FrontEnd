import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';
import name from "../../config/names";
import { FiFileText, FiArrowLeftCircle } from 'react-icons/fi';

export default function EditarProduto({ history }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [commission, setCommission] = useState(0);
    const [description, setDescription] = useState('');
    const [produto, setProduto] = useState([]);


    async function loadProduto(){
        const response = await api.get(`/produtos?id=${localStorage.getItem('idProduto')}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });

        setProduto(response.data);
    }

    loadProduto();

    const data = {
        name,
        price,
        commission,
        description
        };


        async function handleSubmit(e){
            e.preventDefault();
    
            try{
                await api.put(`/produto?id=${localStorage.getItem('idProduto')}`, data, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                });
                alert('Equipe alterada!');
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
    
                <h2 className='title'>Editar Produto</h2>

                {
                    produto.map(produto => (
                        <div className='form'>
                            <form className={'form'} onSubmit={handleSubmit} key={produto.id}>
                                <div className='input-group'>
                                    <input type='text' value={name} onChange={e => setName(e.target.value)} placeholder={produto.name}/>
                                    <input type='text' value={price} onChange={e => setPrice(e.target.value)} placeholder={produto.price} />
                                    <input type='text' value={commission} onChange={e => setCommission(e.target.value)} placeholder={produto.commission}/>
                                </div>
                                <textarea type='text' value={description} onChange={e => setDescription(e.target.value)} placeholder={produto.description}/>
                                <button className={'button'} type='submit'><FiFileText /> editar</button>
                            </form>
                        </div>
                    ))
                }
            </div>
        );
}