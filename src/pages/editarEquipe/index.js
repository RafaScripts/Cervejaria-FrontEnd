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
    const [equipe, setEquipe] = useState([]);


    async function loadEquipe(){
        await api.get(`/equipe?id=${localStorage.getItem('idEquipe')}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }).then(response => {
            if(response.status === 400){
                alert('Erro ao carregar equipe');
            }
            setEquipe(response.data);
        }).catch(error => {
            alert('Erro ao carregar equipe' + error);
        });
    }

    loadEquipe();

    const data = {
        nome_equipe: nome_equipe,
        regiao: regiao,
        gerente: gerente
    };

    console.log(data);


        async function handleSubmit(e){
            e.preventDefault();
    
            try{
                await api.put(`/equipe?id=${localStorage.getItem('idEquipe')}`, data, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                }).then(response => {
                    if(response.status === 200){
                        alert('Equipe editada com sucesso');
                        history.push('/equipe');
                    }
                }).catch(err => alert('error' + err));
            }catch (e) {
                alert(e);
            }
    
            history.push('/equipes');
        }


        return(
            <div>
                <header className='header'>
                    <h3><a className='home' href='/home'>{name}</a></h3>
                    <Link className='button' to="/equipes"><FiArrowLeftCircle /> Voltar</Link>
                </header>
    
                <h2 className='title'>Editar Equipe</h2>

                {
                    equipe.map(equipe => (
                        <form className={'form'} onSubmit={handleSubmit} key={equipe.id}>
                            <input required type='text' value={nome_equipe} onChange={e => setNome_equipe(e.target.value)} placeholder={equipe.nome_equipe}/>
                            <input required type='text' value={regiao} onChange={e => setRegiao(e.target.value)} placeholder={equipe.regiao} />
                            <input required type='text' value={gerente} onChange={e => setGerente(e.target.value)} placeholder={equipe.gerente}/>
                            <button className={'button'} type='submit'><FiFileText /> editar</button>
                        </form>
                    ))
                }
            </div>
        );
}