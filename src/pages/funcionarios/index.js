import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import api from '../../services/api';
import './styles.css';

export default function Funcionarios({ history }) {
    const [funcionarios, setFuncionarios] = useState([]);

    useEffect(() => {
        async function loadFuncionarios() {
            const response = await api.get('/funcionario');

            setFuncionarios(response.data);
        }

        loadFuncionarios();
    }, [funcionarios]);

    async function editar(id) {
        await localStorage.setItem('id', id);

        history.push('/funcionario/edit');
    }

    async function deletar(id) {
        await api.delete(`/funcionario?id=${id}`);

        alert('Funcionário deletado com sucesso!');
    }

    return (
        <div>
            <header>
                <h3>CervSYS</h3>
                <Link to="/">Home</Link>
                <Link to="/funcionario/create">Cadastrar Funcionário</Link>
            </header>

            <table className='table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>cpf</th>
                        <th>Rua</th>
                        <th>Número</th>
                        <th>cidade</th>
                        <th>estado</th>
                        <th>equipe</th>
                        <th>editar</th>
                        <th>deletar</th>
                    </tr>
                </thead>
                <tbody>
                {funcionarios.map(value => (
                    <tr key={value.id}>
                        <td>{value.id}</td>
                        <td>{value.nome}</td>
                        <td>{value.email}</td>
                        <td>{value.cpf}</td>
                        <td>{value.Rua}</td>
                        <td>{value.cidade}</td>
                        <td>{value.estado}</td>
                        <td>{value.id_equipe}</td>
                        <td><button onClick={() => editar(value.id)}>ed</button></td>
                        <td><button onClick={() => deletar(value.id)} >del</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}