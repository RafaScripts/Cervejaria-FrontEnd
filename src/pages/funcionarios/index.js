import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import api from '../../services/api';
import './styles.css';

export default function Funcionarios(){
    const [funcionarios, setFuncionarios] = useState([]);

    useEffect(() => {
        async function loadFuncionarios() {
            const response = await api.get('/funcionario');

            setFuncionarios(response.data);
        }

        loadFuncionarios();
    }, [funcionarios]);

    return (
        <div>
            <header>
                <h3>CervSYS</h3>
                <Link to="/">Home</Link>
            </header>

            <table className='table-bordered'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>cidade</th>
                        <th>estado</th>
                        <th>equipe</th>
                    </tr>
                </thead>
                <tbody>
                {funcionarios.map(value => (
                    <tr key={value.id}>
                        <td>{value.nome}</td>
                        <td>{value.email}</td>
                        <td>{value.cidade}</td>
                        <td>{value.estado}</td>
                        <td>{value.id_equipe}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}