import { Outlet, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

export const OwnerGuard = ({ children }) => {

    const { user } = useAuth();
    const { userId } = useParams();

    if (user.id !== userId) {
        //eslint-disable-next-line
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