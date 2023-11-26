import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

export const OnlyUser = ({ children }) => {

    const { user } = useAuth();

    if (!user.id) {
        return <Navigate to={'/login'} replace />;
    }

    return (
        <>
            {children ? children : <Outlet />}
        </>
    );
};