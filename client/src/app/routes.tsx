// **Sample code for reference. Replace with your own implementation.**

// # All app routes defined in one place using React Router

import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { MyAccount } from '../pages/MyAccount';
import { ContactUs } from '../pages/ContactUs';
import { MainLayout } from '../layouts/MainLayout';
import { About } from '../pages/About';


export default function AppRoutes() {
    const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
        const { isAuthenticated } = useAuth();
        return isAuthenticated ? children : <Navigate to="/login" />;
    };

    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />

                {/* Sign In & Sign Up */}
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />

                {/* User Profile */}
                <Route path="my-account" element={<ProtectedRoute><MyAccount /></ProtectedRoute>} />

                <Route path="page/contact-us" element={<ContactUs />} />
                <Route path="page/about" element={<About />} />

                {/* Not Found */}
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}
