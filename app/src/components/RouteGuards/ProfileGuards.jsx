import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { getUserData } from "../../api/user";

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

export const WithoutProfile = ({ children }) => {

    const user = getUserData();

    if (user.id) {

        if (user.customized === false) {
            return <Navigate to={'/create/profile'} replace />;
        }

    }
    return (
        <>
            {children ? children : <Outlet />}
        </>
    );
}