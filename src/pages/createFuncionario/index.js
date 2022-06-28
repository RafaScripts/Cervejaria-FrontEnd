import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeftCircle, FiPlus } from 'react-icons/fi';
import api from '../../services/api';
import name from '../../config/names.js';
import './styles.css';

export default function Createfuncionario({ history }) {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [cpf, setCpf] = useState('');
    const [Rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');
    const [id, setId] = useState(Number);

    const data = {
        nome,
        email,
        telefone,
        password,
        username,
        cpf,
        Rua,
        numero,
        estado,
        cidade,
        cep,
        id_equipe: Number(id)
    };

    async function handleSubmit(e){
        e.preventDefault();

        try{
            await api.post('/funcionario', data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            alert('Funcionario cadastrado com sucesso!');
        }catch (e) {
            alert(e);
        }

        history.push('/funcionarios');
    }

    return(
        <div>
            <header className='header'>
                <h3><a className='home' href='/home'>{name}</a></h3>
                <Link className='button' to="/funcionarios"><FiArrowLeftCircle /> Voltar</Link>
            </header>

            <h2 className='title'>Cadastrar Funcionario</h2>

            <form className='form' onSubmit={ handleSubmit }>
                <input type='text' placeholder='Nome completo' value={nome} onChange={e => setNome(e.target.value)}/>
                <input type='text' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                <input type='text' placeholder='Telefone' value={telefone} onChange={e => setTelefone(e.target.value)}/>
                <input type='text' placeholder='username' value={username} onChange={e => setUsername(e.target.value)}/>
                <input type='password' placeholder='Senha' value={password} onChange={e => setPassword(e.target.value)}/>
                <input type='text' placeholder='cpf' value={cpf} onChange={e => setCpf(e.target.value)}/>
                <input type='text' placeholder='Rua' value={Rua} onChange={e => setRua(e.target.value)}/>
                <input type='text' placeholder='Número' value={numero} onChange={e => setNumero(e.target.value)}/>
                <input type='text' placeholder='Estado' value={estado} onChange={e => setEstado(e.target.value)}/>
                <input type='text' placeholder='Cidade' value={cidade} onChange={e => setCidade(e.target.value)}/>
                <input type='text' placeholder='CEP' value={cep} onChange={e => setCep(e.target.value)}/>
                <input type='number' placeholder='ID Equipe' value={id} onChange={e => setId(e.target.value)}/>
                <button className='button' type='submit'><FiPlus /> Cadastrar</button>
            </form>
        </div>
    );
}