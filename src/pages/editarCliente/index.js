import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';
import name from "../../config/names";
import { FiFileText, FiArrowLeftCircle } from 'react-icons/fi';

export default function EditarCliente({ history }) {
  const [cliente, setCliente] = useState([]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [Rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');

  useEffect(() => {
    async function loadCliente(){
      const response = await api.get(`/cliente?id=${localStorage.getItem('id')}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });

      setCliente(response.data);
    }
    loadCliente();
  }, []);

  useEffect(() => {
    async function loadDataValues() {
      console.log(cliente);
      setNome(cliente[0].nome);
      setTelefone(cliente[0].telefone);
      setEmail(cliente[0].email);
      setCpf(cliente[0].cpf);
      setRua(cliente[0].Rua);
      setNumero(cliente[0].numero);
      setEstado(cliente[0].estado);
      setCidade(cliente[0].cidade);
      setCep(cliente[0].cep);
    }

    loadDataValues();
  }, [cliente]);

  const data = {
    nome,
    email,
    telefone,
    cpf,
    Rua,
    numero,
    estado,
    cidade,
    cep,
  };

  async function handleSubmit(e){
    e.preventDefault();

    try{
      await api.put(`/cliente?id=${localStorage.getItem('id')}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });
      alert('Cliente editado com sucesso!');
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

      <h2 className='title'>Editar Cliente</h2>

      {cliente.map(value => (
        <form className='form' key={value.id} onSubmit={ handleSubmit }>
          <input required type='text' placeholder={value.nome} value={nome} onChange={e => setNome(e.target.value)}/>
          <input required type='text' placeholder={value.telefone} value={telefone} onChange={e => setTelefone(e.target.value)}/>
          <input required type='text' placeholder={value.email} value={email} onChange={e => setEmail(e.target.value)}/>
          <input required type='text' placeholder={value.cpf} value={cpf} onChange={e => setCpf(e.target.value)}/>
          <input required type='text' placeholder={value.Rua} value={Rua} onChange={e => setRua(e.target.value)}/>
          <input required type='text' placeholder={value.numero} value={numero} onChange={e => setNumero(e.target.value)}/>
          <input required type='text' placeholder={value.estado} value={estado} onChange={e => setEstado(e.target.value)}/>
          <input required type='text' placeholder={value.cidade} value={cidade} onChange={e => setCidade(e.target.value)}/>
          <input required type='text' placeholder={value.cep} value={cep} onChange={e => setCep(e.target.value)}/>
          <button className='button' type='submit'><FiFileText /> Editar</button>
        </form>
      ))}

    </div>
  );
}