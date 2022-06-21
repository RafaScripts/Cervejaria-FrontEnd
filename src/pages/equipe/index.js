import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FiFileText, FiTrash2, FiPlus } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
import name from '../../config/names.js';



export default function Equipe({ history }) {
    const [equipe, setEquipe] = useState([]);

    useEffect(() => {
        async function loadEquipe() {
            const response = await api.get('/equipe');

            setEquipe(response.data);
        }

        loadEquipe();
    }, [equipe]);

    async function editar(id) {
        await localStorage.setItem('id', id);

        history.push('/equipe/edit');
    }

    async function deletar(id) {
        await api.delete(`/equipe?id=${id}`);

        alert('Equipe Deletada !');
    }
    return (
        <div className='main'>
            <header className='header'>
                <h3><a className='home' href='/'>{name}</a></h3>
                <Link className='button' to="/equipe/create"><FiPlus /> Cadastrar Equipe</Link>
            </header>

            <h2 className='title'>Equipe</h2>

            <div className='tb'>
                <table className='table'>
                    <thead>
                    <tr className='table' >
                        <th>Nome Equipe</th>
                        <th>Região</th>
                        <th>Gerente</th>
                        <th>Id Equipe</th>
                        <th>editar</th>
                        <th>deletar</th>
                    </tr>
                    </thead>
                    <tbody>

                    {equipe.map(value =>(
                         <tr className='table' key={value.id}>
                        <td>{value.nome_equipe}</td>
                        <td>{value.regiao}</td>
                        <td>{value.gerente}</td>
                        <td>{value.id_equipe}</td>
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