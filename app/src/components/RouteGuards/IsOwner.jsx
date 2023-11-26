import { Outlet, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

export const OwnerGuard = ({ children }) => {

    const { user } = useAuth();
    const { userId } = useParams();

    if (user.id !== userId) {
        throw {
            type: 'NotAuthorized'
        }
    }

    return (
        <>
            {children ? children : <Outlet />}
        </>
    );
};