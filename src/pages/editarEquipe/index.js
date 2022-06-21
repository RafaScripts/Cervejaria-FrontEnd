import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';
import name from "../../config/names";
import { FiFileText, FiArrowLeftCircle } from 'react-icons/fi';

export default function EditarEquipe({ history }) {
    const [nome_equipe, setNome_equipe] = useState('');
    const [regiao, setRegiao] = useState('');
    const [gerente, setGerente] = useState('');
    const [hist_gerente, setHist_gerente] = useState('');
    const [id_equipe, setId_equipe] = useState('');


    async function loadEquipe(){
        const response = await api.get(`/equipe?id=${localStorage.getItem('id')}`);

        setEquipe(response.data);
    }

    loadEquipe();

    const data = {
        nome_equipe,
            regiao,
            gerente,
            id_equipe
 
        };


        async function handleSubmit(e){
            e.preventDefault();
    
            try{
                await api.put(`/equipe?id=${localStorage.getItem('id')}`, data);
                alert('Equipe alterada!');
            }catch (e) {
                alert(e);
            }
    
            history.push('/');
        }


        return(
            <div>
                <header className='header'>
                    <h3><a className='home' href='/'>{name}</a></h3>
                    <Link className='button' to="/"><FiArrowLeftCircle /> Voltar</Link>
                </header>
    
                <h2 className='title'>Editar Equipe</h2>
    
                <form className='form' onSubmit={ handleSubmit }>
                    <input type='text' placeholder='Nome Equipe' value={nome} onChange={e => setNome_equipe(e.target.value)}/>
                    <input type='text' placeholder='Região' value={email} onChange={e => setRegiao(e.target.value)}/><input type='text' placeholder='Funcionário' value={telefone} onChange={e => setFuncionario(e.target.value)}/>
                    <input type='text' placeholder='Gerente' value={username} onChange={e => setGerente(e.target.value)}/>
                    <input type='text' placeholder='ID Equipe' value={cidade} onChange={e => setId_equipe(e.target.value)}/>
                    <button className='button' type='submit'><FiPlus /> Cadastrar Equipe</button>
                </form>
            </div>
        );

}