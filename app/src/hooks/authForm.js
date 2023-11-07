import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";

import { login, register } from "../api/services/goalsApi";
import { validateAuth } from "../validations/validateAuth";

export default function useAuthForm(fields, setFields) {

    const navigate = useNavigate();
    const { setUser } = useAuth();

    async function onSubmitHandler(e, isRegistering) {
        e.preventDefault();
        try {

            validateAuth(fields, isRegistering);

            const user = isRegistering
                ? await register(fields.email, fields.password)
                : await login(fields.email, fields.password);

            setUser(user);
            isRegistering ? navigate("/create/profile") : navigate("/goals");

        } catch (error) {
            setFields((state) => ({ ...state, err: error.message }));
        }
    }

    function onChangeHandler(e) {
        setFields((state) => ({ ...state, [e.target.name]: e.target.value, err: "" }));
    }

    return {
        onChangeHandler,
        onSubmitHandler,
    };

}