import { LoginContainerStyle } from "../../../styles/ViewsStyles/LoginStyle/Login.style";
import { useState } from "react";
import useAuthForm from "../../../hooks/authForm";

export default function LoginView() {

    const [fields, setFields] = useState({
        email: '',
        password: '',
        err: ''
    });


    const { onChangeHandler, onSubmitHandler } = useAuthForm(fields, setFields);

    return (
        <LoginContainerStyle>

            <h2>Login</h2>
            {fields.err ? <h3>{fields.err}</h3> : ''}
            <br />
            <form onSubmit={onSubmitHandler} action="#" method="post">
                <label htmlFor="email">Email:</label>
                <input type="email"
                    id="email"
                    name="email"
                    required=""
                    onChange={onChangeHandler}
                    value={fields.email} />
                <label htmlFor="password">Password:</label>
                <input type="password"
                    id="password"
                    name="password"
                    required=""
                    onChange={onChangeHandler}
                    value={fields.password} />
                <button type="submit">Login</button>
            </form>

        </LoginContainerStyle>

    )
}