import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeftCircle, FiPlus } from 'react-icons/fi';
import api from '../../services/api';
import name from '../../config/names.js';
import './styles.css';

export default function CreateEquipe({ history }) {
    const [nome_equipe, setNome_equipe] = useState('');
    const [regiao, setRegiao] = useState('');
    const [gerente, setGerente] = useState('');
    const [id_equipe, setId_equipe] = useState('');

    const data = {
        nome_equipe,
            regiao,
            gerente,
            id_equipe
 
        };

        async function handleSubmit(e){
            e.preventDefault();
    
            try{
                await api.post('/equipe', data);
                alert('Equipe cadastrado!');
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
    
                <h2 className='title'>Cadastrar Equipe</h2>
    
                <form className='form' onSubmit={ handleSubmit }>
                    <input type='text' placeholder='Nome Equipe' value={nome} onChange={e => setNome_equipe(e.target.value)}/>
                    <input type='text' placeholder='Região' value={email} onChange={e => setRegiao(e.target.value)}/>
                    <input type='text' placeholder='Gerente' value={username} onChange={e => setGerente(e.target.value)}/>
                    <input type='text' placeholder='ID Equipe' value={cidade} onChange={e => setId_equipe(e.target.value)}/>
                    <button className='button' type='submit'><FiPlus /> Cadastrar Equipe</button>
                </form>
            </div>
        );








}   

