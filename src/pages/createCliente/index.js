import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeftCircle, FiPlus } from 'react-icons/fi';
import api from '../../services/api';
import name from '../../config/names.js';
import './styles.css';

export default function CreateCliente({ history }) {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [Rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');
    const [id, setId] = useState(Number);

    const data = {
        email,
        nome,
        cpf,
        Rua,
        numero,
        telefone,
        cidade,           
        estado,
        cep,
    };

    async function handleSubmit(e){
        e.preventDefault();

        try{
            await api.post('/cliente', data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            alert('Cliente cadastrado com sucesso!');
        }catch (e) {
            alert(e);
        }

        history.push('/clientes');
    }

    return(
        <div>
            <header className='header'>
                <h3><a className='home' href='/home'>{name}</a></h3>
                <Link className='button' to="/clientes"><FiArrowLeftCircle /> Voltar</Link>
            </header>

            <h2 className='title'>Cadastrar Cliente</h2>

            <form className='form' onSubmit={ handleSubmit }>
                <input required type='text' placeholder='Nome completo' value={nome} onChange={e => setNome(e.target.value)}/>
                <input required type='text' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                <input required type='text' placeholder='Telefone' value={telefone} onChange={e => setTelefone(e.target.value)}/>
                <input required type='text' placeholder='cpf / cnpj' value={cpf} onChange={e => setCpf(e.target.value)}/>
                <input required type='text' placeholder='Rua' value={Rua} onChange={e => setRua(e.target.value)}/>
                <input required type='text' placeholder='Número' value={numero} onChange={e => setNumero(e.target.value)}/>
                <input required type='text' placeholder='Estado' value={estado} onChange={e => setEstado(e.target.value)}/>
                <input requiered type='text' placeholder='Cidade' value={cidade} onChange={e => setCidade(e.target.value)}/>
                <input required type='text' placeholder='CEP' value={cep} onChange={e => setCep(e.target.value)}/>
                <button className='button' type='submit'><FiPlus /> Cadastrar</button>
            </form>
        </div>
    );
}