import { createContext, useContext } from 'react'
import useAuthStore from '../hooks/useAuthStore';

const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [serializedUser, setUser] = useAuthStore();
    const user = JSON.parse(serializedUser);

    return (
        <AuthContext.Provider value={{ user, setUser }}>

            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)

    return context;
}