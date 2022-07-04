import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';
import { FiFileText, FiArrowLeftCircle } from 'react-icons/fi';

export default function EditarProduto({ history }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState();
  const [commission, setCommission] = useState();
  const [description, setDescription] = useState('');
  const [produto, setProduto] = useState([]);

  console.log(produto);

  useEffect(() => {
    async function loadProduto(){
      const response = await api.get(`/produtos?id=${localStorage.getItem('idProduto')}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });

      setProduto(response.data);
    }
    loadProduto();
  }, []);

  useEffect(() => {
    async function loadDataValues() {

      let valor = toString(produto[0].price);
      let comissao = toString(produto[0].commission);

      console.log(valor, comissao);

      setName(produto[0].nome);
      setPrice(valor);
      setCommission(comissao);
      setDescription(produto[0].description);
    }
    loadDataValues();
  });

  console.log(name, price, commission, description);

  const data = {
    nome: name,
    price: Number(price),
    commission: Number(commission),
    description
  };

  console.log(data);


  async function handleSubmit(e){
    e.preventDefault();
    try{
      await api.put(`/produtos?id=${localStorage.getItem('idProduto')}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });
      alert('Produto alterado!');
    }catch (e) {
      alert(e);
    }
    history.push('/produtos');
  }

  return(
    <div>
      <header className='header'>
        <h3><a className='home' href='/home'>CervSys</a></h3>
        <Link className='button' to="/produtos"><FiArrowLeftCircle /> Voltar</Link>
      </header>

      <h2 className='title'>Editar Produto</h2>

      {
        <form className={'form'} onSubmit={handleSubmit} >
          <div className="input-group">
            <input type='text' value={name} onChange={e => setName(e.target.value)}/>
            <input type='text' value={price} onChange={e => setPrice(e.target.value)}  />
            <input type='text' value={commission} onChange={e => setCommission(e.target.value)} />
            <input value={description} onChange={e => setDescription(e.target.value)} />
          </div>
          <button className={'button'} type='submit'><FiFileText /> editar</button>
        </form>


        /*
        produto.map(produto => {
            return (
                <form className={'form'} onSubmit={handleSubmit} key={produto.id}>
                    <input type='text' value={name} onChange={e => setName(e.target.value)} placeholder={produto.name}/>
                    <input type='text' value={price} onChange={e => setPrice(e.target.value)} placeholder={produto.price} />
                    <input type='text' value={commission} onChange={e => setCommission(e.target.value)} placeholder={produto.commission}/>
                    <input type='text' value={description} onChange={e => setDescription(e.target.value)} placeholder={produto.description}/>
                    <button className={'button'} type='submit'><FiFileText /> editar</button>
                </form>
            )
        })
        */
      }

    </div>
  );
}