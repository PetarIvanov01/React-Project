import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

export const OnlyGuest = ({ children }) => {

    const { user } = useAuth();

    if (user.id && user.customized) {
        return <Navigate to={'/'} replace />;
    }

    return (
        <>
            {children ? children : <Outlet />}
        </>
    );
};