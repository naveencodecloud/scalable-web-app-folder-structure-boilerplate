// **Sample code for reference. Replace with your own implementation.**

import { useState } from 'react';
import { authApi } from '../authApi';
import { useAuth } from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await authApi.login({ email, password });
        login(res.token, res.user);
        const from = location.state?.from?.pathname ?? '/';
        navigate(from, { replace: true });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
};



// **Flow:**
// 1. User submits LoginForm
// 2. `authApi.login()` sends POST /auth/login to backend
// 3. On success, call `login(user, token)` from `useAuth()` to persist the session
// 4. Redirect to homepage or protected page