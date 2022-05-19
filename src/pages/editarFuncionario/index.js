import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

export default function EditarFuncionario({ history }) {
    const [funcionario, setFuncionario] = useState([]);
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

    async function loadFuncionario(){
        const response = await api.get(`/funcionario?id=${localStorage.getItem('id')}`);

        setFuncionario(response.data);
    }

    loadFuncionario();

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
            await api.put(`/funcionario?id=${localStorage.getItem('id')}`, data);
            alert('Funcionario editado com sucesso!');
        }catch (e) {
            alert(e);
        }

        history.push('/');
    }

    return(
        <div>
            <header>
                <h2>cervSYS</h2>
                <Link to="/">Home</Link>
            </header>

            {funcionario.map(value => (
                <form key={value.id} onSubmit={ handleSubmit }>
                    <input type='text' placeholder={value.nome} value={nome} onChange={e => setNome(e.target.value)}/>
                    <input type='text' placeholder={value.email} value={email} onChange={e => setEmail(e.target.value)}/>
                    <input type='text' placeholder={value.username} value={username} onChange={e => setUsername(e.target.value)}/>
                    <input type='text' placeholder='Nova Senha' value={password} onChange={e => setPassword(e.target.value)}/>
                    <input type='text' placeholder={value.cpf} value={cpf} onChange={e => setCpf(e.target.value)}/>
                    <input type='text' placeholder={value.Rua} value={Rua} onChange={e => setRua(e.target.value)}/>
                    <input type='text' placeholder={value.numero} value={numero} onChange={e => setNumero(e.target.value)}/>
                    <input type='text' placeholder={value.estado} value={estado} onChange={e => setEstado(e.target.value)}/>
                    <input type='text' placeholder={value.cidade} value={cidade} onChange={e => setCidade(e.target.value)}/>
                    <input type='text' placeholder={value.cep} value={cep} onChange={e => setCep(e.target.value)}/>
                    <input type='number' placeholder={value.id_equipe} value={id} onChange={e => setId(e.target.value)}/>
                    <button type='submit'>Editar</button>
                </form>
            ))}

        </div>
    );
}