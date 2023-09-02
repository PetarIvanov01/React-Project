import { createContext, useContext, useState } from 'react'
import { getUserData } from '../api/user';

const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const hasUser = getUserData();
    const [user, setUser] = useState(hasUser);

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