import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FiFileText, FiTrash2, FiPlus } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
import name from '../../config/names.js';

export default function Clientes({ history }) {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        async function loadClientes() {
            const response = await api.get('/cliente');

            setClientes(response.data);
        }

        loadClientes();
    }, [clientes]);

    async function editar(id) {
        await localStorage.setItem('id', id);

        history.push('/cliente/edit');
    }

    async function deletar(id) {
        await api.delete(`/cliente?id=${id}`);

        alert('Cliente deletado com sucesso!');
    }

    return (
        <div className='main'>
            <header className='header'>
                <h3><a className='home' href='/'>{name}</a></h3>
                <Link className='button' to="/cliente/create"><FiPlus /> Cadastrar Cliente</Link>
            </header>

            <h2 className='title'>Funcionarios</h2>

            <div className='tb'>
                <table className='table'>
                    <thead>
                    <tr className='table' >
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>E-mail</th>
                        <th>cpf</th>
                        <th>Rua</th>
                        <th>Número</th>
                        <th>cidade</th>
                        <th>estado</th>
                        <th>editar</th>
                        <th>deletar</th>
                    </tr>
                    </thead>
                    <tbody>
                    {clientes.map(value => (
                        <tr className='table' key={value.id}>
                            <td>{value.id}</td>
                            <td>{value.nome}</td>
                            <td>{value.telefone}</td>
                            <td>{value.email}</td>
                            <td>{value.cpf}</td>
                            <td>{value.Rua}</td>
                            <td>{value.numero}</td>
                            <td>{value.cidade}</td>
                            <td>{value.estado}</td>
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