import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

export const HasProfile = ({ children }) => {

    const { user } = useAuth();

    if (!user.id) {
        return <Navigate to={'/login'} replace />;
    }

    if (user.customized) {
        return <Navigate to={'/'} replace />;
    }

    return (
        <>
            {children ? children : <Outlet />}
        </>
    );
};