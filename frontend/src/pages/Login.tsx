// **Sample code for reference. Replace with your own implementation.**

// Renders the LoginForm component.
// After login, redirect to homepage or the page the user was trying to access.
// Use useAuth() to check if user is already logged in and redirect away.

import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { LoginForm } from '../features/authentication/components/LoginForm';

export const Login = () => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return (
        <div>
            <LoginForm />
        </div>
    );
};
