import { useState } from "react";
import useAuthForm from "../../hooks/authForm";
import { LoginFormStyle } from "./Login.style";
import { ButtonStyle, InputField } from "../../styles/ViewsStyles/CRUDStyle/InputStyle.style";
import { AuthErrorBox } from "../../styles/ViewsStyles/ErrorBoxs.style";

export default function LoginView() {

    const [fields, setFields] = useState({
        email: '',
        password: '',
        err: ''
    });


    const { onChangeHandler, onSubmitHandler } = useAuthForm(fields, setFields);

    return (
        <LoginFormStyle>

            <h2>Login</h2>
            {fields.err ? <AuthErrorBox> <p>{fields.err}</p> </AuthErrorBox> : ''}
            <form onSubmit={(e) => onSubmitHandler(e, false)} action="#" method="post">

                <InputField>
                    <input type="email"
                        id="email"
                        name="email"
                        placeholder="Email..."
                        required=""
                        onChange={onChangeHandler}
                        value={fields.email} />
                </InputField>

                <InputField>
                    <input type="password"
                        id="password"
                        name="password"
                        placeholder="Password..."
                        required=""
                        onChange={onChangeHandler}
                        value={fields.password} />
                </InputField>

                <ButtonStyle>
                    <button type="submit">Login</button>
                </ButtonStyle>
            </form>

        </LoginFormStyle>

    )
}


