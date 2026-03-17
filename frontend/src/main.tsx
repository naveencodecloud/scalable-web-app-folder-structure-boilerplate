import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ThemeContextProvider from './app/context/ThemeContext.tsx'
import { AuthProvider } from './app/context/AuthContext.tsx'


createRoot(document.getElementById('root')!).render(
  <ThemeContextProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ThemeContextProvider>
)
