import React, { useState } from 'react';
import api from "../../services/api";
import './styles.css';

export default function Login({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await api.post('/login', {
            email,
            password
        });

        console.log(response);
        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data));
            localStorage.setItem('token', response.data.token);
            history.push('/home');
        } else {
            alert('Login ou senha incorretos!');
        }
    }
    return(
        <div className='login'>
            <section className='form'>
                <h1 className='title'>Login:</h1>
                <form onSubmit={handleLogin}>
                    <input placeholder={'Email'} type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <input placeholder={'Senha'} type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button className='buttonSub' type='submit'>Entrar</button>
                </form>
            </section>
        </div>
    );
}