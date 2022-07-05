import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FiFileText, FiTrash2, FiPlus } from 'react-icons/fi';
import api from '../../services/api';
import moment from 'moment';
import './styles.css';
import name from '../../config/names.js';



export default function Estoque({ history }) {
    const [Estoque, setEstoque] = useState([]);



    useEffect(() => {
        async function loadEstoque() {
            const token = localStorage.getItem('token');
            const response = await api.get('/estoque', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setEstoque(response.data);
        }

        loadEstoque();
    });

    async function editar(id) {
        await localStorage.setItem('idEstoque', id);

        history.push('/estoque/edit');
    }

    async function deletar(id) {
        const response = await api.delete(`/estoque?id=${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });

        alert(response[0].data);
    }

    return (
        <div className='main'>
            <header className='header'>
                <h3><a className='home' href='/home'>{name}</a></h3>
                <Link className='button' to="/estoque/add"><FiPlus /> Cadastrar Estoque</Link>
            </header>

            <h2 className='title'>Estoque</h2>

            <div className='tb'>
                <table className='table'>
                    <thead>
                    <tr className='table' >
                        <th>ID</th>
                        <th>Nome</th>
                        <th>quantidade</th>
                        <th>Localização</th>
                        <th>Validade</th>
                        <th>Data de Cadastro</th>
                        <th>editar</th>
                        <th>deletar</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Estoque.map((value, index) => (
                        <tr className='table' key={value.id}>
                            <td>{value.id}</td>
                            <td>{value.nome}</td>
                            <td>{value.quantidade}</td>
                            <td>{value.localizacao}</td>
                            <td>{moment(value.dataVencimento).format('DD/MM/YYYY')}</td>
                            <td>{moment(value.created_at).format('DD/MM/YYYY')}</td>
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


