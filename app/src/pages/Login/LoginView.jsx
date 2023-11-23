import { useState } from "react";
import useAuthForm from "../../hooks/authForm";

import { ButtonStyle, InputField } from "../../styles/ViewsStyles/CRUDStyle/InputStyle.style";
import { AuthErrorBox } from "../../styles/ViewsStyles/ErrorBoxs.style";
import { Link } from "react-router-dom";
import { AuthForm, ProfileActionMessage } from "../../styles/AuthForm.styled";

export default function LoginView() {

    const [fields, setFields] = useState({
        email: '',
        password: '',
        err: ''
    });


    const { onChangeHandler, onSubmitHandler } = useAuthForm(fields, setFields);

    return (
        <AuthForm>

            <h2>Login</h2>
            {fields.err ? <AuthErrorBox> <p>{fields.err}</p> </AuthErrorBox> : ''}
            <form onSubmit={(e) => onSubmitHandler(e, false)} action="#" method="post">

                <InputField>
                    <input type="email"
                        id="email"
                        name="email"
                        minLength={5}
                        autoComplete="off"
                        placeholder="Email..."
                        required={true}
                        onChange={onChangeHandler}
                        value={fields.email} />
                </InputField>

                <InputField>
                    <input type="password"
                        id="password"
                        autoComplete="off"
                        name="password"
                        minLength={5}
                        placeholder="Password..."
                        required={true}
                        onChange={onChangeHandler}
                        value={fields.password} />
                </InputField>

                <ButtonStyle>
                    <button type="submit">Login</button>
                </ButtonStyle>

            </form>

            <ProfileActionMessage>
                <p>Don't have a profile? <Link to={'/register'}>Sign Up</Link>.</p>
            </ProfileActionMessage>
        </AuthForm>

    )
}

