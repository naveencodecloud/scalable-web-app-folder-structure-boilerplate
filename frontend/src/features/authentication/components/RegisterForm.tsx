// **Sample code for reference. Replace with your own implementation.**

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../authApi';
import { useAuth } from '../../../hooks/useAuth';

export const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        try {
            const res = await authApi.register({ email, password });
            login(res.token, res.user);
            navigate('/my-account', { replace: true });
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Registration failed.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            {error && <p>{error}</p>}
            <button type="submit">Register</button>
        </form>
    );
};
