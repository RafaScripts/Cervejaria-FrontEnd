import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';
import name from "../../config/names";
import { FiFileText, FiArrowLeftCircle } from 'react-icons/fi';

export default function EditarFuncionario({ history }) {
  const [funcionario, setFuncionario] = useState([]);
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


  useEffect(() => {
    async function loadFuncionario(){
      const token = localStorage.getItem('token');
      const response = await api.get(`/funcionario?id=${localStorage.getItem('id')}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      setFuncionario(response.data);
    }

    loadFuncionario();

  }, []);

  useEffect(() => {
    async function loadDataValues() {
      setCep(funcionario[0].cep);
      setCidade(funcionario[0].cidade);
      setEstado(funcionario[0].estado);
      setNumero(funcionario[0].numero);
      setRua(funcionario[0].Rua);
      setCpf(funcionario[0].cpf);
      setEmail(funcionario[0].email);
      setTelefone(funcionario[0].telefone);
      setNome(funcionario[0].nome);
      setUsername(funcionario[0].username);
      setPassword(funcionario[0].password);
      setId(funcionario[0].id);
    };

    loadDataValues();
  }, [funcionario]);



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
      await api.put(`/funcionario?id=${localStorage.getItem('id')}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });
      alert('Funcionario editado com sucesso!');
    }catch (e) {
      alert(e);
    }

    history.push('/funcionarios');
  }

  return(
    <div>
      <header className='header'>
        <h3><a className='home' href='/'>{name}</a></h3>
        <Link className='button' to="/funcionarios"><FiArrowLeftCircle /> Voltar</Link>
      </header>

      <h2 className='title'>Editar Funcionario</h2>

      {funcionario.map(value => (
        <form className='form' key={value.id} onSubmit={ handleSubmit }>
          <input type='text' placeholder={value.nome} value={nome} onChange={e => setNome(e.target.value)}/>
          <input type='text' placeholder={value.telefone} value={telefone} onChange={e => setTelefone(e.target.value)}/>
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
          <button className='button' type='submit'><FiFileText /> Editar</button>
        </form>
      ))}

    </div>
  );
}