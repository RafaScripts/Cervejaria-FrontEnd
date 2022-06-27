import React, { useState, useEffect } from 'react';
import api from "../../services/api";

export default function Login({ History }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const response = await api.post('/login', {
            email,
            password
        });
        if (response.data.success) {
            localStorage.setItem('user', JSON.stringify(response.data));
            localStorage.setItem('token', response.data.token);
            History.push('/home');
        } else {
            alert('Login ou senha incorretos!');
        }
    }
    return(
        <div className='main'>
            <div>
                <h2 className='title'>Login</h2>
                <form>
                    <label>Email:</label>
                    <input type='email' />
                    <label>Senha:</label>
                    <input type='password' />
                </form>
            </div>
        </div>
    );
}