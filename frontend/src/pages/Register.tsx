// **Sample code for reference. Replace with your own implementation.**

import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { RegisterForm } from '../features/authentication/components/RegisterForm';

export const Register = () => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Navigate to="/my-account" replace />;
    }

    return (
        <div>
            <RegisterForm />
        </div>
    );
};
