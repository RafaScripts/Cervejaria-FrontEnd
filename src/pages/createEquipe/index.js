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

    const data = {
        nome_equipe,
            regiao,
            gerente
 
        };

        async function handleSubmit(e){
            e.preventDefault();
    
            try{
                await api.post('/equipe', data, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                });
                alert('Equipe cadastrado!');
            }catch (e) {
                alert(e);
            }
    
            history.push('/home');
        }



        return(
            <div>
                <header className='header'>
                    <h3><a className='home' href='/home'>{name}</a></h3>
                    <Link className='button' to="/equipes"><FiArrowLeftCircle /> Voltar</Link>
                </header>
    
                <h2 className='title'>Cadastrar Equipe</h2>
    
                <form className='form' onSubmit={ handleSubmit }>
                    <input required type='text' placeholder='Nome Equipe' value={nome_equipe} onChange={e => setNome_equipe(e.target.value) }/>
                    <input required type='text' placeholder='Região' value={regiao} onChange={e => setRegiao(e.target.value)}/>
                    <input required type='text' placeholder='Gerente' value={gerente} onChange={e => setGerente(e.target.value)}/>
                    <button className='button' type='submit'><FiPlus /> Cadastrar Equipe</button>
                </form>
            </div>
        );








}   

