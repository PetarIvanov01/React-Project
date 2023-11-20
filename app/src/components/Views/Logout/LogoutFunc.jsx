import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../contexts/auth";

import { logout } from "../../../api/user";

export default function Logout() {

    const { setUser } = useAuth();

    useEffect(() => {
        const result = logout()
        setUser(result);

    }, [setUser])

    return <Navigate to={'/'} />
}