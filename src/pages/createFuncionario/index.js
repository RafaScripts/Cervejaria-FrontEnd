import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

export default function Createfuncionario({ history }) {
    const [nome, setNome] = useState('');
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
            await api.post('/funcionario', data);
            alert('Funcionario cadastrado com sucesso!');
        }catch (e) {
            alert(e);
        }

        history.push('/');
    }

    return(
        <div className='ody'>
            <header>
                <h2>cervSYS</h2>
                <Link to="/">Home</Link>
            </header>

            <form onSubmit={ handleSubmit }>
                <input type='text' placeholder='Nome completo' value={nome} onChange={e => setNome(e.target.value)}/>
                <input type='text' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                <input type='text' placeholder='username' value={username} onChange={e => setUsername(e.target.value)}/>
                <input type='text' placeholder='Senha' value={password} onChange={e => setPassword(e.target.value)}/>
                <input type='text' placeholder='cpf' value={cpf} onChange={e => setCpf(e.target.value)}/>
                <input type='text' placeholder='Rua' value={Rua} onChange={e => setRua(e.target.value)}/>
                <input type='text' placeholder='Número' value={numero} onChange={e => setNumero(e.target.value)}/>
                <input type='text' placeholder='Estado' value={estado} onChange={e => setEstado(e.target.value)}/>
                <input type='text' placeholder='Cidade' value={cidade} onChange={e => setCidade(e.target.value)}/>
                <input type='text' placeholder='CEP' value={cep} onChange={e => setCep(e.target.value)}/>
                <input type='number' placeholder='ID Equipe' value={id} onChange={e => setId(e.target.value)}/>
                <button type='submit'>Cadastrar</button>
            </form>
        </div>
    );
}