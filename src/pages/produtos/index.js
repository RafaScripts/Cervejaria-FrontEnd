import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FiFileText, FiTrash2, FiPlus } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
import name from '../../config/names.js';



export default function Produtos({ history }) {
    const [produtos, setProdutos] = useState([]);



    useEffect(() => {
        async function loadProdutos() {
            const token = localStorage.getItem('token');
            const response = await api.get('/produtos', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setProdutos(response.data);
        }

        loadProdutos();
    });

    async function editar(id) {
        await localStorage.setItem('idProduto', id);

        history.push('/produto/edit');
    }

    async function deletar(id) {
        await api.delete(`/produtos?id=${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });

        alert('Produto deletado com sucesso!');
    }

    return (
        <div className='main'>
            <header className='header'>
                <h3><a className='home' href='/home'>{name}</a></h3>
                <Link className='button' to="/produto/create"><FiPlus /> Cadastrar produto</Link>
            </header>

            <h2 className='title'>Produtos</h2>

            <div className='tb'>
                <table className='table'>
                    <thead>
                    <tr className='table' >
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Comissão</th>
                        <th>Descrição</th>
                        <th>editar</th>
                        <th>deletar</th>
                    </tr>
                    </thead>
                    <tbody>
                    {produtos.map((value, index) => (
                        <tr className='table' key={value.id}>
                            <td>{value.id}</td>
                            <td>{value.nome}</td>
                            <td>{value.price}</td>
                            <td>{value.commission}%</td>
                            <td>{value.description}</td>
                            <td><button className='ed' onClick={() => editar(value.id)}><FiFileText /></button></td>
                            <td><button className='del' onClick={() => deletar(value.id)} ><FiTrash2 /></button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


